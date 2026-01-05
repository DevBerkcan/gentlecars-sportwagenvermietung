import Link from "next/link";
import { getCars } from "@/lib/api/client";

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const cars = await getCars();

  return (
    <main className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden noise-texture">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-90" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 font-serif">
            GENTLE<span className="gradient-text">CARS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gold mb-8 font-light">
            SPORTWAGENVERMIETUNG
          </p>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
            Erleben Sie Luxus und Performance. Unsere exklusive Auswahl an Premium-Sportwagen 
            für unvergessliche Momente.
          </p>
          
          <Link
            href="#fleet"
            className="inline-block px-8 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all shine"
          >
            Fahrzeuge entdecken
          </Link>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-20 px-4 bg-gradient-to-b from-dark to-dark-lighter">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-white text-center mb-4">
            Unsere Flotte
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Jedes Fahrzeug wird sorgfältig gewartet und auf höchstem Niveau präsentiert.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car) => (
              <Link 
                key={car.id} 
                href={`/cars/${car.slug}`}
                className="group"
              >
                <div className="bg-dark-lighter border border-gold/20 rounded-lg overflow-hidden hover:border-gold transition-all duration-300">
                  <div className="aspect-[4/3] bg-dark relative overflow-hidden">
                    {car.images?.[0] ? (
                      <img
                        src={car.images[0]}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gold">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {car.brand} {car.model}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                      <span className="text-gold font-semibold">
                        Ab 199 € / Tag
                      </span>
                      <span className="text-sm text-gray-500 group-hover:text-gold transition-colors">
                        Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Bereit für Ihr <span className="gradient-text">Abenteuer</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Reservieren Sie noch heute Ihren Traumwagen. Einfach, schnell und unkompliziert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#fleet"
              className="px-8 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all"
            >
              Fahrzeug wählen
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-4 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-dark transition-all"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-gold/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-gold font-serif text-2xl mb-4">GENTLECARS</h3>
              <p className="text-gray-400 text-sm">
                Premium Sportwagenvermietung in Essen
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/impressum" className="text-gray-400 hover:text-gold">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-gray-400 hover:text-gold">Datenschutz</Link></li>
                <li><Link href="/agb" className="text-gray-400 hover:text-gold">AGB</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Tel: +49 123 456 789</li>
                <li>E-Mail: info@gentlecars.de</li>
                <li>Musterstraße 123, 45127 Essen</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gold/10">
            © 2026 GentleCars. Alle Rechte vorbehalten. | Entwickelt von GentleWebdesign
          </div>
        </div>
      </footer>
    </main>
  );
}
