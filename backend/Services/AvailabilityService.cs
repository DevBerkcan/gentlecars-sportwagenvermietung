using GentleCars.Api.Domain;
using GentleCars.Api.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace GentleCars.Api.Services;

public class AvailabilityService
{
    private readonly AppDbContext _db;

    public AvailabilityService(AppDbContext db)
    {
        _db = db;
    }

    /// <summary>
    /// Prüft, ob ein Auto im angegebenen Zeitraum verfügbar ist.
    /// Overlap-Logik: existing.Start < new.End AND existing.End > new.Start
    /// </summary>
    public async Task<bool> IsAvailableAsync(
        Guid carId,
        DateTime startUtc,
        DateTime endUtc,
        Guid? excludeBookingId = null)
    {
        var query = _db.Bookings
            .Where(b => b.CarId == carId)
            .Where(b => b.Status != BookingStatus.Cancelled)
            .Where(b => b.StartAt < endUtc && b.EndAt > startUtc);

        // Bei Updates: Aktuelle Buchung ausschließen
        if (excludeBookingId.HasValue)
        {
            query = query.Where(b => b.Id != excludeBookingId.Value);
        }

        return !await query.AnyAsync();
    }

    /// <summary>
    /// Gibt alle Buchungen zurück, die mit dem Zeitraum überlappen.
    /// </summary>
    public async Task<List<Booking>> GetConflictingBookingsAsync(
        Guid carId,
        DateTime startUtc,
        DateTime endUtc)
    {
        return await _db.Bookings
            .Include(b => b.Customer)
            .Where(b => b.CarId == carId)
            .Where(b => b.Status != BookingStatus.Cancelled)
            .Where(b => b.StartAt < endUtc && b.EndAt > startUtc)
            .ToListAsync();
    }
}
