import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <Image
                src="/logo-gold.png"
                alt="GentleCars"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Über <span className="text-gold">GentleCars</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Seit 2020 vermieten wir mit Leidenschaft exklusive Sportwagen und schaffen
              unvergessliche Fahrerlebnisse für anspruchsvolle Kunden.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Unsere <span className="text-gold">Geschichte</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  GentleCars wurde 2020 aus einer tiefen Leidenschaft für automobile Perfektion
                  geboren. Was als Vision begann, exklusive Sportwagen einem breiteren Publikum
                  zugänglich zu machen, hat sich zu einem der führenden Premium-Vermietungsservices
                  in Deutschland entwickelt.
                </p>
                <p>
                  Unser Gründerteam, bestehend aus Auto-Enthusiasten mit über 15 Jahren Erfahrung
                  in der Luxusautomobilbranche, erkannte eine Marktlücke: Viele Menschen träumen
                  davon, einen Ferrari, Lamborghini oder Porsche zu fahren, aber die Hürden waren
                  zu hoch.
                </p>
                <p>
                  Wir haben es uns zur Mission gemacht, diese Träume wahr werden zu lassen -
                  mit einem erstklassigen Service, transparenten Konditionen und einer Flotte,
                  die ihresgleichen sucht. Jedes Fahrzeug wird von uns persönlich ausgewählt,
                  gewartet und mit höchster Sorgfalt gepflegt.
                </p>
                <p>
                  Heute vertrauen uns über 5.000 zufriedene Kunden, und unsere Flotte umfasst
                  mehr als 50 Premium-Sportwagen der begehrtesten Marken der Welt.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                  alt="GentleCars Showroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-black p-8 rounded-xl shadow-2xl">
                <div className="text-4xl font-bold mb-1">5.000+</div>
                <div className="text-sm font-semibold">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Unsere <span className="text-gold">Werte</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Exzellenz',
                description: 'Wir streben nach Perfektion in jedem Detail - von der Fahrzeugauswahl bis zum Kundenservice. Kompromisse kennen wir nicht.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Vertrauen',
                description: 'Transparenz und Ehrlichkeit sind die Grundpfeiler unserer Kundenbeziehungen. Keine versteckten Kosten, keine Überraschungen.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Leidenschaft',
                description: 'Unsere Liebe zu Automobilen treibt uns an. Jedes Fahrzeug in unserer Flotte ist eine Herzensangelegenheit.'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-900 border border-gold/20 rounded-xl p-8 hover:border-gold/40 transition-all">
                <div className="text-gold mb-6">{value.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Unser <span className="text-gold">Team</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leidenschaftliche Experten, die Ihren Traum vom perfekten Fahrerlebnis wahr werden lassen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alexander Müller',
                position: 'Gründer & CEO',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
                bio: 'Ex-Porsche Vertriebsleiter mit 15 Jahren Erfahrung in der Luxusautomobilbranche'
              },
              {
                name: 'Sarah Schmidt',
                position: 'Head of Customer Experience',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
                bio: 'Spezialistin für Premium-Kundenservice mit Passion für außergewöhnliche Erlebnisse'
              },
              {
                name: 'Michael Weber',
                position: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
                bio: 'Zertifizierter Sportwagen-Mechaniker und Motorsport-Enthusiast'
              }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 border border-gold/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{member.name}</h3>
                <div className="text-gold text-sm font-semibold mb-3 uppercase tracking-wider">
                  {member.position}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-black border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Premium Fahrzeuge', sublabel: 'Handverlesen' },
              { number: '5.000+', label: 'Zufriedene Kunden', sublabel: 'Seit 2020' },
              { number: '15+', label: 'Jahre Erfahrung', sublabel: 'Im Team' },
              { number: '99%', label: 'Kundenzufriedenheit', sublabel: 'Durchschnitt' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-gold mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Warum <span className="text-gold">GentleCars</span>?
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Handverlesene Flotte',
                description: 'Jedes Fahrzeug wird von uns persönlich ausgewählt und erfüllt höchste Qualitätsstandards. Keine Kompromisse bei Zustand und Performance.'
              },
              {
                title: 'Transparente Konditionen',
                description: 'Klare Preisgestaltung ohne versteckte Kosten. Vollkasko-Versicherung und umfassender Service inklusive.'
              },
              {
                title: 'VIP-Concierge-Service',
                description: 'Persönliche Beratung, Lieferung & Abholung deutschlandweit, maßgeschneiderte Lösungen für Ihre individuellen Wünsche.'
              },
              {
                title: 'Perfekter Zustand',
                description: 'Regelmäßige Wartung durch zertifizierte Fachwerkstätten, professionelle Aufbereitung vor jeder Übergabe.'
              },
              {
                title: 'Flexible Mietdauer',
                description: 'Von wenigen Stunden bis zu mehreren Monaten - wir passen uns Ihren Bedürfnissen an.'
              },
              {
                title: '24/7 Support',
                description: 'Rund um die Uhr für Sie erreichbar. Bei Fragen oder Problemen sind wir jederzeit für Sie da.'
              }
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-black border border-gold/10 rounded-xl hover:border-gold/30 transition-all">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Bereit für Ihr <span className="text-gold">Abenteuer</span>?
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Entdecken Sie unsere exklusive Flotte und erleben Sie Performance pur.
            Unser Team steht Ihnen jederzeit zur Verfügung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/verfuegbarkeit"
              className="px-12 py-5 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider shadow-2xl hover:shadow-gold/50 hover:scale-105"
            >
              Verfügbarkeit prüfen
            </Link>
            <Link
              href="/kontakt"
              className="px-12 py-5 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all uppercase tracking-wider"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
