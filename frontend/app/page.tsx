import Link from "next/link";
import Image from "next/image";
import { getCars } from "@/lib/api/client";
import Navigation from "@/components/Navigation";
import ContactButtons from "@/components/ContactButtons";
import CookieBanner from "@/components/CookieBanner";
import FAQ from "@/components/FAQ";

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const cars = await getCars();

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
              <Image
                src="/logo-gold.png"
                alt="GentleCars"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif tracking-tight leading-tight">
            Luxus trifft <span className="text-emerald-400">Performance</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Erleben Sie die exklusivsten Sportwagen Deutschlands. Von Porsche bis Ferrari –
            Ihr Traumwagen wartet auf Sie.
          </p>
          <p className="text-white/80 text-sm md:text-base mb-12 uppercase tracking-widest font-semibold">
            Premium Sportwagenvermietung seit 2020
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/verfuegbarkeit"
              className="group relative px-12 py-5 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all uppercase tracking-wider text-base shadow-2xl hover:shadow-white/30 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                Verfügbare Fahrzeuge
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/galerie"
              className="px-12 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-wider text-base"
            >
              Galerie ansehen
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Premium Fahrzeuge" },
              { number: "5.000+", label: "Zufriedene Kunden" },
              { number: "15+", label: "Jahre Erfahrung" },
              { number: "24/7", label: "Kundenservice" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Warum <span className="text-emerald-400">GentleCars</span>?
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'Exklusive Auswahl',
                description: 'Handverlesene Sportwagen der Premium-Klasse. Von Porsche 911 GT3 bis Ferrari F8 Tributo.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Vollkasko-Schutz',
                description: 'Umfassender Versicherungsschutz und transparente Konditionen für Ihre Sicherheit.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Sofort-Buchung',
                description: 'Online buchen und innerhalb von 24h Ihren Traumwagen in Empfang nehmen.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Flexible Mietdauer',
                description: 'Von Stunden bis Monaten – wir passen uns Ihren Bedürfnissen an.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'VIP-Service',
                description: 'Persönlicher Concierge, Lieferung & Abholung deutschlandweit möglich.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Top Zustand',
                description: 'Regelmäßige Wartung und professionelle Aufbereitung garantiert.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-xl bg-black/50 border border-white/10 hover:border-emerald-400/50 transition-all hover:transform hover:scale-105">
                <div className="text-white group-hover:text-emerald-400 mb-6 group-hover:scale-110 transition-all inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section id="fleet" className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Unsere <span className="text-emerald-400">Flotte</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Entdecken Sie unsere handverlesene Auswahl an Premium-Sportwagen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cars.map((car) => (
              <Link key={car.id} href={`/cars/${car.slug}`} className="group">
                <div className="bg-gray-900 border border-white/20 rounded-lg overflow-hidden hover:border-emerald-400 transition-all hover:shadow-xl hover:shadow-emerald-400/10">
                  <div className="aspect-[4/3] bg-black relative overflow-hidden">
                    {car.images?.[0] ? (
                      <img
                        src={car.images[0]}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
                          alt={car.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Verfügbar
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {car.brand} • {car.model} • {car.year}
                    </p>

                    {car.specs && (
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        {car.specs.power && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            {car.specs.power}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Ab</div>
                        <div className="text-white font-bold text-lg">299€<span className="text-sm">/Tag</span></div>
                      </div>
                      <span className="text-sm text-gray-500 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                        Details
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/galerie"
              className="inline-block px-10 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-wider"
            >
              Alle Fahrzeuge ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Das sagen unsere <span className="text-emerald-400">Kunden</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Schmidt",
                location: "Düsseldorf",
                text: "Absolut professioneller Service! Der Porsche 911 GT3 war in makellosem Zustand. Die Übergabe lief reibungslos und das Team war äußerst kompetent.",
                rating: 5,
                car: "Porsche 911 GT3"
              },
              {
                name: "Sarah Weber",
                location: "Frankfurt",
                text: "Traumhafte Erfahrung! Habe mir für mein Hochzeitswochenende einen Ferrari gemietet. Unvergesslich! Der VIP-Service ist jeden Cent wert.",
                rating: 5,
                car: "Ferrari F8 Tributo"
              },
              {
                name: "Thomas Müller",
                location: "Hamburg",
                text: "Bereits zum dritten Mal bei GentleCars und jedes Mal begeistert. Transparente Preise, top Fahrzeuge und exzellenter Kundenservice. Klare Empfehlung!",
                rating: 5,
                car: "Lamborghini Huracán"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-black border border-white/20 rounded-lg p-8 hover:border-emerald-400/40 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                  <div className="text-xs text-emerald-400 mt-1">{testimonial.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Bereit für Ihr <span className="text-emerald-400">Abenteuer</span>?
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Buchen Sie jetzt Ihren Traumwagen und erleben Sie Performance pur.
            Unser Team berät Sie gerne persönlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/verfuegbarkeit"
              className="px-12 py-5 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all uppercase tracking-wider shadow-2xl hover:shadow-white/30 hover:scale-105"
            >
              Jetzt buchen
            </Link>
            <Link
              href="/ueber-uns"
              className="px-12 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-wider"
            >
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-12 h-12">
                  <Image src="/logo-gold.png" alt="GentleCars" fill className="object-contain" />
                </div>
                <div>
                  <div className="text-white font-serif text-2xl">GENTLECARS</div>
                  <div className="text-white/60 text-xs tracking-widest">SPORTWAGENVERMIETUNG</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Premium Sportwagenvermietung seit 2020
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/verfuegbarkeit" className="text-gray-400 hover:text-emerald-400 transition-colors">Verfügbarkeit</Link></li>
                <li><Link href="/galerie" className="text-gray-400 hover:text-emerald-400 transition-colors">Galerie</Link></li>
                <li><Link href="/ueber-uns" className="text-gray-400 hover:text-emerald-400 transition-colors">Über uns</Link></li>
                <li><Link href="/kontakt" className="text-gray-400 hover:text-emerald-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="text-gray-400 hover:text-emerald-400 transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-gray-400 hover:text-emerald-400 transition-colors">Datenschutz</Link></li>
                <li><Link href="/agb" className="text-gray-400 hover:text-emerald-400 transition-colors">AGB</Link></li>
                <li><Link href="/widerruf" className="text-gray-400 hover:text-emerald-400 transition-colors">Widerrufsrecht</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Kontakt</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +49 123 456 789
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@gentlecars.de
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Musterstraße 123<br/>45127 Essen</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © 2026 GentleCars. Alle Rechte vorbehalten.
              </div>
              <div className="text-sm text-gray-500">
                Made with ❤️ by <span className="text-white">GentleWebdesign</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
