'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Here you would typically send to your newsletter service
    console.log('Newsletter signup:', email)

    setStatus('success')
    setEmail('')

    // Reset status after 3 seconds
    setTimeout(() => {
      setStatus('idle')
    }, 3000)
  }

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-emerald-900/20 via-black to-black border-y border-emerald-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <div className="inline-block p-2 sm:p-3 bg-emerald-500/10 rounded-full mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 sm:mb-4 px-4">
            Bleiben Sie auf dem <span className="text-emerald-400">Laufenden</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Erhalten Sie exklusive Angebote, Neuigkeiten über unsere neuesten Fahrzeuge und
            spezielle VIP-Rabatte direkt in Ihr Postfach.
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-md mx-auto p-4 sm:p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-emerald-400">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="font-semibold text-sm sm:text-base">Erfolgreich angemeldet! Prüfen Sie Ihre E-Mail.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ihre E-Mail-Adresse"
                required
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all uppercase tracking-wider text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="hidden sm:inline">Wird gesendet...</span>
                    <span className="sm:hidden">Senden...</span>
                  </span>
                ) : (
                  'Anmelden'
                )}
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3 sm:mt-4 px-2">
              Mit der Anmeldung stimmen Sie unserer Datenschutzerklärung zu.
              Sie können sich jederzeit abmelden.
            </p>
          </form>
        )}

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {[
            {
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              ),
              title: 'Exklusive Angebote',
              description: 'Früher Zugang zu Sonderaktionen'
            },
            {
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Neue Fahrzeuge',
              description: 'Erfahren Sie zuerst von neuen Modellen'
            },
            {
              icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'VIP-Rabatte',
              description: 'Spezielle Konditionen für Abonnenten'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mb-2 sm:mb-3">
                {benefit.icon}
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{benefit.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
