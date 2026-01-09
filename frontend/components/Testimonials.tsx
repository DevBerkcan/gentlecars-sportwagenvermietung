'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  role: string
  company?: string
  image: string
  rating: number
  text: string
  car: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Thomas Schneider',
    role: 'Unternehmer',
    company: 'TechVision GmbH',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    rating: 5,
    text: 'Absolut erstklassiger Service! Die Porsche 911 GT3 war in perfektem Zustand und das gesamte Team war äußerst professionell. Ein unvergessliches Erlebnis!',
    car: 'Porsche 911 GT3',
    date: '2025-12-15'
  },
  {
    id: 2,
    name: 'Sarah Weber',
    role: 'Marketing Direktorin',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    rating: 5,
    text: 'Von der Buchung bis zur Rückgabe war alles perfekt organisiert. Der Lamborghini Huracán hat alle Erwartungen übertroffen. Definitiv eine Wiederholung wert!',
    car: 'Lamborghini Huracán',
    date: '2025-12-08'
  },
  {
    id: 3,
    name: 'Michael Hoffmann',
    role: 'Geschäftsführer',
    company: 'Hoffmann & Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    rating: 5,
    text: 'Transparente Preise, keine versteckten Kosten und ein herausragender Kundenservice. Die Ferrari F8 Tributo war ein Traum. Sehr empfehlenswert!',
    car: 'Ferrari F8 Tributo',
    date: '2025-11-28'
  },
  {
    id: 4,
    name: 'Julia Becker',
    role: 'Architektin',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 5,
    text: 'Als Frau fühlte ich mich hier sehr gut aufgehoben. Die Beratung war kompetent und freundlich. Der McLaren 720S war einfach spektakulär!',
    car: 'McLaren 720S',
    date: '2025-11-20'
  },
  {
    id: 5,
    name: 'Alexander Koch',
    role: 'Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
    text: 'Bereits zum dritten Mal bei GentleCars gebucht. Die Qualität der Fahrzeuge und der Service sind unübertroffen. Mein Go-to für besondere Anlässe!',
    car: 'Audi R8 V10',
    date: '2025-11-12'
  },
  {
    id: 6,
    name: 'Sabine Müller',
    role: 'Unternehmensberaterin',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
    rating: 5,
    text: 'Perfekt für meinen runden Geburtstag! Das Team hat sich um alles gekümmert. Die Mercedes-AMG GT R war der absolute Hammer. Danke für das unvergessliche Erlebnis!',
    car: 'Mercedes-AMG GT R',
    date: '2025-10-30'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
  }

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ]

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-3 bg-gold/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            Was unsere <span className="text-gold">Kunden sagen</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Über 5.000 zufriedene Kunden vertrauen auf unseren Service und unsere Premium-Fahrzeugflotte
          </p>
        </div>

        {/* Testimonials Grid (Desktop) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`bg-gray-900 border border-gold/20 rounded-xl p-8 transition-all duration-500 ${
                idx === 0 ? 'scale-105 border-gold shadow-2xl shadow-gold/20' : 'hover:border-gold/40'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Car Info */}
              <div className="mb-6 p-3 bg-black/50 rounded-lg border border-gold/10">
                <div className="flex items-center gap-2 text-gold text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{testimonial.car}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold truncate">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm truncate">{testimonial.role}</div>
                  {testimonial.company && (
                    <div className="text-gray-500 text-xs truncate">{testimonial.company}</div>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 text-gray-500 text-xs">
                {formatDate(testimonial.date)}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider (Mobile/Tablet) */}
        <div className="lg:hidden mb-8">
          <div className="bg-gray-900 border border-gold/20 rounded-xl p-6 sm:p-8">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Car Info */}
            <div className="mb-6 p-3 bg-black/50 rounded-lg border border-gold/10">
              <div className="flex items-center gap-2 text-gold text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{testimonials[currentIndex].car}</span>
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold truncate">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400 text-sm truncate">{testimonials[currentIndex].role}</div>
                {testimonials[currentIndex].company && (
                  <div className="text-gray-500 text-xs truncate">{testimonials[currentIndex].company}</div>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="mt-4 text-gray-500 text-xs">
              {formatDate(testimonials[currentIndex].date)}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">4.9/5.0</div>
              <div className="text-gray-400 text-sm">Google Bewertung</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">5,000+</div>
              <div className="text-gray-400 text-sm">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-400 text-sm">Weiterempfehlung</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gold mb-2">15+</div>
              <div className="text-gray-400 text-sm">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
