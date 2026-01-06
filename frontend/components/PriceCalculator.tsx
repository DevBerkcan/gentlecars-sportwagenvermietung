'use client'

import { useState } from 'react'

const carCategories = [
  { id: 'sport', name: 'Sportwagen', basePrice: 299 },
  { id: 'luxury', name: 'Luxus-Limousine', basePrice: 199 },
  { id: 'suv', name: 'Premium SUV', basePrice: 249 },
  { id: 'supercar', name: 'Supercar', basePrice: 599 },
]

const extras = [
  { id: 'insurance_reduce', name: 'Selbstbeteiligung reduzieren (1000€)', price: 49 },
  { id: 'insurance_zero', name: 'Selbstbeteiligung auf 0€', price: 99 },
  { id: 'km_unlimited', name: 'Unbegrenzte Kilometer', price: 79 },
  { id: 'additional_driver', name: 'Zusatzfahrer', price: 29 },
  { id: 'delivery', name: 'Lieferung & Abholung', price: 149 },
  { id: 'gps', name: 'GPS Navigation', price: 15 },
]

export default function PriceCalculator() {
  const [category, setCategory] = useState(carCategories[0].id)
  const [days, setDays] = useState(3)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])

  const selectedCategory = carCategories.find(c => c.id === category)!

  const baseTotal = selectedCategory.basePrice * days
  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const extra = extras.find(e => e.id === extraId)
    return sum + (extra ? extra.price * days : 0)
  }, 0)

  const subtotal = baseTotal + extrasTotal
  const tax = subtotal * 0.19 // 19% MwSt
  const total = subtotal + tax

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    )
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 px-4">
            <span className="text-emerald-400">Preisrechner</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Berechnen Sie die Kosten für Ihre Traummiete. Alle Preise verstehen sich inklusive Vollkasko-Versicherung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Car Category */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-4 sm:p-6">
              <label className="block text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                1. Fahrzeugkategorie wählen
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {carCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-left ${
                      category === cat.id
                        ? 'border-emerald-400 bg-emerald-400/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="font-semibold text-white mb-1 text-sm sm:text-base">{cat.name}</div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      ab {cat.basePrice}€ <span className="text-xs">/Tag</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-4 sm:p-6">
              <label className="block text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                2. Mietdauer
              </label>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full sm:flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-400"
                  />
                  <div className="text-white font-bold text-2xl min-w-[80px] text-left sm:text-right">
                    {days} {days === 1 ? 'Tag' : 'Tage'}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1 Tag</span>
                  <span>30 Tage</span>
                </div>
              </div>
            </div>

            {/* Extras */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-4 sm:p-6">
              <label className="block text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                3. Extras hinzufügen (optional)
              </label>
              <div className="space-y-2">
                {extras.map((extra) => (
                  <label
                    key={extra.id}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(extra.id)}
                        onChange={() => toggleExtra(extra.id)}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded border-gray-600 text-emerald-500 focus:ring-emerald-500 flex-shrink-0"
                      />
                      <span className="text-white text-xs sm:text-sm">{extra.name}</span>
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm flex-shrink-0">
                      +{extra.price}€<span className="text-xs">/Tag</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-400/20 rounded-xl p-4 sm:p-6 lg:sticky lg:top-24">
              <h3 className="text-white font-serif text-xl sm:text-2xl mb-4 sm:mb-6">Zusammenfassung</h3>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-sm sm:text-base">
                <div className="flex justify-between text-gray-300">
                  <span>{selectedCategory.name}</span>
                  <span>{selectedCategory.basePrice}€ × {days}</span>
                </div>
                <div className="flex justify-between font-semibold text-white">
                  <span>Grundpreis</span>
                  <span>{baseTotal.toFixed(2)}€</span>
                </div>

                {selectedExtras.length > 0 && (
                  <>
                    <div className="border-t border-white/10 pt-3 space-y-2">
                      {selectedExtras.map((extraId) => {
                        const extra = extras.find(e => e.id === extraId)!
                        return (
                          <div key={extraId} className="flex justify-between text-sm text-gray-400">
                            <span>{extra.name}</span>
                            <span>{(extra.price * days).toFixed(2)}€</span>
                          </div>
                        )
                      })}
                    </div>
                    <div className="flex justify-between font-semibold text-white">
                      <span>Extras gesamt</span>
                      <span>{extrasTotal.toFixed(2)}€</span>
                    </div>
                  </>
                )}

                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Zwischensumme</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-gray-400 text-sm">
                    <span>MwSt. (19%)</span>
                    <span>{tax.toFixed(2)}€</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-emerald-400/30 pt-3 sm:pt-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-white font-semibold text-base sm:text-lg">Gesamtpreis</span>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
                      {total.toFixed(2)}€
                    </div>
                    <div className="text-xs text-gray-500">
                      für {days} {days === 1 ? 'Tag' : 'Tage'}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-all uppercase tracking-wider text-sm sm:text-base">
                Jetzt anfragen
              </button>

              <p className="text-gray-500 text-xs text-center mt-3 sm:mt-4 px-2">
                * Unverbindliche Preisschätzung. Finale Preise können variieren.
              </p>

              {/* Info Box */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div className="text-xs text-gray-400">
                    <p className="font-semibold text-white mb-1">Inklusive:</p>
                    <ul className="space-y-1">
                      <li>• Vollkasko-Versicherung</li>
                      <li>• 200 km/Tag Freikilometer</li>
                      <li>• 24/7 Notfall-Hotline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
