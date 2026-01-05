using System.ComponentModel.DataAnnotations;

namespace GentleCars.Api.Domain;

public class PricingRule
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid CarId { get; set; }
    public Car Car { get; set; } = default!;

    public WeekdayGroup WeekdayGroup { get; set; }

    // Preis in Cent (z.B. 19900 = 199,00 EUR)
    public int DailyRateCents { get; set; }

    [MaxLength(3)]
    public string Currency { get; set; } = "EUR";
}
