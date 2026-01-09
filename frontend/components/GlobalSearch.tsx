'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface SearchResult {
  type: 'car' | 'blog' | 'page'
  title: string
  description: string
  url: string
  image?: string
  category?: string
}

// Dummy data - in production würde dies von einer API kommen
const searchableContent: SearchResult[] = [
  // Cars
  { type: 'car', title: 'Porsche 911 GT3', description: '510 PS • 320 km/h • Sportwagen', url: '/cars/porsche-911-gt3', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400', category: 'Sportwagen' },
  { type: 'car', title: 'Ferrari F8 Tributo', description: '720 PS • 340 km/h • Supersportwagen', url: '/cars/ferrari-f8-tributo', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400', category: 'Supersportwagen' },
  { type: 'car', title: 'Lamborghini Huracán', description: '640 PS • 325 km/h • Supersportwagen', url: '/cars/lamborghini-huracan', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400', category: 'Supersportwagen' },
  { type: 'car', title: 'Mercedes-AMG GT R', description: '585 PS • 318 km/h • Sportwagen', url: '/cars/mercedes-amg-gt-r', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400', category: 'Sportwagen' },
  { type: 'car', title: 'Audi R8 V10', description: '570 PS • 330 km/h • Sportwagen', url: '/cars/audi-r8-v10', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400', category: 'Sportwagen' },
  { type: 'car', title: 'BMW M4 Competition', description: '510 PS • 290 km/h • Sportwagen', url: '/cars/bmw-m4-competition', image: 'https://images.unsplash.com/photo-1617531653520-bd466ee81bf4?w=400', category: 'Sportwagen' },
  { type: 'car', title: 'McLaren 720S', description: '720 PS • 341 km/h • Supersportwagen', url: '/cars/mclaren-720s', image: 'https://images.unsplash.com/photo-1626668011687-8a114d5fc8af?w=400', category: 'Supersportwagen' },
  { type: 'car', title: 'Porsche Taycan Turbo S', description: '761 PS • 260 km/h • Elektro-Sportwagen', url: '/cars/porsche-taycan-turbo-s', image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=400', category: 'Elektro' },

  // Blog Posts
  { type: 'blog', title: 'Porsche 911 GT3: Eine Testfahrt der Extraklasse', description: 'Unsere Erfahrungen mit dem ikonischen Sportwagen', url: '/blog/porsche-911-gt3-testfahrt', category: 'Fahrzeugtests' },
  { type: 'blog', title: '10 Tipps: Das sollten Sie beim Mieten eines Supersportwagens beachten', description: 'Von der Versicherung bis zur perfekten Route', url: '/blog/tipps-supersportwagen-mieten', category: 'Ratgeber' },
  { type: 'blog', title: 'Neue Fahrzeuge 2026', description: 'Diese Supersportwagen erwarten Sie 2026', url: '/blog/neue-fahrzeuge-2026', category: 'News' },

  // Pages
  { type: 'page', title: 'Fahrzeug Galerie', description: 'Entdecken Sie unsere exklusive Fahrzeugflotte', url: '/galerie' },
  { type: 'page', title: 'Verfügbarkeit prüfen', description: 'Prüfen Sie die Verfügbarkeit unserer Sportwagen', url: '/verfuegbarkeit' },
  { type: 'page', title: 'Über uns', description: 'Erfahren Sie mehr über GentleCars', url: '/ueber-uns' },
  { type: 'page', title: 'Kontakt', description: 'Nehmen Sie Kontakt mit uns auf', url: '/kontakt' },
  { type: 'page', title: 'Blog', description: 'News, Tests und Ratgeber rund um Sportwagen', url: '/blog' }
]

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Search logic with debouncing
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timeoutId = setTimeout(() => {
      const searchQuery = query.toLowerCase()
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.category?.toLowerCase().includes(searchQuery)
      )
      setResults(filtered)
      setSelectedIndex(0)
    }, 200)

    return () => clearTimeout(timeoutId)
  }, [query])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length)
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      handleSelectResult(results[selectedIndex])
    }
  }

  const handleSelectResult = (result: SearchResult) => {
    router.push(result.url)
    setIsOpen(false)
    setQuery('')
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'car':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        )
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
            <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
          </svg>
        )
      case 'page':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  const getTypeBadge = (type: string) => {
    const badges = {
      car: { label: 'Fahrzeug', color: 'bg-gold/20 text-gold' },
      blog: { label: 'Blog', color: 'bg-blue-500/20 text-blue-400' },
      page: { label: 'Seite', color: 'bg-gray-500/20 text-gray-400' }
    }
    const badge = badges[type as keyof typeof badges]
    return (
      <span className={`text-xs px-2 py-1 rounded ${badge.color}`}>
        {badge.label}
      </span>
    )
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 p-4 bg-gold text-black rounded-full shadow-2xl hover:bg-gold-light transition-all hover:scale-110 group"
        aria-label="Suche öffnen"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="absolute -top-2 -right-2 bg-black text-gold text-xs px-2 py-1 rounded border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          ⌘K
        </span>
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Search Modal */}
      <div className="fixed inset-x-4 top-20 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl z-50 animate-slide-down">
        <div className="bg-gray-900 border border-gold/30 rounded-xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-white/10">
            <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Fahrzeuge, Blog-Artikel oder Seiten suchen..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
            />
            <kbd className="hidden sm:block px-2 py-1 text-xs bg-black border border-white/20 rounded text-gray-400">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query && results.length === 0 ? (
              <div className="p-8 text-center">
                <svg className="w-16 h-16 text-gray-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400">Keine Ergebnisse für "{query}"</p>
              </div>
            ) : query && results.length > 0 ? (
              <div className="p-2">
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectResult(result)}
                    className={`w-full flex items-start gap-4 p-3 rounded-lg transition-all text-left ${
                      index === selectedIndex
                        ? 'bg-gold/10 border border-gold/30'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {/* Icon/Image */}
                    <div className="flex-shrink-0">
                      {result.image ? (
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center text-gold">
                          {getTypeIcon(result.type)}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold truncate">{result.title}</h3>
                        {getTypeBadge(result.type)}
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-1">{result.description}</p>
                      {result.category && (
                        <span className="text-gold text-xs mt-1 inline-block">{result.category}</span>
                      )}
                    </div>

                    {/* Arrow */}
                    {index === selectedIndex && (
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4">Beliebte Suchanfragen:</p>
                <div className="flex flex-wrap gap-2">
                  {['Porsche', 'Ferrari', 'Lamborghini', 'Verfügbarkeit', 'Blog'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-white/10 bg-black/50">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-800 border border-white/20 rounded">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-gray-800 border border-white/20 rounded">↓</kbd>
                  navigieren
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-gray-800 border border-white/20 rounded">↵</kbd>
                  auswählen
                </span>
              </div>
              <span>{results.length} Ergebnisse</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
