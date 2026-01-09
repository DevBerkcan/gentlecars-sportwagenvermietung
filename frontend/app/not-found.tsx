import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      {/* 404 Content */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6">
              <Image
                src="/logo-gold.png"
                alt="GentleCars"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl md:text-[200px] font-bold text-gold opacity-20 leading-none">
              404
            </h1>
          </div>

          {/* Message */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
              Seite nicht <span className="text-gold">gefunden</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
              <br className="hidden sm:block" />
              Kehren Sie zur Startseite zurück und entdecken Sie unsere exklusive Fahrzeugflotte.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="group px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider shadow-2xl hover:shadow-gold/50 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Zur Startseite
            </Link>
            <Link
              href="/galerie"
              className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all uppercase tracking-wider"
            >
              Fahrzeuge ansehen
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { href: '/galerie', icon: '🚗', label: 'Galerie' },
              { href: '/blog', icon: '📰', label: 'Blog' },
              { href: '/verfuegbarkeit', icon: '📅', label: 'Verfügbarkeit' },
              { href: '/kontakt', icon: '📞', label: 'Kontakt' }
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="p-4 bg-gray-900/50 border border-white/10 rounded-lg hover:border-gold/50 hover:bg-gray-900 transition-all group"
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <div className="text-white text-sm group-hover:text-gold transition-colors">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-12 p-6 bg-gray-900/50 border border-white/10 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-white font-semibold mb-2">Brauchen Sie Hilfe?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Unser Team steht Ihnen gerne zur Verfügung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+49123456789"
                className="flex items-center justify-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +49 123 456 789
              </a>
              <a
                href="mailto:info@gentlecars.de"
                className="flex items-center justify-center gap-2 text-gold hover:text-gold-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@gentlecars.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
