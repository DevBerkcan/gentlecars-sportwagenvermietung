'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo-gold.png"
                alt="GentleCars Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-gold font-serif text-xl md:text-2xl tracking-wider">
                GENTLECARS
              </div>
              <div className="text-gold/60 text-xs tracking-widest uppercase">
                Sportwagenvermietung
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#fleet"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Flotte
            </Link>
            <Link
              href="/#services"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider"
            >
              Über uns
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-2.5 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-all text-sm uppercase tracking-wider"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold p-2"
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
        <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-gold/20">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/#fleet"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flotte
            </Link>
            <Link
              href="/#services"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="block text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              href="/kontakt"
              className="block px-6 py-3 bg-gold text-black font-semibold rounded hover:bg-gold-light transition-all text-sm uppercase tracking-wider text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
