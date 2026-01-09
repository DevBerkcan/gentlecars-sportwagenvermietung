'use client'

import { useState } from 'react'

interface Brand {
  name: string
  logo: string
  description?: string
}

const brands: Brand[] = [
  {
    name: 'Porsche',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Porsche_logo.svg/200px-Porsche_logo.svg.png',
    description: 'Deutsche Sportwagen-Ikone seit 1931'
  },
  {
    name: 'Ferrari',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ferrari_Logo.svg/200px-Ferrari_Logo.svg.png',
    description: 'Italienische Rennsport-Legende'
  },
  {
    name: 'Lamborghini',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/200px-Lamborghini_Logo.svg.png',
    description: 'Supersportwagen aus Sant\'Agata'
  },
  {
    name: 'Mercedes-AMG',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png',
    description: 'Performance und Luxus vereint'
  },
  {
    name: 'McLaren',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/McLaren_logo.svg/200px-McLaren_logo.svg.png',
    description: 'Britische Rennstrecken-Technologie'
  },
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
    description: 'Bayerische Fahrdynamik'
  },
  {
    name: 'Audi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/200px-Audi-Logo_2016.svg.png',
    description: 'Vorsprung durch Technik'
  },
  {
    name: 'Bentley',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Bentley_logo.svg/200px-Bentley_logo.svg.png',
    description: 'Britischer Luxus seit 1919'
  }
]

interface BrandLogosProps {
  title?: string
  subtitle?: string
  animated?: boolean
  showDescription?: boolean
  columns?: 'auto' | '4' | '5' | '6' | '8'
}

export default function BrandLogos({
  title = 'Unsere Premium-Marken',
  subtitle = 'Wir bieten Ihnen die exklusivsten Fahrzeuge der weltweit führenden Sportwagen-Hersteller',
  animated = true,
  showDescription = false,
  columns = 'auto'
}: BrandLogosProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getGridCols = () => {
    switch (columns) {
      case '4':
        return 'grid-cols-2 md:grid-cols-4'
      case '5':
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
      case '6':
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
      case '8':
        return 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8'
      default:
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'
    }
  }

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 sm:mb-16">
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
                {title}
              </h2>
            )}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            {subtitle && (
              <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Logos Grid */}
        <div className={`grid ${getGridCols()} gap-6 sm:gap-8`}>
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group relative flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-900/50 border border-white/10 rounded-xl hover:border-gold/50 transition-all duration-300 ${
                animated ? 'hover:scale-105 hover:shadow-2xl hover:shadow-gold/10' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Logo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>

              {/* Brand Name */}
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1 text-center group-hover:text-gold transition-colors">
                {brand.name}
              </h3>

              {/* Description (on hover or always if showDescription) */}
              {showDescription && brand.description && (
                <p className="text-gray-500 text-xs text-center mt-2">
                  {brand.description}
                </p>
              )}

              {!showDescription && brand.description && (
                <p
                  className={`text-gray-400 text-xs text-center mt-2 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {brand.description}
                </p>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/5 to-gold/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 rounded-full">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gold text-sm font-semibold">
              Autorisierter Partner aller Marken
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Minimal Logo Slider Version (for footer or compact areas)
export function BrandLogoSlider() {
  return (
    <div className="py-8 px-4 bg-black/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-12 animate-scroll">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-20 h-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
