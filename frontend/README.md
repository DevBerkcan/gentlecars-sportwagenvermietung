# GentleCars Frontend

Next.js 15 Frontend mit TypeScript, Tailwind CSS und shadcn/ui.

## Setup

```bash
# Dependencies installieren
npm install

# Environment konfigurieren
cp .env.example .env.local

# Development Server starten
npm run dev
```

Frontend läuft auf: http://localhost:3000

## Projektstruktur

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Home Page
├── components/            # React Components
│   └── ui/               # shadcn/ui Komponenten
├── lib/                   # Utils & API Client
│   ├── api/              # Backend API Calls
│   └── utils.ts          # Helper Functions
├── public/               # Static Assets (Logo, Bilder)
├── styles/               # Global CSS
└── package.json
```

## Seiten

### Implementiert (MVP)
- `/` - Home mit Hero + Fleet Grid

### Zu implementieren
- `/cars/[slug]` - Car Detail + Booking Widget
- `/admin` - Admin Dashboard (Login + Bookings)
- `/impressum` - Impressum
- `/datenschutz` - Datenschutz
- `/agb` - AGB/Mietbedingungen
- `/kontakt` - Kontaktformular

## API Integration

Alle Backend-Calls sind in `lib/api/client.ts`:

```typescript
import { getCars, getCarBySlug, getPriceQuote, createBooking } from '@/lib/api/client'
```

## Design System

### Farben
- Gold: `#B9924A`
- Dark: `#20302D`
- Verwendet in: `tailwind.config.js`

### Typografie
- Headings: Merriweather (Serif)
- Body: Inter (Sans-serif)

### Komponenten

Alle UI-Komponenten basieren auf shadcn/ui (Radix + Tailwind).

Installation neuer Komponenten:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
# etc.
```

## Booking Widget (TODO)

Sticky rechts auf Desktop, Bottom Sheet auf Mobile.

Features:
- DateTime Picker (Start/Ende)
- Live Price Quote
- Availability Check
- Customer Form
- "Zahlung vor Ort bar" Hinweis

## Cookie Consent (TODO)

Implementiere Cookie Banner für:
- Notwendige Cookies (immer aktiv)
- Analytics (GA4) - nur nach Consent
- Clarity - nur nach Consent

Library-Empfehlung: `react-cookie-consent`

## Analytics Setup

Nach Consent laden:
```typescript
// Google Analytics 4
gtag('config', process.env.NEXT_PUBLIC_GA_ID)

// Microsoft Clarity
clarity.start(process.env.NEXT_PUBLIC_CLARITY_ID)
```

## Performance

- Next/Image für alle Bilder
- Server Components wo möglich
- Dynamic Imports für große Komponenten
- WebP/AVIF Bildformate

Lighthouse Ziele:
- Desktop: >90
- Mobile: >80

## Deployment

Siehe `/docs/DEPLOYMENT.md` für vollständige Anleitung.

Kurz:
```bash
vercel
```

## Entwicklung

```bash
npm run dev          # Development Server
npm run build        # Production Build
npm run start        # Production Server
npm run lint         # ESLint
npm run type-check   # TypeScript Check
```

## Nächste Schritte

1. Car Detail Seite mit Booking Widget
2. Admin Dashboard (Login + Bookings Table)
3. Cookie Consent + Analytics
4. Rechtliche Seiten (Impressum, Datenschutz, AGB)
5. Kontaktformular
6. SEO (Metadata, JSON-LD, Sitemap)
7. Testing (Unit + E2E)

---

**Entwickelt von GentleWebdesign**
