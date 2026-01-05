using GentleCars.Api.Domain;
using System.Text.Json;

namespace GentleCars.Api.Infrastructure;

public static class SeedData
{
    public static void EnsureSeed(AppDbContext db)
    {
        if (db.Cars.Any())
        {
            Console.WriteLine("✓ Database already seeded.");
            return;
        }

        Console.WriteLine("→ Seeding database...");

        // 4 Premium Fahrzeuge
        var cars = new List<Car>
        {
            new()
            {
                Slug = "mercedes-cla-45-s",
                Name = "Mercedes-AMG CLA 45 S",
                Brand = "Mercedes-Benz",
                Model = "CLA 45 S AMG",
                Year = 2024,
                ImagesJson = JsonSerializer.Serialize(new[]
                {
                    "/cars/cla-45-s-1.jpg",
                    "/cars/cla-45-s-2.jpg",
                    "/cars/cla-45-s-3.jpg"
                }),
                SpecsJson = JsonSerializer.Serialize(new
                {
                    power = "421 PS",
                    acceleration = "0-100 km/h in 3,9s",
                    topSpeed = "270 km/h",
                    transmission = "8-Gang Doppelkupplung",
                    seats = 5,
                    fuel = "Benzin",
                    features = new[] { "4MATIC+", "AMG Performance Sitze", "Burmester Soundsystem", "Panorama-Schiebedach" }
                }),
                Active = true
            },
            new()
            {
                Slug = "porsche-panamera",
                Name = "Porsche Panamera 4 E-Hybrid",
                Brand = "Porsche",
                Model = "Panamera 4 E-Hybrid",
                Year = 2024,
                ImagesJson = JsonSerializer.Serialize(new[]
                {
                    "/cars/panamera-1.jpg",
                    "/cars/panamera-2.jpg",
                    "/cars/panamera-3.jpg"
                }),
                SpecsJson = JsonSerializer.Serialize(new
                {
                    power = "462 PS",
                    acceleration = "0-100 km/h in 4,4s",
                    topSpeed = "280 km/h",
                    transmission = "8-Gang PDK",
                    seats = 4,
                    fuel = "Hybrid",
                    features = new[] { "Luftfederung", "Sport Chrono Paket", "Bose Surround", "Head-Up Display" }
                }),
                Active = true
            },
            new()
            {
                Slug = "vw-golf-gti-8",
                Name = "VW Golf GTI 8 Clubsport",
                Brand = "Volkswagen",
                Model = "Golf GTI 8 Clubsport",
                Year = 2024,
                ImagesJson = JsonSerializer.Serialize(new[]
                {
                    "/cars/golf-gti-1.jpg",
                    "/cars/golf-gti-2.jpg",
                    "/cars/golf-gti-3.jpg"
                }),
                SpecsJson = JsonSerializer.Serialize(new
                {
                    power = "300 PS",
                    acceleration = "0-100 km/h in 5,6s",
                    topSpeed = "250 km/h",
                    transmission = "7-Gang DSG",
                    seats = 5,
                    fuel = "Benzin",
                    features = new[] { "DCC Fahrwerk", "Harmon Kardon", "Digital Cockpit Pro", "LED Matrix Scheinwerfer" }
                }),
                Active = true
            },
            new()
            {
                Slug = "bmw-m4-competition",
                Name = "BMW M4 Competition",
                Brand = "BMW",
                Model = "M4 Competition",
                Year = 2024,
                ImagesJson = JsonSerializer.Serialize(new[]
                {
                    "/cars/m4-1.jpg",
                    "/cars/m4-2.jpg",
                    "/cars/m4-3.jpg"
                }),
                SpecsJson = JsonSerializer.Serialize(new
                {
                    power = "510 PS",
                    acceleration = "0-100 km/h in 3,9s",
                    topSpeed = "290 km/h",
                    transmission = "8-Gang M Steptronic",
                    seats = 4,
                    fuel = "Benzin",
                    features = new[] { "M xDrive", "Carbon Dach", "Harman Kardon", "Head-Up Display", "M Carbon Keramik Bremse" }
                }),
                Active = true
            }
        };

        db.Cars.AddRange(cars);
        db.SaveChanges();

        Console.WriteLine($"✓ Added {cars.Count} cars.");

        // Pricing Rules (in Cent)
        // Mo-Do: 199€, Fr-Sa: 249€, So: 219€
        foreach (var car in cars)
        {
            var pricingRules = new List<PricingRule>
            {
                new()
                {
                    CarId = car.Id,
                    WeekdayGroup = WeekdayGroup.MonThu,
                    DailyRateCents = 19900, // 199,00 EUR
                    Currency = "EUR"
                },
                new()
                {
                    CarId = car.Id,
                    WeekdayGroup = WeekdayGroup.FriSat,
                    DailyRateCents = 24900, // 249,00 EUR
                    Currency = "EUR"
                },
                new()
                {
                    CarId = car.Id,
                    WeekdayGroup = WeekdayGroup.Sun,
                    DailyRateCents = 21900, // 219,00 EUR
                    Currency = "EUR"
                }
            };

            db.PricingRules.AddRange(pricingRules);
        }

        db.SaveChanges();
        Console.WriteLine("✓ Added pricing rules.");

        // Admin User (dev credentials)
        var adminUser = new AdminUser
        {
            Email = "admin@gentlecars.de",
            Name = "Admin",
            // Password: Admin123! (BCrypt hash)
            PasswordHash = BCrypt.Net.BCrypt.HashPassword("Admin123!"),
            Active = true
        };

        db.AdminUsers.Add(adminUser);
        db.SaveChanges();

        Console.WriteLine("✓ Added admin user (admin@gentlecars.de / Admin123!)");
        Console.WriteLine("✓ Database seeding complete!");
    }
}
