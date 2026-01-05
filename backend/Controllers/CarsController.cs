using GentleCars.Api.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace GentleCars.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    private readonly AppDbContext _db;

    public CarsController(AppDbContext db)
    {
        _db = db;
    }

    /// <summary>
    /// Alle aktiven Fahrzeuge abrufen
    /// </summary>
    [HttpGet]
    public async Task<IActionResult> GetCars()
    {
        var carsData = await _db.Cars
            .Where(c => c.Active)
            .OrderBy(c => c.Name)
            .ToListAsync();

        var cars = carsData.Select(c => new
        {
            c.Id,
            c.Slug,
            c.Name,
            c.Brand,
            c.Model,
            c.Year,
            Images = JsonSerializer.Deserialize<string[]>(c.ImagesJson ?? "[]"),
            Specs = JsonSerializer.Deserialize<object>(c.SpecsJson ?? "{}")
        });

        return Ok(cars);
    }

    /// <summary>
    /// Ein Fahrzeug per Slug abrufen
    /// </summary>
    [HttpGet("{slug}")]
    public async Task<IActionResult> GetCarBySlug(string slug)
    {
        var carData = await _db.Cars
            .Include(c => c.PricingRules)
            .Where(c => c.Slug == slug && c.Active)
            .FirstOrDefaultAsync();

        if (carData == null)
        {
            return NotFound(new { message = "Fahrzeug nicht gefunden." });
        }

        var car = new
        {
            carData.Id,
            carData.Slug,
            carData.Name,
            carData.Brand,
            carData.Model,
            carData.Year,
            Images = JsonSerializer.Deserialize<string[]>(carData.ImagesJson ?? "[]"),
            Specs = JsonSerializer.Deserialize<object>(carData.SpecsJson ?? "{}"),
            Pricing = carData.PricingRules.Select(pr => new
            {
                WeekdayGroup = pr.WeekdayGroup.ToString(),
                DailyRateCents = pr.DailyRateCents,
                pr.Currency
            })
        };

        return Ok(car);
    }
}
