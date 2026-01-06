'use client'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'

interface CarDetail {
  id: number
  slug: string
  name: string
  brand: string
  model: string
  year: number
  description: string
  images: string[]
  specs: {
    power: string
    acceleration: string
    topSpeed: string
    transmission: string
    seats: number
    fuel: string
    drive: string
  }
  features: string[]
  pricing: {
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
  }
  available: boolean
}

export default function CarDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string

  const [car, setCar] = useState<CarDetail | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showBookingForm, setShowBookingForm] = useState(false)

  // Get dates from URL if coming from availability page
  const startDate = searchParams.get('start') || ''
  const endDate = searchParams.get('end') || ''

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    startDate: startDate,
    endDate: endDate,
    message: ''
  })

  useEffect(() => {
    // Dummy car data (in production, fetch from API)
    const dummyCarData: Record<string, CarDetail> = {
      'porsche-911-gt3': {
        id: 1,
        slug: 'porsche-911-gt3',
        name: 'Porsche 911 GT3',
        brand: 'Porsche',
        model: '911 GT3',
        year: 2024,
        description: 'Der Porsche 911 GT3 ist die perfekte Symbiose aus Rennstrecken-Performance und Straßenzulassung. Mit seinem 4.0-Liter-Sechszylinder-Boxermotor und 510 PS bietet er ein unvergleichliches Fahrerlebnis. Die präzise Lenkung, das reaktionsschnelle Fahrwerk und die beeindruckende Aerodynamik machen jeden Kilometer zu einem unvergesslichen Erlebnis.',
        images: [
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
          'https://images.unsplash.com/photo-1614162692292-7ac56d7f3c36?w=1200',
          'https://images.unsplash.com/photo-1611821064430-e76947c91489?w=1200'
        ],
        specs: {
          power: '510 PS',
          acceleration: '3.4s (0-100 km/h)',
          topSpeed: '320 km/h',
          transmission: '7-Gang PDK',
          seats: 2,
          fuel: 'Benzin',
          drive: 'Heckantrieb'
        },
        features: [
          'Vollkasko-Versicherung inklusive',
          'Adaptive Sportfahrwerk',
          'Sport Chrono Paket',
          'Keramik-Bremsanlage (PCCB)',
          'Alcantara-Sportlenkrad',
          'Sportwagen-Abgasanlage',
          'LED-Matrix-Scheinwerfer',
          'Premium-Soundsystem',
          'Klimaautomatik',
          'Rückfahrkamera'
        ],
        pricing: {
          monday: 399,
          tuesday: 399,
          wednesday: 399,
          thursday: 399,
          friday: 549,
          saturday: 649,
          sunday: 549
        },
        available: true
      },
      'ferrari-f8-tributo': {
        id: 2,
        slug: 'ferrari-f8-tributo',
        name: 'Ferrari F8 Tributo',
        brand: 'Ferrari',
        model: 'F8 Tributo',
        year: 2023,
        description: 'Der Ferrari F8 Tributo ist eine Hommage an den erfolgreichsten V8-Motor in der Ferrari-Geschichte. Mit 720 PS aus 3.9 Litern Hubraum beschleunigt dieser italienische Supersportwagen in atemberaubenden 2.9 Sekunden auf 100 km/h. Die perfekte Kombination aus Leistung, Design und italienischer Handwerkskunst.',
        images: [
          'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200',
          'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200',
          'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=1200'
        ],
        specs: {
          power: '720 PS',
          acceleration: '2.9s (0-100 km/h)',
          topSpeed: '340 km/h',
          transmission: '7-Gang Doppelkupplung',
          seats: 2,
          fuel: 'Benzin',
          drive: 'Heckantrieb'
        },
        features: [
          'Vollkasko-Versicherung inklusive',
          'Carbon-Keramik-Bremsanlage',
          'Magnetische Dämpfer (SCM-E)',
          'Side Slip Control (SSC)',
          'Ferrari Dynamic Enhancer',
          'Racing-Schalensitze',
          'Premium-Lederapusstattung',
          'Telemetrie-System',
          '20" Leichtmetallräder',
          'Bi-Xenon-Scheinwerfer'
        ],
        pricing: {
          monday: 799,
          tuesday: 799,
          wednesday: 799,
          thursday: 799,
          friday: 999,
          saturday: 1199,
          sunday: 999
        },
        available: false
      }
    }

    setCar(dummyCarData[slug] || null)
  }, [slug])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would send the form data to your backend
    console.log('Booking request:', formData)

    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.')
    setShowBookingForm(false)
  }

  const calculateTotalPrice = () => {
    if (!car || !formData.startDate || !formData.endDate) return 0

    const start = new Date(formData.startDate)
    const end = new Date(formData.endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

    let total = 0
    for (let i = 0; i < days; i++) {
      const currentDate = new Date(start)
      currentDate.setDate(start.getDate() + i)
      const dayOfWeek = currentDate.getDay()

      switch (dayOfWeek) {
        case 0: total += car.pricing.sunday; break
        case 1: total += car.pricing.monday; break
        case 2: total += car.pricing.tuesday; break
        case 3: total += car.pricing.wednesday; break
        case 4: total += car.pricing.thursday; break
        case 5: total += car.pricing.friday; break
        case 6: total += car.pricing.saturday; break
      }
    }

    return total
  }

  if (!car) {
    return (
      <main className="min-h-screen bg-black">
        <Navigation />
        <div className="pt-32 px-4 text-center">
          <h1 className="text-3xl text-white">Fahrzeug nicht gefunden</h1>
          <Link href="/" className="text-gold hover:underline mt-4 inline-block">
            Zurück zur Startseite
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <ContactButtons />

      {/* Hero Gallery */}
      <section className="pt-24 pb-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden mb-4">
            <img
              src={car.images[selectedImage]}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            {car.available && (
              <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Verfügbar
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {car.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden transition-all ${
                  selectedImage === index ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={image} alt={`${car.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Details */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">{car.name}</h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base mb-6">
                  <span>{car.brand}</span>
                  <span>•</span>
                  <span>{car.model}</span>
                  <span>•</span>
                  <span>{car.year}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{car.description}</p>
              </div>

              {/* Specifications */}
              <div className="bg-gray-900 border border-gold/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-serif text-white mb-6">Technische Daten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Leistung</div>
                    <div className="text-white text-xl font-semibold">{car.specs.power}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Beschleunigung</div>
                    <div className="text-white text-xl font-semibold">{car.specs.acceleration}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Höchstgeschwindigkeit</div>
                    <div className="text-white text-xl font-semibold">{car.specs.topSpeed}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Getriebe</div>
                    <div className="text-white text-xl font-semibold">{car.specs.transmission}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Sitzplätze</div>
                    <div className="text-white text-xl font-semibold">{car.specs.seats}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Kraftstoff</div>
                    <div className="text-white text-xl font-semibold">{car.specs.fuel}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Antrieb</div>
                    <div className="text-white text-xl font-semibold">{car.specs.drive}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-900 border border-gold/20 rounded-xl p-8">
                <h2 className="text-2xl font-serif text-white mb-6">Ausstattung & Leistungen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                {/* Pricing Card */}
                <div className="bg-gray-900 border border-gold/20 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-serif text-white mb-6">Preisstaffelung</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-black/50 rounded-lg">
                      <span className="text-gray-300">Montag - Donnerstag</span>
                      <span className="text-gold font-bold text-lg">{car.pricing.monday}€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/50 rounded-lg">
                      <span className="text-gray-300">Freitag</span>
                      <span className="text-gold font-bold text-lg">{car.pricing.friday}€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/50 rounded-lg">
                      <span className="text-gray-300">Samstag</span>
                      <span className="text-gold font-bold text-lg">{car.pricing.saturday}€</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-black/50 rounded-lg">
                      <span className="text-gray-300">Sonntag</span>
                      <span className="text-gold font-bold text-lg">{car.pricing.sunday}€</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold/10 mb-6">
                    <div className="text-gray-400 text-sm mb-1">Durchschnittspreis</div>
                    <div className="text-gold font-bold text-3xl">
                      {Math.round(Object.values(car.pricing).reduce((a, b) => a + b, 0) / 7)}€
                      <span className="text-lg">/Tag</span>
                    </div>
                  </div>

                  {car.available ? (
                    <button
                      onClick={() => setShowBookingForm(true)}
                      className="w-full px-6 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider shadow-xl"
                    >
                      Jetzt Anfragen
                    </button>
                  ) : (
                    <div className="w-full px-6 py-4 bg-red-500/20 border border-red-500/40 text-red-400 font-semibold rounded-lg text-center">
                      Aktuell nicht verfügbar
                    </div>
                  )}
                </div>

                {/* Info Box */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Wichtige Informationen
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Mindestalter: 25 Jahre</li>
                    <li>• Führerschein seit mind. 3 Jahren</li>
                    <li>• Kaution: 5.000€</li>
                    <li>• Freie Kilometer inklusive</li>
                    <li>• Vollkasko-Versicherung inklusive</li>
                    <li>• Lieferung möglich (+150€)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 border border-gold/20 rounded-2xl max-w-2xl w-full p-8 my-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif text-white">Buchungsanfrage</h2>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="bg-black/50 rounded-lg p-4 mb-6">
              <div className="text-white font-semibold mb-2">{car.name}</div>
              <div className="text-gray-400 text-sm">{car.brand} {car.model} • {car.year}</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-gold text-sm font-semibold mb-2">E-Mail *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold text-sm font-semibold mb-2">Telefon *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="+49 123 456789"
                  />
                </div>
                <div>
                  <label className="block text-gold text-sm font-semibold mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gold text-sm font-semibold mb-2">Startdatum *</label>
                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gold text-sm font-semibold mb-2">Enddatum *</label>
                  <input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    min={formData.startDate}
                    className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold text-sm font-semibold mb-2">Nachricht</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-gold/30 rounded-lg text-white focus:border-gold focus:outline-none resize-none"
                  placeholder="Besondere Wünsche oder Fragen..."
                />
              </div>

              {formData.startDate && formData.endDate && (
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Geschätzter Gesamtpreis:</span>
                    <span className="text-gold font-bold text-2xl">{calculateTotalPrice()}€</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    {Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24))} Tage
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 transition-all"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider"
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
