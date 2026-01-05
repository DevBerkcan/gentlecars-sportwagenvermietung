namespace GentleCars.Api.Domain;

public class Booking
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public Guid CarId { get; set; }
    public Car Car { get; set; } = default!;

    public Guid CustomerId { get; set; }
    public Customer Customer { get; set; } = default!;

    // Immer UTC speichern, im Code mit TimeZone konvertieren
    public DateTime StartAt { get; set; }
    public DateTime EndAt { get; set; }

    public BookingStatus Status { get; set; } = BookingStatus.Pending;

    // Preis in Cent
    public int TotalPriceCents { get; set; }

    // JSON für Preisaufschlüsselung
    public string BreakdownJson { get; set; } = "{}";

    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
    public DateTime? ConfirmedAtUtc { get; set; }
    public DateTime? CancelledAtUtc { get; set; }

    public string? AdminNotes { get; set; }
}
