using GentleCars.Api.Domain;
using System.Net;
using System.Net.Mail;

namespace GentleCars.Api.Services;

public class EmailService
{
    private readonly IConfiguration _config;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IConfiguration config, ILogger<EmailService> logger)
    {
        _config = config;
        _logger = logger;
    }

    public async Task SendBookingConfirmationToCustomerAsync(Booking booking, Car car)
    {
        var subject = $"Reservierungsanfrage eingegangen – {car.Name}";

        var body = $@"
<!DOCTYPE html>
<html>
<head>
    <meta charset=""utf-8"">
    <style>
        body {{ font-family: system-ui, -apple-system, sans-serif; color: #20302D; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 40px 20px; }}
        .logo {{ text-align: center; margin-bottom: 40px; }}
        .header {{ background: linear-gradient(135deg, #B9924A 0%, #8B6F38 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; }}
        .content {{ background: white; padding: 30px; border: 1px solid #FBF9B; border-radius: 8px; margin-top: 20px; }}
        .price {{ font-size: 32px; font-weight: bold; color: #B9924A; }}
        .footer {{ text-align: center; margin-top: 40px; color: #666; font-size: 14px; }}
        .btn {{ display: inline-block; background: #B9924A; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; }}
    </style>
</head>
<body>
    <div class=""container"">
        <div class=""logo"">
            <h1 style=""color: #B9924A; font-size: 32px; margin: 0;"">GENTLECARS</h1>
            <p style=""color: #666; margin: 5px 0 0;"">SPORTWAGENVERMIETUNG</p>
        </div>

        <div class=""header"">
            <h2 style=""margin: 0;"">Reservierungsanfrage eingegangen</h2>
        </div>

        <div class=""content"">
            <p>Hallo {booking.Customer.Name},</p>

            <p>vielen Dank für Ihre Anfrage bei GentleCars! Wir haben Ihre Reservierung erhalten und werden diese umgehend prüfen.</p>

            <h3>Ihre Reservierung:</h3>
            <ul style=""list-style: none; padding: 0; line-height: 1.8;"">
                <li><strong>Fahrzeug:</strong> {car.Name}</li>
                <li><strong>Abholung:</strong> {booking.StartAt:dd.MM.yyyy HH:mm} Uhr</li>
                <li><strong>Rückgabe:</strong> {booking.EndAt:dd.MM.yyyy HH:mm} Uhr</li>
                <li><strong>Status:</strong> <span style=""color: #B9924A;"">Wartend auf Bestätigung</span></li>
            </ul>

            <div style=""text-align: center; margin: 30px 0;"">
                <div class=""price"">{PricingHelpers.FormatPrice(booking.TotalPriceCents)}</div>
                <p style=""color: #666; margin-top: 10px;""><strong>Zahlung vor Ort in bar</strong></p>
            </div>

            <p><strong>Nächste Schritte:</strong></p>
            <ol style=""line-height: 1.8;"">
                <li>Wir prüfen Ihre Anfrage innerhalb von 24 Stunden</li>
                <li>Sie erhalten eine Bestätigungsemail von uns</li>
                <li>Bei Abholung: Barzahlung + Kaution (Bar oder Kreditkarte)</li>
            </ol>

            <p style=""margin-top: 30px;"">Bei Fragen erreichen Sie uns unter:<br>
            <strong>Tel:</strong> +49 123 456 789<br>
            <strong>E-Mail:</strong> info@gentlecars.de</p>
        </div>

        <div class=""footer"">
            <p>GentleCars Sportwagenvermietung<br>
            Musterstraße 123, 45127 Essen</p>
        </div>
    </div>
</body>
</html>
";

        await SendEmailAsync(booking.Customer.Email, subject, body);
    }

    public async Task SendBookingNotificationToAdminAsync(Booking booking, Car car)
    {
        var adminEmail = _config["Email:AdminEmail"] ?? "admin@gentlecars.de";
        var subject = $"🚗 Neue Reservierungsanfrage – {car.Name}";

        var body = $@"
Neue Reservierungsanfrage eingegangen!

Fahrzeug: {car.Name}
Kunde: {booking.Customer.Name}
E-Mail: {booking.Customer.Email}
Telefon: {booking.Customer.Phone}

Zeitraum:
Von: {booking.StartAt:dd.MM.yyyy HH:mm} Uhr
Bis: {booking.EndAt:dd.MM.yyyy HH:mm} Uhr

Preis: {PricingHelpers.FormatPrice(booking.TotalPriceCents)}

Booking ID: {booking.Id}
Status: Pending

Jetzt im Admin-Dashboard bestätigen oder ablehnen.
";

        await SendEmailAsync(adminEmail, subject, body);
    }

    public async Task SendBookingConfirmedToCustomerAsync(Booking booking, Car car)
    {
        var subject = $"✓ Reservierung bestätigt – {car.Name}";

        var body = $@"
<!DOCTYPE html>
<html>
<head>
    <meta charset=""utf-8"">
    <style>
        body {{ font-family: system-ui, -apple-system, sans-serif; color: #20302D; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 40px 20px; }}
        .header {{ background: #4CAF50; color: white; padding: 30px; border-radius: 8px; text-align: center; }}
        .content {{ background: white; padding: 30px; border: 1px solid #FBF9B; border-radius: 8px; margin-top: 20px; }}
    </style>
</head>
<body>
    <div class=""container"">
        <div class=""header"">
            <h2 style=""margin: 0;"">✓ Ihre Reservierung wurde bestätigt!</h2>
        </div>

        <div class=""content"">
            <p>Hallo {booking.Customer.Name},</p>

            <p>Großartige Neuigkeiten! Ihre Reservierung für den <strong>{car.Name}</strong> wurde bestätigt.</p>

            <h3>Details:</h3>
            <ul style=""list-style: none; padding: 0;"">
                <li>Abholung: {booking.StartAt:dd.MM.yyyy HH:mm} Uhr</li>
                <li>Rückgabe: {booking.EndAt:dd.MM.yyyy HH:mm} Uhr</li>
                <li>Preis: <strong>{PricingHelpers.FormatPrice(booking.TotalPriceCents)}</strong></li>
            </ul>

            <p><strong>Wichtig für die Abholung:</strong></p>
            <ul>
                <li>Gültiger Führerschein (mind. 2 Jahre)</li>
                <li>Personalausweis / Reisepass</li>
                <li>Barzahlung oder Kreditkarte für Kaution</li>
            </ul>

            <p>Wir freuen uns auf Ihren Besuch!</p>
        </div>
    </div>
</body>
</html>
";

        await SendEmailAsync(booking.Customer.Email, subject, body);
    }

    private async Task SendEmailAsync(string to, string subject, string body)
    {
        try
        {
            var smtpHost = _config["Email:SmtpHost"];
            var smtpPort = int.Parse(_config["Email:SmtpPort"] ?? "587");
            var smtpUser = _config["Email:SmtpUser"];
            var smtpPassword = _config["Email:SmtpPassword"];
            var fromEmail = _config["Email:FromEmail"] ?? "noreply@gentlecars.de";
            var fromName = _config["Email:FromName"] ?? "GentleCars";

            if (string.IsNullOrEmpty(smtpHost))
            {
                _logger.LogWarning("Email not sent: SMTP not configured");
                return;
            }

            using var client = new SmtpClient(smtpHost, smtpPort)
            {
                Credentials = new NetworkCredential(smtpUser, smtpPassword),
                EnableSsl = true
            };

            var message = new MailMessage
            {
                From = new MailAddress(fromEmail, fromName),
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };

            message.To.Add(to);

            await client.SendMailAsync(message);
            _logger.LogInformation($"Email sent to {to}: {subject}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Failed to send email to {to}");
        }
    }
}
