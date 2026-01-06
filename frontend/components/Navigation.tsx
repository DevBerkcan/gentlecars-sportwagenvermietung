'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('DE')
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages = [
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gold/20' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo-gold.png"
                alt="GentleCars Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-gold font-serif text-lg md:text-xl tracking-wider font-bold">
                GentleCars
              </div>
              <div className="text-gold/60 text-[10px] md:text-xs tracking-[0.2em] uppercase">
                Sportwagenvermietung
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/#fleet"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Flotte
            </Link>
            <Link
              href="/#services"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Services
            </Link>
            <Link
              href="/ueber-uns"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Über uns
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Kontakt
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium border border-gold/20 rounded hover:border-gold/40"
              >
                <span className="text-base">{languages.find(l => l.code === language)?.flag}</span>
                <span>{language}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-black/95 border border-gold/20 rounded-lg overflow-hidden shadow-xl backdrop-blur-md min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangMenuOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                        language === lang.code
                          ? 'bg-gold/10 text-gold'
                          : 'text-gray-300 hover:bg-gold/5 hover:text-gold'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Buchen Button */}
            <Link
              href="/verfuegbarkeit"
              className="px-6 py-2.5 bg-gold hover:bg-gold-light text-black font-bold rounded transition-all text-sm uppercase tracking-wider shadow-lg hover:shadow-gold/50"
            >
              Buchen
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gold p-2 hover:bg-gold/10 rounded transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-gold/20">
          <div className="px-4 py-6 space-y-3">
            <Link
              href="/#fleet"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-3 px-4 rounded hover:bg-gold/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flotte
            </Link>
            <Link
              href="/#services"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-3 px-4 rounded hover:bg-gold/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/ueber-uns"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-3 px-4 rounded hover:bg-gold/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              href="/kontakt"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-3 px-4 rounded hover:bg-gold/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>

            {/* Mobile Language Selector */}
            <div className="border-t border-gold/10 pt-3 mt-3">
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-2 px-4">Sprache</div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center gap-3 rounded transition-colors ${
                      language === lang.code
                        ? 'bg-gold/10 text-gold'
                        : 'text-gray-300 hover:bg-gold/5 hover:text-gold'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Buchen Button */}
            <Link
              href="/verfuegbarkeit"
              className="block px-6 py-4 bg-gold hover:bg-gold-light text-black font-bold rounded transition-all text-sm uppercase tracking-wider text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buchen
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
