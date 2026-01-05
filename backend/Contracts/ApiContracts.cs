using System.ComponentModel.DataAnnotations;

namespace GentleCars.Api.Contracts;

// Price Quote
public record PriceQuoteRequest(
    [Required] Guid CarId,
    [Required] DateTime StartUtc,
    [Required] DateTime EndUtc
);

public record PriceQuoteResponse(
    int TotalCents,
    string Currency,
    object Breakdown
);

// Booking Creation
public record CreateBookingRequest(
    [Required] Guid CarId,
    [Required] DateTime StartUtc,
    [Required] DateTime EndUtc,
    [Required][MaxLength(120)] string Name,
    [Required][EmailAddress][MaxLength(160)] string Email,
    [Required][MaxLength(40)] string Phone,
    [MaxLength(240)] string? Address
);

public record CreateBookingResponse(
    Guid BookingId,
    string Status,
    int TotalCents,
    string Currency,
    string Message
);

// Admin Login
public record AdminLoginRequest(
    [Required][EmailAddress] string Email,
    [Required] string Password
);

public record AdminLoginResponse(
    string Token,
    DateTime ExpiresAt,
    string Email,
    string? Name
);

// Admin Booking Management
public record UpdateBookingStatusRequest(
    string? AdminNotes
);

public record BookingResponse(
    Guid Id,
    Guid CarId,
    string CarName,
    Guid CustomerId,
    string CustomerName,
    string CustomerEmail,
    string CustomerPhone,
    DateTime StartAt,
    DateTime EndAt,
    string Status,
    int TotalPriceCents,
    object? Breakdown,
    DateTime CreatedAtUtc,
    DateTime? ConfirmedAtUtc,
    DateTime? CancelledAtUtc,
    string? AdminNotes
);
