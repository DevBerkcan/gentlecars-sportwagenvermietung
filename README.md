# GentleCars – Sportwagenvermietung

Premium Sportwagen-Buchungssystem mit Next.js Frontend und ASP.NET Core Backend.

## 🚗 Features

- **4 Premium Fahrzeuge** mit Detailseiten
- **Intelligentes Buchungssystem**: Zeitraum-basiert mit Verfügbarkeitsprüfung
- **Dynamische Preisberechnung**: Mo-Do, Fr-Sa, Sonntag-Tarife
- **Barzahlung vor Ort**: Keine Online-Zahlungen
- **Admin Dashboard**: Buchungen verwalten, freigeben, stornieren
- **E-Mail Benachrichtigungen**: Kunde + Admin
- **Cookie Consent**: DSGVO-konform mit GA4 + Microsoft Clarity
- **SEO-optimiert**: Metadata, JSON-LD, Sitemap
- **Responsive Design**: Mobile-first mit Premium-UX

## 📋 Voraussetzungen

### Frontend
- Node.js 18+ (empfohlen: 20 LTS)
- npm oder yarn

### Backend
- .NET 8 SDK
- SQL Server (lokal via Docker oder MonsterASP)
- Optional: Docker Desktop für lokale DB

## 🚀 Schnellstart

### 1. Projekt klonen / entpacken

```bash
unzip gentlecars-project.zip
cd gentlecars-project
```

### 2. Backend Setup

```bash
cd backend

# Packages wiederherstellen
dotnet restore

# Connection String anpassen
# Bearbeite: appsettings.json -> ConnectionStrings:Default
# MonsterASP: Nutze die Connection-Daten aus dem Hosting-Panel

# Datenbank erstellen + Migrationen
dotnet ef database update

# Backend starten (localhost:5000)
dotnet run
```

**Backend läuft jetzt auf**: `http://localhost:5000`
**Swagger UI**: `http://localhost:5000/swagger`

### 3. Frontend Setup

```bash
cd ../frontend

# Dependencies installieren
npm install

# Environment konfigurieren
cp .env.example .env.local
# Bearbeite .env.local: NEXT_PUBLIC_API_BASE=http://localhost:5000/api

# Development Server starten
npm run dev
```

**Frontend läuft jetzt auf**: `http://localhost:3000`

### 4. Seed-Daten

Beim ersten Backend-Start werden automatisch erstellt:
- 4 Fahrzeuge (Mercedes CLA 45 S, Porsche Panamera, VW Golf GTI 8, BMW M4)
- Pricing Rules (Mo-Do: 199€, Fr-Sa: 249€, So: 219€ pro Tag)

## 🗂️ Projektstruktur

```
gentlecars-project/
├── frontend/              # Next.js 15 App
│   ├── app/              # App Router (Seiten)
│   ├── components/       # React Komponenten
│   ├── lib/             # Utils, API-Calls
│   ├── public/          # Statische Assets (Logo, etc.)
│   └── styles/          # Tailwind Config
│
├── backend/              # ASP.NET Core Web API
│   ├── Controllers/     # API Endpoints
│   ├── Domain/          # Entities + Enums
│   ├── Infrastructure/  # DbContext + Migrations
│   ├── Services/        # Business Logic
│   └── Program.cs       # App Configuration
│
├── docker/              # Docker Compose (lokale SQL Server DB)
├── docs/                # Zusätzliche Dokumentation
└── README.md            # Diese Datei
```

## 🎨 Design System

### Farben
- **Gold**: `#B9924A` (Primary, Logo)
- **Schwarz**: `#20302D` (Hintergrund, Text)
- **Weiß**: `#FFFFFF` (Text auf Dark)
- **Grau**: `#FBF9B` (Sekundär, Borders)

### Typografie
- **Heading**: Merriweather (Serif, Premium)
- **Body**: System UI Stack (Clean, Modern)

### Logo
- Komponenten: `/frontend/public/logo-*.png`
- SVG optimiert für Web

## 📡 API Endpoints

### Public (ohne Auth)

```
GET    /api/cars              # Alle Fahrzeuge
GET    /api/cars/{slug}       # Ein Fahrzeug
GET    /api/availability      # Verfügbarkeit prüfen
POST   /api/price-quote       # Preis berechnen
POST   /api/bookings          # Reservierung erstellen
```

