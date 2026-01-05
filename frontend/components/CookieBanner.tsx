'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a small delay
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
  }

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    }
    localStorage.setItem('cookieConsent', JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/95 backdrop-blur-lg border-t border-white/20 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">🍪 Cookie-Einstellungen</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                Notwendige Cookies sind für den Betrieb der Website erforderlich. Sie können
                auch optionale Cookies für Analytics und Marketing akzeptieren.{' '}
                <Link href="/datenschutz" className="text-emerald-400 hover:underline">
                  Mehr erfahren
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-sm uppercase tracking-wider whitespace-nowrap"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptNecessary}
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider whitespace-nowrap"
              >
                Nur Notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all text-sm uppercase tracking-wider whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">Cookie-Präferenzen</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-white font-semibold">Notwendige Cookies</h4>
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                      Erforderlich
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-5 h-5 text-emerald-500 bg-gray-700 border-gray-600 rounded cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-1 pr-4">
                  <h4 className="text-white font-semibold mb-2">Analytics Cookies</h4>
                  <p className="text-gray-400 text-sm">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren, um die Benutzererfahrung zu verbessern.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5 text-emerald-500 bg-gray-700 border-gray-600 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-1 pr-4">
                  <h4 className="text-white font-semibold mb-2">Marketing Cookies</h4>
                  <p className="text-gray-400 text-sm">
                    Werden verwendet, um relevante Werbung anzuzeigen und die Effektivität von Werbekampagnen zu messen.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-5 h-5 text-emerald-500 bg-gray-700 border-gray-600 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={acceptNecessary}
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider"
              >
                Nur Notwendige
              </button>
              <button
                onClick={savePreferences}
                className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all text-sm uppercase tracking-wider"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
