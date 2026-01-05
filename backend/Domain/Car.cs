using System.ComponentModel.DataAnnotations;

namespace GentleCars.Api.Domain;

public class Car
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(80)]
    public string Slug { get; set; } = default!;

    [Required]
    [MaxLength(120)]
    public string Name { get; set; } = default!;

    [MaxLength(80)]
    public string? Brand { get; set; }

    [MaxLength(80)]
    public string? Model { get; set; }

    public int? Year { get; set; }

    public bool Active { get; set; } = true;

    // JSON für Flexibilität (später in separate Tabellen migrierbar)
    public string ImagesJson { get; set; } = "[]";
    public string SpecsJson { get; set; } = "{}";

    public ICollection<PricingRule> PricingRules { get; set; } = new List<PricingRule>();
    public ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
