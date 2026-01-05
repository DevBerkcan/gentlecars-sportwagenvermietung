using GentleCars.Api.Contracts;
using GentleCars.Api.Domain;
using GentleCars.Api.Infrastructure;
using GentleCars.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GentleCars.Api.Controllers;

[ApiController]
[Route("api")]
public class BookingsController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly AvailabilityService _availability;
    private readonly PriceQuoteService _pricing;
    private readonly EmailService _email;
    private readonly TimeZoneInfo _tz;
    private readonly ILogger<BookingsController> _logger;

    public BookingsController(
        AppDbContext db,
        AvailabilityService availability,
        PriceQuoteService pricing,
        EmailService email,
        IConfiguration config,
        ILogger<BookingsController> logger)
    {
        _db = db;
        _availability = availability;
        _pricing = pricing;
        _email = email;
        _logger = logger;

        var tzId = config["App:Timezone"] ?? "W. Europe Standard Time";
        _tz = TimeZoneInfo.FindSystemTimeZoneById(tzId);
    }

    /// <summary>
    /// Verfügbarkeit prüfen
    /// </summary>
    [HttpGet("availability")]
    public async Task<IActionResult> CheckAvailability(
        [FromQuery] Guid carId,
        [FromQuery] DateTime from,
        [FromQuery] DateTime to)
    {
        if (to <= from)
        {
            return BadRequest(new { message = "Endzeitpunkt muss nach Startzeitpunkt liegen." });
        }

        var available = await _availability.IsAvailableAsync(carId, from, to);

        return Ok(new { available, carId, from, to });
    }

    /// <summary>
    /// Preisangebot berechnen
    /// </summary>
    [HttpPost("price-quote")]
    public async Task<IActionResult> PriceQuote([FromBody] PriceQuoteRequest req)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            var available = await _availability.IsAvailableAsync(
                req.CarId, req.StartUtc, req.EndUtc);

            if (!available)
            {
                return Conflict(new
                {
                    message = "Das Fahrzeug ist im gewählten Zeitraum nicht verfügbar."
                });
            }

            var quote = await _pricing.CalculateAsync(
                req.CarId, req.StartUtc, req.EndUtc, _tz);

            return Ok(new PriceQuoteResponse(
                quote.TotalCents,
                quote.Currency,
                quote.Breakdown
            ));
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Price quote failed");
            return StatusCode(500, new { message = "Preisberechnung fehlgeschlagen." });
        }
    }

    /// <summary>
    /// Reservierung erstellen
    /// </summary>
    [HttpPost("bookings")]
    public async Task<IActionResult> CreateBooking([FromBody] CreateBookingRequest req)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            // Verfügbarkeit prüfen
            var available = await _availability.IsAvailableAsync(
                req.CarId, req.StartUtc, req.EndUtc);

            if (!available)
            {
                return Conflict(new
                {
                    message = "Das Fahrzeug ist im gewählten Zeitraum nicht verfügbar."
                });
            }

            // Auto laden
            var car = await _db.Cars.FindAsync(req.CarId);
            if (car == null || !car.Active)
            {
                return NotFound(new { message = "Fahrzeug nicht gefunden." });
            }

            // Preis berechnen
            var quote = await _pricing.CalculateAsync(
                req.CarId, req.StartUtc, req.EndUtc, _tz);

            // Kunde erstellen oder finden
            var customer = await _db.Customers
                .FirstOrDefaultAsync(c => c.Email == req.Email);

            if (customer == null)
            {
                customer = new Customer
                {
                    Name = req.Name,
                    Email = req.Email,
                    Phone = req.Phone,
                    Address = req.Address
                };
                _db.Customers.Add(customer);
            }
            else
            {
                // Update existing customer data
                customer.Name = req.Name;
                customer.Phone = req.Phone;
                customer.Address = req.Address;
            }

            // Booking erstellen
            var booking = new Booking
            {
                CarId = req.CarId,
                Customer = customer,
                StartAt = req.StartUtc,
                EndAt = req.EndUtc,
                Status = BookingStatus.Pending,
                TotalPriceCents = quote.TotalCents,
                BreakdownJson = PriceQuoteService.BreakdownToJson(quote.Breakdown)
            };

            _db.Bookings.Add(booking);
            await _db.SaveChangesAsync();

            // E-Mails senden (non-blocking)
            _ = Task.Run(async () =>
            {
                try
                {
                    await _email.SendBookingConfirmationToCustomerAsync(booking, car);
                    await _email.SendBookingNotificationToAdminAsync(booking, car);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Failed to send booking emails");
                }
            });

            return Ok(new CreateBookingResponse(
                booking.Id,
                booking.Status.ToString(),
                quote.TotalCents,
                quote.Currency,
                "Reservierungsanfrage erfolgreich erstellt. Sie erhalten in Kürze eine Bestätigungsemail."
            ));
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Booking creation failed");
            return StatusCode(500, new
            {
                message = "Reservierung konnte nicht erstellt werden. Bitte versuchen Sie es später erneut."
            });
        }
    }
}
