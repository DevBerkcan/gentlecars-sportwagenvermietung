# GentleCars Deployment Guide

## Backend Deployment (MonsterASP)

### 1. Publish erstellen

```bash
cd backend
dotnet publish -c Release -o ./publish
```

### 2. Connection String vorbereiten

Im MonsterASP Control Panel:
- SQL Server Datenbank erstellen
- Connection-Daten notieren (Server, DB, User, Password)

### 3. appsettings.json anpassen

Connection String:
```
Server=YOUR_SQL_SERVER;Database=YOUR_DB;User Id=YOUR_USER;Password=YOUR_PASSWORD;TrustServerCertificate=True;MultipleActiveResultSets=True
```

TimeZone für Windows Server:
```json
{
  "App": {
    "Timezone": "W. Europe Standard Time"
  }
}
```

### 4. FTP Upload

- Alle Dateien aus `/publish` hochladen
- `web.config` wird automatisch generiert

### 5. Environment Variables

Im MonsterASP Panel als Environment Variables setzen:
- ConnectionStrings__Default
- Jwt__Secret
- Email__SmtpHost, SmtpUser, SmtpPassword

## Frontend Deployment (Vercel)

### 1. GitHub Repository verbinden

```bash
cd frontend
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 2. Vercel Import

1. vercel.com einloggen
2. "New Project" → GitHub Repo auswählen
3. Framework Preset: Next.js
4. Root Directory: `frontend`

### 3. Environment Variables in Vercel

```
NEXT_PUBLIC_API_BASE=https://YOUR-BACKEND-DOMAIN/api
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://gentlecars.de
```

### 4. Deploy

Vercel deployt automatisch bei jedem Push.

## DNS & SSL

### Vercel Domain

1. In Vercel: Settings → Domains
2. Custom Domain hinzufügen: gentlecars.de
3. DNS Records setzen (A / CNAME wie von Vercel angegeben)

### Backend Domain

1. Subdomain: api.gentlecars.de
2. DNS A-Record auf MonsterASP Server-IP
3. SSL via Let's Encrypt (meist automatisch bei MonsterASP)

## CORS Update

Nach Deployment im Backend `appsettings.json`:

```json
{
  "App": {
    "FrontendUrl": "https://gentlecars.de"
  }
}
```

Und in `Program.cs`:
```csharp
policy.WithOrigins("https://gentlecars.de", "https://api.gentlecars.de")
```

## Health Checks

- Frontend: https://gentlecars.de
- Backend: https://api.gentlecars.de (sollte JSON mit Status zurückgeben)
- Swagger: https://api.gentlecars.de/swagger

## Monitoring

### Logs

- Backend: `logs/` Ordner auf Server
- Frontend: Vercel Dashboard → Logs

### Analytics

- Google Analytics 4: https://analytics.google.com
- Microsoft Clarity: https://clarity.microsoft.com

## Backup

### Datenbank

MonsterASP bietet meist automatische Backups. Zusätzlich:

```bash
# Export via SQL Server Management Studio
# oder SQL Script:
BACKUP DATABASE GentleCarsDB TO DISK = 'C:\Backups\gentlecars.bak'
```

## Support Checklist

- [ ] Backend erreichbar und antwortet
- [ ] Frontend lädt und zeigt Autos
- [ ] Booking Flow funktioniert
- [ ] E-Mails werden versendet
- [ ] Admin Login funktioniert
- [ ] SSL Zertifikate gültig
- [ ] Analytics trackt (nach Cookie-Consent)
- [ ] Rechtliche Seiten ausgefüllt (Impressum, Datenschutz, AGB)

## Troubleshooting

**Backend startet nicht:**
- Connection String prüfen
- TimeZone ID für Windows (`W. Europe Standard Time`)
- Firewall Port 1433 für SQL Server

**Frontend kann Backend nicht erreichen:**
- CORS Policy im Backend prüfen
- API_BASE Environment Variable korrekt?
- HTTPS verwendet?

**Booking schlägt fehl:**
- Backend Logs prüfen
- Pricing Rules für Auto vorhanden?
- E-Mail SMTP konfiguriert?

---

Bei Problemen: dev@gentlecars.de
