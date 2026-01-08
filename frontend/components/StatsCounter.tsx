'use client'

import NumberCounter from './animations/NumberCounter'
import ScrollReveal from './animations/ScrollReveal'

export default function StatsCounter() {
  const stats = [
    { number: 50, label: "Premium Fahrzeuge", suffix: "+" },
    { number: 5000, label: "Zufriedene Kunden", suffix: "+" },
    { number: 15, label: "Jahre Erfahrung", suffix: "+" },
    { number: 24, label: "Kundenservice", suffix: "/7" }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} origin="bottom">
              <div className="text-center py-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-serif">
                  <NumberCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider px-2">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
