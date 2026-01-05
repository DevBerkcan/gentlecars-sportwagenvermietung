using GentleCars.Api.Domain;

namespace GentleCars.Api.Services;

public static class PricingHelpers
{
    public static WeekdayGroup GetWeekdayGroup(DateTime localDate)
    {
        return localDate.DayOfWeek switch
        {
            DayOfWeek.Sunday => WeekdayGroup.Sun,
            DayOfWeek.Friday or DayOfWeek.Saturday => WeekdayGroup.FriSat,
            _ => WeekdayGroup.MonThu
        };
    }

    public static string FormatPrice(int cents, string currency = "EUR")
    {
        var amount = cents / 100.0;
        return currency switch
        {
            "EUR" => $"{amount:F2} €",
            "USD" => $"${amount:F2}",
            _ => $"{amount:F2} {currency}"
        };
    }
}
