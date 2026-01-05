import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-white mb-4">
              Allgemeine Geschäftsbedingungen
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="bg-gray-900 border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert prose-gold max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 1 Geltungsbereich</h2>
                <p className="text-gray-300 mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Mietverträge zwischen der
                  GentleCars GmbH (nachfolgend "Vermieter") und dem Mieter über die Anmietung von Fahrzeugen.
                </p>
                <p className="text-gray-300">
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Mieters
                  werden nur dann und insoweit Vertragsbestandteil, als der Vermieter ihrer Geltung
                  ausdrücklich schriftlich zugestimmt hat.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 2 Vertragsschluss</h2>
                <p className="text-gray-300 mb-4">
                  Der Mietvertrag kommt durch die schriftliche Bestätigung des Vermieters zustande. Online-
                  Buchungen stellen ein verbindliches Angebot dar, das der Vermieter durch Zusendung einer
                  Auftragsbestätigung per E-Mail annehmen kann.
                </p>
                <p className="text-gray-300">
                  Der Vermieter behält sich vor, Buchungsanfragen ohne Angabe von Gründen abzulehnen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 3 Mietvoraussetzungen</h2>
                <p className="text-gray-300 mb-4">
                  Der Mieter muss zum Zeitpunkt der Fahrzeugübernahme folgende Voraussetzungen erfüllen:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Mindestalter: 25 Jahre</li>
                  <li>Gültiger Führerschein (mindestens 3 Jahre im Besitz)</li>
                  <li>Gültiger Personalausweis oder Reisepass</li>
                  <li>Kreditkarte für Kaution</li>
                </ul>
                <p className="text-gray-300">
                  Der Vermieter behält sich vor, zusätzliche Nachweise zu verlangen (z.B. Meldebestätigung,
                  Schufa-Auskunft).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 4 Mietpreis und Zahlungsbedingungen</h2>
                <p className="text-gray-300 mb-4">
                  Der Mietpreis richtet sich nach der aktuellen Preisliste und umfasst:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Fahrzeugmiete für den vereinbarten Zeitraum</li>
                  <li>Vollkasko-Versicherung mit Selbstbeteiligung</li>
                  <li>Unbegrenzte Kilometer</li>
                  <li>24/7 Pannenhilfe</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Nicht im Mietpreis enthalten sind:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Kraftstoff</li>
                  <li>Mautgebühren</li>
                  <li>Parkgebühren</li>
                  <li>Zusatzfahrer (50€ pro Fahrer)</li>
                  <li>Lieferung/Abholung (150€ pro Strecke)</li>
                </ul>
                <p className="text-gray-300">
                  Die Zahlung erfolgt vor Fahrzeugübernahme per Überweisung oder Kreditkarte. Bei verspäteter
                  Zahlung ist der Vermieter berechtigt, vom Vertrag zurückzutreten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 5 Kaution</h2>
                <p className="text-gray-300 mb-4">
                  Bei Fahrzeugübernahme ist eine Kaution in Höhe von 5.000€ zu hinterlegen. Die Kaution wird
                  auf der Kreditkarte des Mieters blockiert und nach ordnungsgemäßer Rückgabe des Fahrzeugs
                  innerhalb von 14 Tagen freigegeben.
                </p>
                <p className="text-gray-300">
                  Die Kaution dient zur Absicherung von Schäden, Kraftstoffkosten, Strafzetteln und anderen
                  Ansprüchen des Vermieters.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 6 Fahrzeugübernahme und -rückgabe</h2>
                <p className="text-gray-300 mb-4">
                  Die Übergabe und Rücknahme des Fahrzeugs erfolgt zu den vereinbarten Zeiten. Bei
                  verspäteter Rückgabe wird der zusätzliche Zeitraum mit dem 1,5-fachen Tagesmietpreis
                  berechnet.
                </p>
                <p className="text-gray-300 mb-4">
                  Das Fahrzeug ist bei Übernahme gemeinsam zu inspizieren. Vorhandene Schäden werden
                  im Übergabeprotokoll dokumentiert. Bei Rückgabe erfolgt eine erneute Inspektion.
                </p>
                <p className="text-gray-300">
                  Das Fahrzeug ist vollgetankt zurückzugeben. Andernfalls werden Tankkosten zuzüglich
                  einer Servicepauschale von 50€ berechnet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 7 Nutzung des Fahrzeugs</h2>
                <p className="text-gray-300 mb-4">
                  Das Fahrzeug darf nur vom Mieter und eingetragenen Zusatzfahrern geführt werden. Die
                  Nutzung ist auf Deutschland und die angrenzenden EU-Länder beschränkt (Ausnahmen nach
                  Absprache).
                </p>
                <p className="text-gray-300 mb-4">
                  Folgende Nutzungen sind untersagt:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Teilnahme an Rennen oder Rallyes</li>
                  <li>Gewerbliche Personenbeförderung</li>
                  <li>Fahrten unter Alkohol- oder Drogeneinfluss</li>
                  <li>Weiterverleihung an Dritte</li>
                  <li>Nutzung für Straftaten</li>
                  <li>Fahren im Gelände</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 8 Versicherung und Haftung</h2>
                <p className="text-gray-300 mb-4">
                  Das Fahrzeug ist vollkaskoversichert mit einer Selbstbeteiligung von 3.000€ pro
                  Schadensfall. Die Selbstbeteiligung kann gegen Aufpreis reduziert werden.
                </p>
                <p className="text-gray-300 mb-4">
                  Der Mieter haftet für:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Schäden durch grobe Fahrlässigkeit oder Vorsatz</li>
                  <li>Schäden bei vertragswidriger Nutzung</li>
                  <li>Verlust von Fahrzeugpapieren und Schlüsseln</li>
                  <li>Schäden im Innenraum</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 9 Pflichten des Mieters</h2>
                <p className="text-gray-300 mb-4">
                  Der Mieter ist verpflichtet:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Das Fahrzeug pfleglich zu behandeln</li>
                  <li>Regelmäßige Kontrollen durchzuführen (Öl, Wasser, Reifen)</li>
                  <li>Schäden und Unfälle unverzüglich zu melden</li>
                  <li>Strafzettel und Mautgebühren selbst zu bezahlen</li>
                  <li>Das Fahrzeug vor Diebstahl zu sichern</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 10 Stornierung</h2>
                <p className="text-gray-300 mb-4">
                  Der Mieter kann den Mietvertrag wie folgt stornieren:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Mehr als 30 Tage vor Mietbeginn: Kostenfrei</li>
                  <li>14-30 Tage vor Mietbeginn: 50% des Mietpreises</li>
                  <li>7-13 Tage vor Mietbeginn: 75% des Mietpreises</li>
                  <li>Weniger als 7 Tage: 100% des Mietpreises</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">§ 11 Schlussbestimmungen</h2>
                <p className="text-gray-300 mb-4">
                  Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Essen.
                </p>
                <p className="text-gray-300">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
                  übrigen Bestimmungen davon unberührt.
                </p>
              </div>

              <div className="pt-6 border-t border-gold/10">
                <p className="text-gray-400 text-sm">
                  Stand: Januar 2026<br />
                  GentleCars GmbH
                </p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition-all"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
