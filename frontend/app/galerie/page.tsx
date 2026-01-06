'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

interface GalleryCar {
  id: number
  slug: string
  name: string
  brand: string
  model: string
  year: number
  category: string
  pricePerDay: number
  images: string[]
  available: boolean
}

export default function GaleriePage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<string>('all')
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all')

  // Dummy gallery data
  const allCars: GalleryCar[] = [
    {
      id: 1,
      slug: 'porsche-911-gt3',
      name: 'Porsche 911 GT3',
      brand: 'Porsche',
      model: '911 GT3',
      year: 2024,
      category: 'Sportwagen',
      pricePerDay: 399,
      images: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
        'https://images.unsplash.com/photo-1614162692292-7ac56d7f3c36?w=800'
      ],
      available: true
    },
    {
      id: 2,
      slug: 'ferrari-f8-tributo',
      name: 'Ferrari F8 Tributo',
      brand: 'Ferrari',
      model: 'F8 Tributo',
      year: 2023,
      category: 'Supersportwagen',
      pricePerDay: 799,
      images: [
        'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'
      ],
      available: false
    },
    {
      id: 3,
      slug: 'lamborghini-huracan',
      name: 'Lamborghini Huracán',
      brand: 'Lamborghini',
      model: 'Huracán',
      year: 2024,
      category: 'Supersportwagen',
      pricePerDay: 699,
      images: [
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
        'https://images.unsplash.com/photo-1621135802920-1371a7d0de5f?w=800'
      ],
      available: true
    },
    {
      id: 4,
      slug: 'mercedes-amg-gt-r',
      name: 'Mercedes-AMG GT R',
      brand: 'Mercedes',
      model: 'AMG GT R',
      year: 2023,
      category: 'Sportwagen',
      pricePerDay: 449,
      images: [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
        'https://images.unsplash.com/photo-1617531653520-bd466ee81bf4?w=800'
      ],
      available: true
    },
    {
      id: 5,
      slug: 'audi-r8-v10',
      name: 'Audi R8 V10',
      brand: 'Audi',
      model: 'R8 V10',
      year: 2024,
      category: 'Sportwagen',
      pricePerDay: 499,
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800'
      ],
      available: false
    },
    {
      id: 6,
      slug: 'bmw-m4-competition',
      name: 'BMW M4 Competition',
      brand: 'BMW',
      model: 'M4 Competition',
      year: 2024,
      category: 'Sportwagen',
      pricePerDay: 349,
      images: [
        'https://images.unsplash.com/photo-1617531653520-bd466ee81bf4?w=800',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'
      ],
      available: true
    },
    {
      id: 7,
      slug: 'mclaren-720s',
      name: 'McLaren 720S',
      brand: 'McLaren',
      model: '720S',
      year: 2023,
      category: 'Supersportwagen',
      pricePerDay: 899,
      images: [
        'https://images.unsplash.com/photo-1626668011687-8a114d5fc8af?w=800',
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800'
      ],
      available: true
    },
    {
      id: 8,
      slug: 'porsche-taycan-turbo-s',
      name: 'Porsche Taycan Turbo S',
      brand: 'Porsche',
      model: 'Taycan Turbo S',
      year: 2024,
      category: 'Elektro-Sportwagen',
      pricePerDay: 549,
      images: [
        'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800',
        'https://images.unsplash.com/photo-1611821064430-e76947c91489?w=800'
      ],
      available: true
    }
  ]

  // Filter logic
  const filteredCars = allCars.filter(car => {
    const brandMatch = selectedBrand === 'all' || car.brand === selectedBrand
    const categoryMatch = selectedCategory === 'all' || car.category === selectedCategory
    const availabilityMatch = availabilityFilter === 'all' ||
                              (availabilityFilter === 'available' && car.available) ||
                              (availabilityFilter === 'unavailable' && !car.available)

    let priceMatch = true
    if (priceRange === 'low') priceMatch = car.pricePerDay < 400
    else if (priceRange === 'medium') priceMatch = car.pricePerDay >= 400 && car.pricePerDay < 700
    else if (priceRange === 'high') priceMatch = car.pricePerDay >= 700

    return brandMatch && categoryMatch && priceMatch && availabilityMatch
  })

  const brands = Array.from(new Set(allCars.map(car => car.brand)))
  const categories = Array.from(new Set(allCars.map(car => car.category)))

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
            Fahrzeug <span className="text-gold">Galerie</span>
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Entdecken Sie unsere exklusive Auswahl an Premium-Sportwagen
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-900 border-y border-gold/10 lg:sticky lg:top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Brand Filter */}
            <div>
              <label className="block text-gold text-xs font-semibold mb-2 uppercase tracking-wider">
                Marke
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-gold/30 rounded-lg text-white text-sm focus:border-gold focus:outline-none"
              >
                <option value="all">Alle Marken</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-gold text-xs font-semibold mb-2 uppercase tracking-wider">
                Kategorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-gold/30 rounded-lg text-white text-sm focus:border-gold focus:outline-none"
              >
                <option value="all">Alle Kategorien</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-gold text-xs font-semibold mb-2 uppercase tracking-wider">
                Preis/Tag
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-gold/30 rounded-lg text-white text-sm focus:border-gold focus:outline-none"
              >
                <option value="all">Alle Preise</option>
                <option value="low">Bis 400€</option>
                <option value="medium">400€ - 700€</option>
                <option value="high">Über 700€</option>
              </select>
            </div>

            {/* Availability Filter */}
            <div>
              <label className="block text-gold text-xs font-semibold mb-2 uppercase tracking-wider">
                Verfügbarkeit
              </label>
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-black border border-gold/30 rounded-lg text-white text-sm focus:border-gold focus:outline-none"
              >
                <option value="all">Alle anzeigen</option>
                <option value="available">Nur verfügbar</option>
                <option value="unavailable">Nur vermietet</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <span className="text-gray-400 text-sm">
              {filteredCars.length} {filteredCars.length === 1 ? 'Fahrzeug' : 'Fahrzeuge'} gefunden
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {filteredCars.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-24 h-24 text-gray-700 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl text-white mb-2">Keine Fahrzeuge gefunden</h3>
              <p className="text-gray-400 mb-6">Versuchen Sie andere Filteroptionen</p>
              <button
                onClick={() => {
                  setSelectedBrand('all')
                  setSelectedCategory('all')
                  setPriceRange('all')
                  setAvailabilityFilter('all')
                }}
                className="px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition-all"
              >
                Filter zurücksetzen
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
                <Link
                  key={car.id}
                  href={`/cars/${car.slug}`}
                  className="group bg-gray-900 border border-gold/20 rounded-xl overflow-hidden hover:border-gold hover:shadow-xl hover:shadow-gold/10 transition-all"
                >
                  {/* Image with hover effect */}
                  <div className="relative aspect-[4/3] bg-black overflow-hidden">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <img
                      src={car.images[1]}
                      alt={car.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />

                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      {car.available ? (
                        <span className="bg-emerald-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          Verfügbar
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                          Vermietet
                        </span>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/80 backdrop-blur-sm text-gold text-xs px-3 py-1.5 rounded-full font-semibold">
                        {car.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {car.brand} • {car.year}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Ab</div>
                        <div className="text-gold font-bold text-lg">
                          {car.pricePerDay}€<span className="text-sm">/Tag</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 group-hover:text-gold transition-colors flex items-center gap-1">
                        Details
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-gray-400 mb-8">
            Kontaktieren Sie uns direkt. Wir haben Zugang zu einem erweiterten Netzwerk
            und können auch spezielle Fahrzeugwünsche erfüllen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="px-10 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/verfuegbarkeit"
              className="px-10 py-4 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all uppercase tracking-wider"
            >
              Verfügbarkeit prüfen
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
