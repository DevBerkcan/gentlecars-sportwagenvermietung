import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

export default function WiderrufPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-white mb-4">Widerrufsbelehrung</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="bg-gray-900 border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert prose-gold max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Widerrufsrecht</h2>
                <p className="text-gray-300 mb-4">
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
                  widerrufen.
                </p>
                <p className="text-gray-300 mb-4">
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
                </p>
                <p className="text-gray-300 mb-4">
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
                </p>
                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <p className="text-white font-semibold mb-2">GentleCars GmbH</p>
                  <p className="text-gray-300">
                    Musterstraße 123<br />
                    45127 Essen<br />
                    Deutschland<br />
                    <br />
                    E-Mail: info@gentlecars.de<br />
                    Telefon: +49 (0) 201 123 456 78
                  </p>
                </div>
                <p className="text-gray-300 mb-4">
                  mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail)
                  über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das
                  beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Widerrufsfrist</h2>
                <p className="text-gray-300 mb-4">
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung
                  des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Folgen des Widerrufs</h2>
                <p className="text-gray-300 mb-4">
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
                  erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
                  zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
                  eingegangen ist.
                </p>
                <p className="text-gray-300 mb-4">
                  Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der
                  ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich
                  etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte
                  berechnet.
                </p>
                <p className="text-gray-300 mb-4">
                  Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so
                  haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem
                  Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses
                  Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang
                  der im Vertrag vorgesehenen Dienstleistungen entspricht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Besondere Hinweise</h2>
                <p className="text-gray-300 mb-4">
                  Das Widerrufsrecht erlischt vorzeitig, wenn:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>
                    Der Mietvertrag bereits begonnen hat (Fahrzeugübernahme erfolgt ist) und Sie
                    ausdrücklich zugestimmt haben, dass wir vor Ende der Widerrufsfrist mit der
                    Vertragserfüllung beginnen
                  </li>
                  <li>
                    Sie ausdrücklich auf Ihr Widerrufsrecht verzichtet haben
                  </li>
                </ul>
              </div>

              <div className="bg-gold/10 border-2 border-gold/30 rounded-xl p-8">
                <h2 className="text-2xl font-serif text-gold mb-4">Muster-Widerrufsformular</h2>
                <p className="text-gray-300 mb-4">
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und
                  senden Sie es zurück.)
                </p>

                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <p className="text-gray-300 mb-4">An:</p>
                  <p className="text-white font-semibold mb-2">GentleCars GmbH</p>
                  <p className="text-gray-300 mb-6">
                    Musterstraße 123<br />
                    45127 Essen<br />
                    Deutschland<br />
                    <br />
                    E-Mail: info@gentlecars.de
                  </p>

                  <p className="text-gray-300 mb-4">
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die
                    Erbringung der folgenden Dienstleistung:
                  </p>

                  <div className="space-y-4 text-gray-400">
                    <p>_____________________________________________</p>
                    <p>Bestellt am (*) / erhalten am (*)</p>
                    <p>_____________________________________________</p>
                    <p>Name des/der Verbraucher(s)</p>
                    <p>_____________________________________________</p>
                    <p>Anschrift des/der Verbraucher(s)</p>
                    <p>_____________________________________________</p>
                    <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</p>
                    <p>_____________________________________________</p>
                    <p>Datum</p>
                  </div>

                  <p className="text-gray-400 text-sm mt-6">
                    (*) Unzutreffendes streichen
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Ausschluss des Widerrufsrechts</h2>
                <p className="text-gray-300 mb-4">
                  Das Widerrufsrecht besteht nicht bei folgenden Verträgen:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>
                    Verträge zur Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen,
                    wenn der Vertrag für die Erbringung einen spezifischen Termin oder Zeitraum vorsieht
                  </li>
                  <li>
                    Verträge zur Erbringung von Dienstleistungen, wenn der Unternehmer diese vollständig
                    erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der
                    Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und gleichzeitig seine
                    Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger
                    Vertragserfüllung durch den Unternehmer verliert
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">Weitere Informationen</h2>
                <p className="text-gray-300 mb-4">
                  Bei Fragen zum Widerrufsrecht stehen wir Ihnen gerne zur Verfügung:
                </p>
                <p className="text-gray-300">
                  Telefon: +49 (0) 201 123 456 78<br />
                  E-Mail: info@gentlecars.de<br />
                  Montag - Freitag: 9:00 - 18:00 Uhr<br />
                  Samstag: 10:00 - 16:00 Uhr
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
