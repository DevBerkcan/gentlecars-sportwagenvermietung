import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif text-white mb-4">Datenschutzerklärung</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          {/* Content */}
          <div className="bg-gray-900 border border-gold/20 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert prose-gold max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">1. Datenschutz auf einen Blick</h2>

                <h3 className="text-xl font-serif text-white mb-3">Allgemeine Hinweise</h3>
                <p className="text-gray-300 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Datenerfassung auf dieser Website</h3>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                  Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>

                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                  es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten
                  werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                  allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>

                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                  gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                  Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
                  die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">2. Hosting</h2>
                <p className="text-gray-300">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>

                <h3 className="text-xl font-serif text-white mb-3 mt-6">Externes Hosting</h3>
                <p className="text-gray-300 mb-4">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
                  erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei
                  kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                  Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
                  Website generiert werden, handeln.
                </p>
                <p className="text-gray-300">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen
                  und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                  schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen
                  Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

                <h3 className="text-xl font-serif text-white mb-3">Datenschutz</h3>
                <p className="text-gray-300 mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                  behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-gray-300 mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-gray-300 mb-4">
                  GentleCars GmbH<br />
                  Musterstraße 123<br />
                  45127 Essen<br />
                  <br />
                  Telefon: +49 (0) 201 123 456 78<br />
                  E-Mail: info@gentlecars.de
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Speicherdauer</h3>
                <p className="text-gray-300 mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                  Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
                  eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                  wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                  Daten haben.
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-gray-300 mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                  Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                  der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Auskunft, Löschung und Berichtigung</h3>
                <p className="text-gray-300 mb-4">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                  unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
                  und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
                  oder Löschung dieser Daten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">4. Datenerfassung auf dieser Website</h2>

                <h3 className="text-xl font-serif text-white mb-3">Kontaktformular</h3>
                <p className="text-gray-300 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Anfrage per E-Mail, Telefon oder WhatsApp</h3>
                <p className="text-gray-300 mb-4">
                  Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive
                  aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                  Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir
                  nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="text-xl font-serif text-white mb-3">Server-Log-Dateien</h3>
                <p className="text-gray-300 mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-gray-300">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-gold mb-4">5. Ihre Rechte</h2>
                <p className="text-gray-300 mb-4">
                  Sie haben folgende Rechte:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                  <li>Recht auf Berichtigung unrichtiger Daten</li>
                  <li>Recht auf Löschung Ihrer Daten</li>
                  <li>Recht auf Einschränkung der Verarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gold/10">
                <p className="text-gray-400 text-sm">
                  Stand: Januar 2026
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
