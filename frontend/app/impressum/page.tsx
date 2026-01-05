import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-white mb-4">Impressum</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="bg-gray-900 border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert prose-gold max-w-none">
              <h2 className="text-2xl font-serif text-gold mb-6">Angaben gemäß § 5 TMG</h2>

              <div className="mb-8">
                <p className="text-white font-semibold text-lg mb-2">GentleCars GmbH</p>
                <p className="text-gray-300">
                  Musterstraße 123<br />
                  45127 Essen<br />
                  Deutschland
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Kontakt</h3>
                <p className="text-gray-300">
                  Telefon: +49 (0) 201 123 456 78<br />
                  E-Mail: info@gentlecars.de<br />
                  WhatsApp: +49 (0) 172 123 4567
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Vertreten durch</h3>
                <p className="text-gray-300">
                  Geschäftsführer: Alexander Müller, Sarah Schmidt
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Registereintrag</h3>
                <p className="text-gray-300">
                  Eintragung im Handelsregister<br />
                  Registergericht: Amtsgericht Essen<br />
                  Registernummer: HRB 12345
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Umsatzsteuer-ID</h3>
                <p className="text-gray-300">
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                  DE123456789
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Aufsichtsbehörde</h3>
                <p className="text-gray-300">
                  Ordnungsamt Essen<br />
                  Rathaus Essen<br />
                  Gildehof 1<br />
                  45127 Essen
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                <p className="text-gray-300">
                  Alexander Müller<br />
                  Musterstraße 123<br />
                  45127 Essen
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">EU-Streitschlichtung</h3>
                <p className="text-gray-300">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
                <p className="text-gray-300">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Haftung für Inhalte</h3>
                <p className="text-gray-300 mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
                <p className="text-gray-300">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Haftung für Links</h3>
                <p className="text-gray-300">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                  Verlinkung nicht erkennbar.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-serif text-white mb-4">Urheberrecht</h3>
                <p className="text-gray-300">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                  nur für den privaten, nicht kommerziellen Gebrauch gestattet.
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
