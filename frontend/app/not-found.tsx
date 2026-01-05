import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <Image
              src="/logo-gold.png"
              alt="GentleCars"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold text-white/5 leading-none mb-4">
            404
          </h1>
          <div className="relative -mt-20 md:-mt-32">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Seite nicht <span className="text-emerald-400">gefunden</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-6" />
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto">
          Die von Ihnen gesuchte Seite existiert leider nicht.
          Vielleicht wurde sie verschoben oder der Link ist veraltet.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all uppercase tracking-wider"
          >
            Zur Startseite
          </Link>
          <Link
            href="/galerie"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-wider"
          >
            Unsere Flotte
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm mb-4">Beliebte Seiten:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/verfuegbarkeit" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
              Verfügbarkeit
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/kontakt" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
              Kontakt
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/ueber-uns" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
              Über uns
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/impressum" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
              Impressum
            </Link>
          </div>
        </div>

        {/* Decorative car icon */}
        <div className="mt-16 opacity-10">
          <svg className="w-32 h-32 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
