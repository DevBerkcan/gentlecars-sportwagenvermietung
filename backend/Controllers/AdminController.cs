using GentleCars.Api.Contracts;
using GentleCars.Api.Domain;
using GentleCars.Api.Infrastructure;
using GentleCars.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json;

namespace GentleCars.Api.Controllers;

[ApiController]
[Route("api/admin")]
public class AdminController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly EmailService _email;
    private readonly IConfiguration _config;
    private readonly ILogger<AdminController> _logger;

    public AdminController(
        AppDbContext db,
        EmailService email,
        IConfiguration config,
        ILogger<AdminController> logger)
    {
        _db = db;
        _email = email;
        _config = config;
        _logger = logger;
    }

    /// <summary>
    /// Admin Login
    /// </summary>
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] AdminLoginRequest req)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _db.AdminUsers
            .FirstOrDefaultAsync(u => u.Email == req.Email && u.Active);

        if (user == null)
        {
            return Unauthorized(new { message = "Ungültige Anmeldedaten." });
        }

        // Passwort prüfen (BCrypt)
        if (!BCrypt.Net.BCrypt.Verify(req.Password, user.PasswordHash))
        {
            return Unauthorized(new { message = "Ungültige Anmeldedaten." });
        }

        // JWT Token erstellen
        var token = GenerateJwtToken(user);
        var expiryMinutes = int.Parse(_config["Jwt:ExpiryMinutes"] ?? "480");
        var expiresAt = DateTime.UtcNow.AddMinutes(expiryMinutes);

        // Last Login aktualisieren
        user.LastLoginUtc = DateTime.UtcNow;
        await _db.SaveChangesAsync();

        return Ok(new AdminLoginResponse(
            token,
            expiresAt,
            user.Email,
            user.Name
        ));
    }

    /// <summary>
    /// Alle Buchungen abrufen (mit Filtern)
    /// </summary>
    [Authorize]
    [HttpGet("bookings")]
    public async Task<IActionResult> GetBookings(
        [FromQuery] Guid? carId = null,
        [FromQuery] string? status = null,
        [FromQuery] DateTime? from = null,
        [FromQuery] DateTime? to = null)
    {
        var query = _db.Bookings
            .Include(b => b.Car)
            .Include(b => b.Customer)
            .AsQueryable();

        if (carId.HasValue)
        {
            query = query.Where(b => b.CarId == carId.Value);
        }

        if (!string.IsNullOrEmpty(status) && Enum.TryParse<BookingStatus>(status, true, out var statusEnum))
        {
            query = query.Where(b => b.Status == statusEnum);
        }

        if (from.HasValue)
        {
            query = query.Where(b => b.StartAt >= from.Value);
        }

        if (to.HasValue)
        {
            query = query.Where(b => b.EndAt <= to.Value);
        }

        var bookingsData = await query
            .OrderByDescending(b => b.CreatedAtUtc)
            .ToListAsync();

        var bookings = bookingsData.Select(b => new BookingResponse(
            b.Id,
            b.CarId,
            b.Car.Name,
            b.CustomerId,
            b.Customer.Name,
            b.Customer.Email,
            b.Customer.Phone,
            b.StartAt,
            b.EndAt,
            b.Status.ToString(),
            b.TotalPriceCents,
            JsonSerializer.Deserialize<object>(b.BreakdownJson ?? "{}"),
            b.CreatedAtUtc,
            b.ConfirmedAtUtc,
            b.CancelledAtUtc,
            b.AdminNotes
        ));

        return Ok(bookings);
    }

    /// <summary>
    /// Eine Buchung abrufen
    /// </summary>
    [Authorize]
    [HttpGet("bookings/{id}")]
    public async Task<IActionResult> GetBooking(Guid id)
    {
        var booking = await _db.Bookings
            .Include(b => b.Car)
            .Include(b => b.Customer)
            .FirstOrDefaultAsync(b => b.Id == id);

        if (booking == null)
        {
            return NotFound(new { message = "Buchung nicht gefunden." });
        }

        return Ok(new BookingResponse(
            booking.Id,
            booking.CarId,
            booking.Car.Name,
            booking.CustomerId,
            booking.Customer.Name,
            booking.Customer.Email,
            booking.Customer.Phone,
            booking.StartAt,
            booking.EndAt,
            booking.Status.ToString(),
            booking.TotalPriceCents,
            JsonSerializer.Deserialize<object>(booking.BreakdownJson),
            booking.CreatedAtUtc,
            booking.ConfirmedAtUtc,
            booking.CancelledAtUtc,
            booking.AdminNotes
        ));
    }

    /// <summary>
    /// Buchung bestätigen
    /// </summary>
    [Authorize]
    [HttpPost("bookings/{id}/confirm")]
    public async Task<IActionResult> ConfirmBooking(Guid id, [FromBody] UpdateBookingStatusRequest? req)
    {
        var booking = await _db.Bookings
            .Include(b => b.Car)
            .Include(b => b.Customer)
            .FirstOrDefaultAsync(b => b.Id == id);

        if (booking == null)
        {
            return NotFound(new { message = "Buchung nicht gefunden." });
        }

        if (booking.Status != BookingStatus.Pending)
        {
            return BadRequest(new { message = "Nur ausstehende Buchungen können bestätigt werden." });
        }

        booking.Status = BookingStatus.Confirmed;
        booking.ConfirmedAtUtc = DateTime.UtcNow;
        booking.AdminNotes = req?.AdminNotes;

        await _db.SaveChangesAsync();

        // E-Mail an Kunde senden
        _ = Task.Run(async () =>
        {
            try
            {
                await _email.SendBookingConfirmedToCustomerAsync(booking, booking.Car);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to send confirmation email");
            }
        });

        return Ok(new { message = "Buchung wurde bestätigt.", bookingId = booking.Id });
    }

    /// <summary>
    /// Buchung stornieren
    /// </summary>
    [Authorize]
    [HttpPost("bookings/{id}/cancel")]
    public async Task<IActionResult> CancelBooking(Guid id, [FromBody] UpdateBookingStatusRequest? req)
    {
        var booking = await _db.Bookings
            .Include(b => b.Car)
            .Include(b => b.Customer)
            .FirstOrDefaultAsync(b => b.Id == id);

        if (booking == null)
        {
            return NotFound(new { message = "Buchung nicht gefunden." });
        }

        if (booking.Status == BookingStatus.Cancelled)
        {
            return BadRequest(new { message = "Buchung ist bereits storniert." });
        }

        booking.Status = BookingStatus.Cancelled;
        booking.CancelledAtUtc = DateTime.UtcNow;
        booking.AdminNotes = req?.AdminNotes;

        await _db.SaveChangesAsync();

        // TODO: Optional E-Mail an Kunde senden

        return Ok(new { message = "Buchung wurde storniert.", bookingId = booking.Id });
    }

    private string GenerateJwtToken(AdminUser user)
    {
        var secret = _config["Jwt:Secret"] ?? throw new InvalidOperationException("JWT Secret not configured");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expiryMinutes = int.Parse(_config["Jwt:ExpiryMinutes"] ?? "480");

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.Name ?? user.Email),
            new Claim("role", "admin")
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(expiryMinutes),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
