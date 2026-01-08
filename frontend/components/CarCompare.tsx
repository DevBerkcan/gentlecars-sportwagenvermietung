'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Car {
  id: number
  name: string
  brand: string
  model: string
  image: string
  price: number
  specs: {
    power: string
    acceleration: string
    topSpeed: string
    transmission: string
    seats: number
    fuelType: string
  }
}

// Beispiel-Fahrzeugdaten
const availableCars: Car[] = [
  {
    id: 1,
    name: 'Porsche 911 GT3',
    brand: 'Porsche',
    model: '911 GT3',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400',
    price: 499,
    specs: {
      power: '510 PS',
      acceleration: '3.4s (0-100)',
      topSpeed: '320 km/h',
      transmission: '7-Gang PDK',
      seats: 2,
      fuelType: 'Benzin'
    }
  },
  {
    id: 2,
    name: 'Ferrari F8 Tributo',
    brand: 'Ferrari',
    model: 'F8 Tributo',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
    price: 899,
    specs: {
      power: '720 PS',
      acceleration: '2.9s (0-100)',
      topSpeed: '340 km/h',
      transmission: '7-Gang Doppelkupplung',
      seats: 2,
      fuelType: 'Benzin'
    }
  },
  {
    id: 3,
    name: 'Lamborghini Huracán',
    brand: 'Lamborghini',
    model: 'Huracán',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400',
    price: 799,
    specs: {
      power: '640 PS',
      acceleration: '2.9s (0-100)',
      topSpeed: '325 km/h',
      transmission: '7-Gang Doppelkupplung',
      seats: 2,
      fuelType: 'Benzin'
    }
  },
  {
    id: 4,
    name: 'McLaren 720S',
    brand: 'McLaren',
    model: '720S',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400',
    price: 999,
    specs: {
      power: '720 PS',
      acceleration: '2.8s (0-100)',
      topSpeed: '341 km/h',
      transmission: '7-Gang Doppelkupplung',
      seats: 2,
      fuelType: 'Benzin'
    }
  },
  {
    id: 5,
    name: 'Audi R8 V10',
    brand: 'Audi',
    model: 'R8 V10',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
    price: 699,
    specs: {
      power: '620 PS',
      acceleration: '3.1s (0-100)',
      topSpeed: '331 km/h',
      transmission: '7-Gang S tronic',
      seats: 2,
      fuelType: 'Benzin'
    }
  }
]

export default function CarCompare() {
  const [selectedCars, setSelectedCars] = useState<(Car | null)[]>([null, null, null])
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectCar = (index: number, car: Car | null) => {
    const newSelection = [...selectedCars]
    newSelection[index] = car
    setSelectedCars(newSelection)
  }

  const handleRemoveCar = (index: number) => {
    const newSelection = [...selectedCars]
    newSelection[index] = null
    setSelectedCars(newSelection)
  }

  const comparisonFeatures = [
    { key: 'price', label: 'Preis pro Tag', format: (value: number) => `${value}€` },
    { key: 'power', label: 'Leistung', path: 'specs.power' },
    { key: 'acceleration', label: 'Beschleunigung', path: 'specs.acceleration' },
    { key: 'topSpeed', label: 'Höchstgeschwindigkeit', path: 'specs.topSpeed' },
    { key: 'transmission', label: 'Getriebe', path: 'specs.transmission' },
    { key: 'seats', label: 'Sitzplätze', path: 'specs.seats' },
    { key: 'fuelType', label: 'Kraftstoff', path: 'specs.fuelType' }
  ]

  const getValue = (car: Car | null, path: string) => {
    if (!car) return '-'
    const keys = path.split('.')
    let value: any = car
    for (const key of keys) {
      value = value?.[key]
    }
    return value || '-'
  }

  const hasComparison = selectedCars.some(car => car !== null)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Compare Button */}
      {hasComparison && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-6 py-4 bg-gold text-black font-bold rounded-lg shadow-2xl hover:bg-gold-light transition-all hover:scale-105"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span>Vergleichen ({selectedCars.filter(c => c !== null).length})</span>
        </button>
      )}

      {/* Comparison Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl sm:text-4xl font-serif text-white">
                  Fahrzeug-<span className="text-gold">Vergleich</span>
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-gray-900 border border-white/20 rounded-lg text-white hover:border-gold transition-all"
                  aria-label="Schließen"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Car Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {selectedCars.map((car, index) => (
                  <div key={index} className="bg-gray-900 border border-gold/20 rounded-xl p-6">
                    {car ? (
                      <div>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                          <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => handleRemoveCar(index)}
                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                            aria-label="Entfernen"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <h3 className="text-lg font-serif text-white mb-1">{car.name}</h3>
                        <p className="text-sm text-gray-400">{car.brand} • {car.model}</p>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">Fahrzeug auswählen</p>
                        <select
                          onChange={(e) => {
                            const carId = parseInt(e.target.value)
                            const car = availableCars.find(c => c.id === carId)
                            if (car) handleSelectCar(index, car)
                          }}
                          className="w-full px-4 py-2 bg-black border border-gold/30 rounded-lg text-white text-sm focus:border-gold focus:outline-none"
                        >
                          <option value="">Wählen Sie ein Fahrzeug</option>
                          {availableCars
                            .filter(c => !selectedCars.some(sc => sc?.id === c.id))
                            .map(car => (
                              <option key={car.id} value={car.id}>
                                {car.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              {hasComparison && (
                <div className="bg-gray-900 border border-gold/20 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-black/50">
                      <tr>
                        <th className="text-left p-4 text-gold font-semibold">Merkmale</th>
                        {selectedCars.map((car, index) => (
                          <th key={index} className="text-center p-4 text-white font-serif">
                            {car ? car.name : '-'}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature, idx) => (
                        <tr key={feature.key} className={idx % 2 === 0 ? 'bg-black/20' : ''}>
                          <td className="p-4 text-gray-400 font-semibold">{feature.label}</td>
                          {selectedCars.map((car, index) => {
                            let value = getValue(car, feature.path || feature.key)
                            if (feature.format && car) {
                              value = feature.format(car[feature.key as keyof Car] as number)
                            }
                            return (
                              <td key={index} className="p-4 text-center text-white">
                                {value}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Actions */}
              {hasComparison && (
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setSelectedCars([null, null, null])}
                    className="px-8 py-4 bg-gray-900 border border-white/20 text-white font-semibold rounded-lg hover:border-gold transition-all uppercase tracking-wider"
                  >
                    Auswahl zurücksetzen
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider"
                  >
                    Schließen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