### Admin (mit Auth)

```
GET    /api/admin/bookings           # Alle Buchungen
GET    /api/admin/bookings/{id}      # Eine Buchung
POST   /api/admin/bookings/{id}/confirm   # Bestätigen
POST   /api/admin/bookings/{id}/cancel    # Stornieren
```

## 🔐 Admin Login (MVP)

**Development Credentials:**
- Email: `admin@gentlecars.de`
- Password: `Admin123!`

> **Wichtig**: Für Production auf jeden Fall Passwort ändern!

## 📧 E-Mail Konfiguration

Bearbeite `backend/appsettings.json`:

```json
{
  "Email": {
    "Provider": "SMTP",
    "SmtpHost": "smtp.example.com",
    "SmtpPort": 587,
    "SmtpUser": "your-email@example.com",
    "SmtpPassword": "your-password",
    "FromEmail": "noreply@gentlecars.de",
    "FromName": "GentleCars"
  }
}
```

**Empfohlene Provider:**
- Brevo (ehemals SendinBlue): kostenlos 300 Mails/Tag
- SendGrid: kostenlos 100 Mails/Tag
- MailerSend, Postmark, AWS SES

## 🚢 Deployment

### Frontend (Vercel)

```bash
cd frontend

# Vercel CLI installieren (falls noch nicht)
npm i -g vercel

# Deployen
vercel

# Environment Variables in Vercel Dashboard setzen:
# NEXT_PUBLIC_API_BASE = https://your-backend-domain.com/api
```

### Backend (MonsterASP / Azure)

#### Option 1: MonsterASP (Windows Hosting)

1. **Publish erstellen**:
   ```bash
   cd backend
   dotnet publish -c Release -o ./publish
   ```

2. **FTP Upload**: `/publish/*` ins Root-Verzeichnis

3. **Connection String** im MonsterASP Panel als Environment Variable setzen

4. **Sicherstellen**: `web.config` ist vorhanden (automatisch generiert)

#### Option 2: Azure App Service

```bash
# Azure CLI Login
az login

# App Service + DB erstellen
az webapp up --name gentlecars-api --resource-group gentlecars-rg
```

## 🧪 Testing

### Backend Tests

```bash
cd backend
dotnet test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## 📊 Tracking & Analytics

### Google Analytics 4
- Tag in `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- Automatische Page Views + Events

### Microsoft Clarity
- Tag in `.env.local`: `NEXT_PUBLIC_CLARITY_ID=XXXXXXXXX`
- Heatmaps + Session Recordings

**Beide Tracker laden NUR nach Cookie-Consent!**

## 🔒 Sicherheit

- [x] SQL Injection geschützt (EF Core parametrisiert)
- [x] CSRF Token (ASP.NET Core Standard)
- [x] CORS konfiguriert (nur erlaubte Origins)
- [x] Rate Limiting (optional aktivierbar)
- [x] Input Validation (FluentValidation)
- [x] HTTPS Redirect (Production)

## 📄 Rechtliche Seiten

Platzhalter vorhanden in:
- `/impressum`
- `/datenschutz`
- `/agb`

**Wichtig**: Mit echten Daten füllen vor Go-Live!

## 🐛 Troubleshooting

### Backend startet nicht
- SQL Server Connection String prüfen
- Firewall öffnen (Port 1433 für SQL)
- `dotnet ef database update` erneut ausführen

### Frontend kann Backend nicht erreichen
- CORS Origin im Backend prüfen
- `.env.local` korrekte API-URL
- Backend läuft? (`curl http://localhost:5000/api/cars`)

### Booking schlägt fehl
- Zeitzone korrekt? (Europe/Berlin bzw. W. Europe Standard Time)
- Pricing Rules für alle 3 Gruppen vorhanden?
- Log-Output prüfen

## 📚 Weitere Ressourcen

- [Next.js Docs](https://nextjs.org/docs)
- [ASP.NET Core Docs](https://docs.microsoft.com/aspnet/core)
- [Entity Framework Core](https://docs.microsoft.com/ef/core)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

## 🤝 Support

Bei Fragen oder Problemen:
1. GitHub Issues erstellen
2. E-Mail an: dev@gentlecars.de

## 📝 License

Proprietary - Alle Rechte vorbehalten © 2026 GentleCars

---

**Entwickelt mit 💛 von GentleWebdesign**
