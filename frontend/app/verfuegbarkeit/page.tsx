'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'
import SEO from '@/components/SEO'

interface Car {
  id: number
  slug: string
  name: string
  brand: string
  model: string
  year: number
  images: string[]
  specs?: {
    power?: string
    acceleration?: string
    topSpeed?: string
  }
  available: boolean
  nextAvailableDate?: string
  pricing: {
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
  }
}

export default function VerfuegbarkeitPage() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)

  // Dummy cars data (in production, this would come from API)
  const dummyCars: Car[] = [
    {
      id: 1,
      slug: 'porsche-911-gt3',
      name: 'Porsche 911 GT3',
      brand: 'Porsche',
      model: '911 GT3',
      year: 2024,
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800'],
      specs: { power: '510 PS', acceleration: '3.4s', topSpeed: '320 km/h' },
      available: true,
      pricing: {
        monday: 399,
        tuesday: 399,
        wednesday: 399,
        thursday: 399,
        friday: 549,
        saturday: 649,
        sunday: 549
      }
    },
    {
      id: 2,
      slug: 'ferrari-f8-tributo',
      name: 'Ferrari F8 Tributo',
      brand: 'Ferrari',
      model: 'F8 Tributo',
      year: 2023,
      images: ['https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800'],
      specs: { power: '720 PS', acceleration: '2.9s', topSpeed: '340 km/h' },
      available: false,
      nextAvailableDate: '2026-01-12',
      pricing: {
        monday: 799,
        tuesday: 799,
        wednesday: 799,
        thursday: 799,
        friday: 999,
        saturday: 1199,
        sunday: 999
      }
    },
    {
      id: 3,
      slug: 'lamborghini-huracan',
      name: 'Lamborghini Huracán',
      brand: 'Lamborghini',
      model: 'Huracán',
      year: 2024,
      images: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'],
      specs: { power: '640 PS', acceleration: '2.9s', topSpeed: '325 km/h' },
      available: true,
      pricing: {
        monday: 699,
        tuesday: 699,
        wednesday: 699,
        thursday: 699,
        friday: 899,
        saturday: 1099,
        sunday: 899
      }
    },
    {
      id: 4,
      slug: 'mercedes-amg-gt-r',
      name: 'Mercedes-AMG GT R',
      brand: 'Mercedes',
      model: 'AMG GT R',
      year: 2023,
      images: ['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'],
      specs: { power: '585 PS', acceleration: '3.6s', topSpeed: '318 km/h' },
      available: true,
      pricing: {
        monday: 449,
        tuesday: 449,
        wednesday: 449,
        thursday: 449,
        friday: 599,
        saturday: 749,
        sunday: 599
      }
    },
    {
      id: 5,
      slug: 'audi-r8-v10',
      name: 'Audi R8 V10',
      brand: 'Audi',
      model: 'R8 V10',
      year: 2024,
      images: ['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'],
      specs: { power: '570 PS', acceleration: '3.4s', topSpeed: '330 km/h' },
      available: false,
      nextAvailableDate: '2026-01-15',
      pricing: {
        monday: 499,
        tuesday: 499,
        wednesday: 499,
        thursday: 499,
        friday: 649,
        saturday: 799,
        sunday: 649
      }
    },
    {
      id: 6,
      slug: 'bmw-m4-competition',
      name: 'BMW M4 Competition',
      brand: 'BMW',
      model: 'M4 Competition',
      year: 2024,
      images: ['https://images.unsplash.com/photo-1617531653520-bd466ee81bf4?w=800'],
      specs: { power: '510 PS', acceleration: '3.9s', topSpeed: '290 km/h' },
      available: true,
      pricing: {
        monday: 349,
        tuesday: 349,
        wednesday: 349,
        thursday: 349,
        friday: 449,
        saturday: 549,
        sunday: 449
      }
    }
  ]

  const handleSearch = () => {
    if (!startDate || !endDate) {
      alert('Bitte wählen Sie Start- und Enddatum aus')
      return
    }

    setLoading(true)
    setSearchPerformed(false)

    // Simulate API call
    setTimeout(() => {
      setCars(dummyCars)
      setLoading(false)
      setSearchPerformed(true)
    }, 800)
  }

  const calculateAveragePrice = (pricing: Car['pricing']) => {
    const prices = Object.values(pricing)
    return Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
  }

  return (
    <>
      <SEO
        title="Verfügbarkeit prüfen - GentleCars Sportwagenvermietung"
        description="Prüfen Sie die Verfügbarkeit unserer Premium-Sportwagen für Ihren Wunschzeitraum. Einfache Buchung, transparente Preise, sofortige Bestätigung."
        canonicalUrl="https://gentlecars.de/verfuegbarkeit"
        keywords={['Sportwagen Verfügbarkeit', 'Luxusauto buchen', 'Supersportwagen Termine', 'Online Buchung Sportwagen']}
      />
      <main className="min-h-screen bg-black">
        <Navigation />
        <ContactButtons />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
              Verfügbarkeit <span className="text-gold">prüfen</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Wählen Sie Ihren Wunschzeitraum und finden Sie das perfekte Fahrzeug für Ihr Abenteuer
            </p>
          </div>

          {/* Date Selection Card */}
          <div className="max-w-4xl mx-auto bg-gray-900 border border-gold/20 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gold text-sm font-semibold mb-3 uppercase tracking-wider">
                  Startdatum
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gold text-sm font-semibold mb-3 uppercase tracking-wider">
                  Enddatum
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Suche...' : 'Verfügbarkeit prüfen'}
                </button>
              </div>
            </div>

            {startDate && endDate && (
              <div className="mt-6 pt-6 border-t border-gold/10">
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                  <span className="text-gray-400">Ausgewählter Zeitraum:</span>
                  <span className="text-white font-semibold">
                    {formatDate(startDate)} - {formatDate(endDate)}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {searchPerformed && (
        <section className="py-16 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Verfügbare Fahrzeuge
              </h2>
              <p className="text-gray-400">
                {cars.filter(c => c.available).length} von {cars.length} Fahrzeugen verfügbar für den gewählten Zeitraum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className={`bg-gray-900 border rounded-xl overflow-hidden hover:shadow-xl transition-all ${
                    car.available ? 'border-gold/30 hover:border-gold' : 'border-gray-700 opacity-75'
                  }`}
                >
                  {/* Car Image */}
                  <div className="relative aspect-[4/3] bg-black overflow-hidden">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />

                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4">
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
                  </div>

                  {/* Car Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif text-white mb-2">{car.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {car.brand} • {car.model} • {car.year}
                    </p>

                    {/* Specs */}
                    {car.specs && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {car.specs.power && (
                          <div className="text-center">
                            <div className="text-gold text-lg font-bold">{car.specs.power}</div>
                            <div className="text-gray-500 text-xs">Leistung</div>
                          </div>
                        )}
                        {car.specs.acceleration && (
                          <div className="text-center">
                            <div className="text-gold text-lg font-bold">{car.specs.acceleration}</div>
                            <div className="text-gray-500 text-xs">0-100</div>
                          </div>
                        )}
                        {car.specs.topSpeed && (
                          <div className="text-center">
                            <div className="text-gold text-lg font-bold">{car.specs.topSpeed}</div>
                            <div className="text-gray-500 text-xs">Höchstgeschwindigkeit</div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pricing Breakdown */}
                    <div className="bg-black/50 rounded-lg p-4 mb-6">
                      <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                        Preisstaffelung
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between gap-2 text-gray-400">
                          <span>Mo-Do</span>
                          <span className="text-gold font-semibold">{car.pricing.monday}€/Tag</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-gray-400">
                          <span>Freitag</span>
                          <span className="text-gold font-semibold">{car.pricing.friday}€/Tag</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-gray-400">
                          <span>Samstag</span>
                          <span className="text-gold font-semibold">{car.pricing.saturday}€/Tag</span>
                        </div>
                        <div className="flex items-center justify-between gap-2 text-gray-400">
                          <span>Sonntag</span>
                          <span className="text-gold font-semibold">{car.pricing.sunday}€/Tag</span>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gold/10">
                        <div className="flex justify-between">
                          <span className="text-white font-semibold">Ø Preis</span>
                          <span className="text-gold font-bold text-lg">
                            {calculateAveragePrice(car.pricing)}€/Tag
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Next Available */}
                    {!car.available && car.nextAvailableDate && (
                      <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <div className="flex items-center gap-2 text-blue-400 text-sm">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>
                            Verfügbar ab: <strong>{formatDate(car.nextAvailableDate)}</strong>
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    {car.available ? (
                      <Link
                        href={`/cars/${car.slug}?start=${startDate}&end=${endDate}`}
                        className="block w-full px-6 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all text-center uppercase tracking-wider"
                      >
                        Jetzt buchen
                      </Link>
                    ) : (
                      <Link
                        href={`/cars/${car.slug}`}
                        className="block w-full px-6 py-3 border-2 border-gray-600 text-gray-400 font-semibold rounded-lg hover:border-gray-500 transition-all text-center uppercase tracking-wider"
                      >
                        Details ansehen
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      {!searchPerformed && (
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 text-gold mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="text-3xl font-serif text-white mb-4">
                Wählen Sie Ihren Wunschzeitraum
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Geben Sie Start- und Enddatum ein, um die Verfügbarkeit unserer Premium-Sportwagen zu prüfen.
                Wir zeigen Ihnen alle verfügbaren Fahrzeuge mit detaillierten Preisinformationen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-black border border-gold/10 rounded-lg">
                <div className="text-gold text-2xl font-bold mb-2">1</div>
                <h3 className="text-white font-semibold mb-2">Zeitraum wählen</h3>
                <p className="text-gray-400 text-sm">Wählen Sie Start- und Enddatum Ihrer Miete</p>
              </div>
              <div className="p-6 bg-black border border-gold/10 rounded-lg">
                <div className="text-gold text-2xl font-bold mb-2">2</div>
                <h3 className="text-white font-semibold mb-2">Fahrzeug auswählen</h3>
                <p className="text-gray-400 text-sm">Sehen Sie verfügbare Fahrzeuge mit Preisen</p>
              </div>
              <div className="p-6 bg-black border border-gold/10 rounded-lg">
                <div className="text-gold text-2xl font-bold mb-2">3</div>
                <h3 className="text-white font-semibold mb-2">Anfrage senden</h3>
                <p className="text-gray-400 text-sm">Wir kontaktieren Sie für die Buchung</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
    </>
  )
}
