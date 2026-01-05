using System.ComponentModel.DataAnnotations;

namespace GentleCars.Api.Domain;

public class Customer
{
    public Guid Id { get; set; } = Guid.NewGuid();

    [Required]
    [MaxLength(120)]
    public string Name { get; set; } = default!;

    [Required]
    [MaxLength(160)]
    [EmailAddress]
    public string Email { get; set; } = default!;

    [Required]
    [MaxLength(40)]
    public string Phone { get; set; } = default!;

    [MaxLength(240)]
    public string? Address { get; set; }

    public ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
