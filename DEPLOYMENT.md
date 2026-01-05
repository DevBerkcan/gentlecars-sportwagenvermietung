# GentleCars Deployment Guide für MonsterASP.net

## 🗄️ Datenbank (bereits eingerichtet)

Die Production-Datenbank ist bereits konfiguriert und mit Seed-Daten gefüllt:

**Datenbank Details:**
- Server: `db37327.databaseasp.net`
- Database: `db37327`
- User: `db37327`
- Password: `qJ_7@p4Bh9A=`

**Status:** ✅ Migrations angewendet, Seed-Daten (4 Autos, Admin-User) geladen

---

## 🎯 Backend Deployment (.NET 8 API)

### 1. Build bereits erstellt
Das Backend wurde bereits für Production gebaut im Ordner: `/publish`

### 2. Deployment auf MonsterASP.net

#### Option A: FTP Upload (Empfohlen)
1. Öffne FileZilla oder ein anderes FTP-Tool
2. Verbinde zu:
   - **Host:** `site49500.siteasp.net`
   - **Port:** `21` (FTP)
   - **Username:** `site49500`
   - **Password:** `*****` (aus MonsterASP Panel)

3. Upload alle Dateien aus dem `/publish` Ordner in das `wwwroot` Verzeichnis

#### Option B: Web Interface Upload
1. Gehe zu https://webftp.monsterasp.net/
2. Login mit den FTP-Credentials
3. Upload alle Dateien aus `/publish` nach `/wwwroot`

### 3. Einstellungen in MonsterASP Panel

**ASP.NET Version:** .NET 10.x/9.x/8.x/7.x/6.x/5.x/Core [x86]
- Im MonsterASP Control Panel → Website Details → .NET Version auf **.NET 8.0** setzen

**Startup Command:**
- Die `GentleCars.Api.dll` sollte automatisch als Startup erkannt werden
- Falls nicht: `dotnet GentleCars.Api.dll`

---

## 🌐 Frontend Deployment (Next.js)

### Option 1: Static Export (Empfohlen für MonsterASP)

Da MonsterASP ein .NET Hosting ist, gibt es zwei Ansätze:

#### A) Separate Node.js Hosting (z.B. Vercel, Netlify)
**Vercel (Kostenlos & Empfohlen):**
1. Gehe zu https://vercel.com
2. Importiere das GitHub Repository oder upload den Frontend-Ordner
3. Environment Variables setzen:
   ```
   NEXT_PUBLIC_API_BASE=https://gentlecars.runasp.net/api
   NEXT_PUBLIC_SITE_URL=https://gentlecars-frontend.vercel.app
   ```
4. Deploy! ✅

**Netlify:**
1. https://netlify.com → New site from Git
2. Build Command: `npm run build`
3. Publish directory: `.next`
4. Environment Variables wie oben setzen

#### B) Auf MonsterASP hosten (Static Files)
1. Build static export:
   ```bash
   cd frontend
   npm run build
   ```

2. Upload den `.next` Ordner und `public` Ordner via FTP

⚠️ **Hinweis:** Next.js Server-Features (API Routes, SSR) funktionieren nicht auf MonsterASP, da es kein Node.js unterstützt. Verwende daher Vercel/Netlify für das Frontend.

---

## 🔐 Wichtige URLs

| Service | URL | Status |
|---------|-----|--------|
| **Backend API** | https://gentlecars.runasp.net/api | ✅ Konfiguriert |
| **Frontend** | https://gentlecars.runasp.net | ⚠️ Muss deployed werden |
| **Swagger/API Docs** | https://gentlecars.runasp.net/swagger | Nach Backend-Deploy verfügbar |
| **Admin Login** | `admin@gentlecars.de` / `Admin123!` | ✅ In DB |

---

## 🧪 Testing nach Deployment

### Backend testen:
```bash
# Cars API
curl https://gentlecars.runasp.net/api/cars

# Health Check
curl https://gentlecars.runasp.net/api/health
```

### Frontend testen:
- Besuche die Website
- Überprüfe ob Autos angezeigt werden
- Teste Buchungsformular

---

## 🔄 Updates deployen

### Backend Update:
```bash
cd backend
dotnet publish -c Release -o ../publish
# Upload via FTP
```

### Frontend Update:
```bash
cd frontend
npm run build
# Bei Vercel: git push (automatisches Deploy)
# Bei FTP: Upload .next Ordner
```

---

## ⚙️ Environment Variables Übersicht

### Backend (appsettings.json)
- ✅ Production DB Connection String
- ✅ Frontend URL: `https://gentlecars.runasp.net`
- ✅ JWT Secret (Production)

### Frontend (.env.production)
- ✅ API Base: `https://gentlecars.runasp.net/api`
- ✅ Site URL: `https://gentlecars.runasp.net`

---

## 📝 Nächste Schritte

1. ✅ Datenbank eingerichtet und konfiguriert
2. ✅ Backend gebaut und bereit zum Upload
3. ✅ Frontend gebaut
4. ⏳ **Backend per FTP auf MonsterASP uploaden**
5. ⏳ **Frontend auf Vercel oder Netlify deployen**
6. ⏳ **Live-Tests durchführen**

---

## 🆘 Troubleshooting

### Backend startet nicht
- Überprüfe .NET Version in MonsterASP Panel
- Prüfe ob alle Dateien uploaded wurden
- Logs in MonsterASP Panel checken

### Frontend kann Backend nicht erreichen
- CORS Settings im Backend überprüfen
- API URL in `.env.production` überprüfen
- Browser Console für Fehler checken

### Datenbank-Verbindungsfehler
- Connection String in appsettings.json überprüfen
- Firewall-Einstellungen in MonsterASP überprüfen
