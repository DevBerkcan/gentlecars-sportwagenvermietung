using GentleCars.Api.Domain;
using GentleCars.Api.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace GentleCars.Api.Services;

public record PriceQuoteResult(
    int TotalCents,
    string Currency,
    Dictionary<string, object> Breakdown
);

public class PriceQuoteService
{
    private readonly AppDbContext _db;

    public PriceQuoteService(AppDbContext db)
    {
        _db = db;
    }

    public async Task<PriceQuoteResult> CalculateAsync(
        Guid carId,
        DateTime startUtc,
        DateTime endUtc,
        TimeZoneInfo tz)
    {
        if (endUtc <= startUtc)
        {
            throw new ArgumentException("Endzeitpunkt muss nach Startzeitpunkt liegen.");
        }

        // Pricing Rules laden
        var rules = await _db.PricingRules
            .Where(r => r.CarId == carId)
            .ToListAsync();

        if (rules.Count < 3)
        {
            throw new InvalidOperationException(
                "Preisregeln für dieses Fahrzeug sind unvollständig.");
        }

        // UTC -> Lokale Zeit (Europe/Berlin)
        var startLocal = TimeZoneInfo.ConvertTimeFromUtc(startUtc, tz);
        var endLocal = TimeZoneInfo.ConvertTimeFromUtc(endUtc, tz);

        // Tage berechnen (volle Kalendertage)
        var days = (endLocal.Date - startLocal.Date).Days;
        if (days <= 0) days = 1; // Minimum 1 Tag

        // Zähle Tage pro Gruppe
        int monThuCount = 0, friSatCount = 0, sunCount = 0;

        for (int i = 0; i < days; i++)
        {
            var day = startLocal.Date.AddDays(i);
            var group = PricingHelpers.GetWeekdayGroup(day);

            switch (group)
            {
                case WeekdayGroup.MonThu:
                    monThuCount++;
                    break;
                case WeekdayGroup.FriSat:
                    friSatCount++;
                    break;
                case WeekdayGroup.Sun:
                    sunCount++;
                    break;
            }
        }

        // Tarife holen
        int rateMonThu = rules.Single(r => r.WeekdayGroup == WeekdayGroup.MonThu).DailyRateCents;
        int rateFriSat = rules.Single(r => r.WeekdayGroup == WeekdayGroup.FriSat).DailyRateCents;
        int rateSun = rules.Single(r => r.WeekdayGroup == WeekdayGroup.Sun).DailyRateCents;
        var currency = rules.First().Currency;

        // Gesamtpreis
        int total = (monThuCount * rateMonThu) + (friSatCount * rateFriSat) + (sunCount * rateSun);

        // Breakdown für Frontend
        var breakdown = new Dictionary<string, object>
        {
            ["days"] = days,
            ["counts"] = new
            {
                monThu = monThuCount,
                friSat = friSatCount,
                sun = sunCount
            },
            ["rates"] = new
            {
                monThu = rateMonThu,
                friSat = rateFriSat,
                sun = rateSun
            },
            ["subtotal"] = total,
            ["total"] = total,
            ["currency"] = currency,
            ["payment"] = "cash_on_pickup",
            ["formatted"] = new
            {
                monThu = PricingHelpers.FormatPrice(rateMonThu, currency),
                friSat = PricingHelpers.FormatPrice(rateFriSat, currency),
                sun = PricingHelpers.FormatPrice(rateSun, currency),
                total = PricingHelpers.FormatPrice(total, currency)
            }
        };

        return new PriceQuoteResult(total, currency, breakdown);
    }

    public static string BreakdownToJson(Dictionary<string, object> breakdown)
    {
        return JsonSerializer.Serialize(breakdown);
    }
}
