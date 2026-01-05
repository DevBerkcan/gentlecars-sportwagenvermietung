using GentleCars.Api.Domain;
using Microsoft.EntityFrameworkCore;

namespace GentleCars.Api.Infrastructure;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Car> Cars => Set<Car>();
    public DbSet<PricingRule> PricingRules => Set<PricingRule>();
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Booking> Bookings => Set<Booking>();
    public DbSet<AdminUser> AdminUsers => Set<AdminUser>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Car: Unique Slug
        modelBuilder.Entity<Car>()
            .HasIndex(c => c.Slug)
            .IsUnique();

        // PricingRule: Unique per Car + WeekdayGroup
        modelBuilder.Entity<PricingRule>()
            .HasIndex(pr => new { pr.CarId, pr.WeekdayGroup })
            .IsUnique();

        // Booking: Index für Performance
        modelBuilder.Entity<Booking>()
            .HasIndex(b => new { b.CarId, b.StartAt, b.EndAt });

        modelBuilder.Entity<Booking>()
            .HasIndex(b => b.Status);

        // AdminUser: Unique Email
        modelBuilder.Entity<AdminUser>()
            .HasIndex(u => u.Email)
            .IsUnique();

        // Relationships
        modelBuilder.Entity<Car>()
            .HasMany(c => c.PricingRules)
            .WithOne(pr => pr.Car)
            .HasForeignKey(pr => pr.CarId)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Car>()
            .HasMany(c => c.Bookings)
            .WithOne(b => b.Car)
            .HasForeignKey(b => b.CarId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Customer>()
            .HasMany(c => c.Bookings)
            .WithOne(b => b.Customer)
            .HasForeignKey(b => b.CustomerId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}
