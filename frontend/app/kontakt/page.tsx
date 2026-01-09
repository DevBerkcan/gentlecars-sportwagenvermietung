'use client'

import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'
import SEO from '@/components/SEO'
import { useState } from 'react'
import Link from 'next/link'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would typically send to your backend
    console.log('Form submitted:', formData)

    setSubmitStatus('success')
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Allgemeine Anfrage',
        message: '',
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <SEO
        title="Kontakt - GentleCars Premium Sportwagenvermietung"
        description="Kontaktieren Sie GentleCars für Ihre Sportwagen-Vermietung. Persönliche Beratung, schnelle Antworten. Tel, E-Mail oder direkt vor Ort in Essen."
        canonicalUrl="https://gentlecars.de/kontakt"
        keywords={['GentleCars Kontakt', 'Sportwagen mieten Anfrage', 'Beratung Luxusautos', 'Kontaktformular']}
      />
      <main className="min-h-screen bg-black">
        <Navigation />
        <ContactButtons />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
              Kontaktieren Sie <span className="text-emerald-400">uns</span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Haben Sie Fragen zu unseren Fahrzeugen oder möchten Sie eine Beratung?
              Wir sind für Sie da!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-serif text-white mb-6">Senden Sie uns eine Nachricht</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg">
                  <p className="text-emerald-400 text-sm">
                    ✓ Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-semibold mb-2">
                    Telefon (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                    placeholder="+49 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-semibold mb-2">
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-emerald-400 focus:outline-none transition-colors"
                  >
                    <option>Allgemeine Anfrage</option>
                    <option>Buchungsanfrage</option>
                    <option>Verfügbarkeit prüfen</option>
                    <option>Preisanfrage</option>
                    <option>Beschwerde</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                <p className="text-gray-500 text-xs">
                  * Pflichtfelder. Mit dem Absenden stimmen Sie unserer{' '}
                  <Link href="/datenschutz" className="text-emerald-400 hover:underline">
                    Datenschutzerklärung
                  </Link>{' '}
                  zu.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-serif text-white mb-6">Kontaktinformationen</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Telefon</h4>
                      <p className="text-gray-400">+49 123 456 789</p>
                      <p className="text-gray-500 text-sm mt-1">Mo-Fr: 9:00 - 18:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">E-Mail</h4>
                      <p className="text-gray-400">info@gentlecars.de</p>
                      <p className="text-gray-500 text-sm mt-1">Antwort innerhalb von 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Adresse</h4>
                      <p className="text-gray-400">
                        Musterstraße 123
                        <br />
                        45127 Essen
                        <br />
                        Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Öffnungszeiten</h4>
                      <div className="text-gray-400 text-sm space-y-1">
                        <p>Montag - Freitag: 9:00 - 18:00</p>
                        <p>Samstag: 10:00 - 16:00</p>
                        <p>Sonntag: Nach Vereinbarung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">Folgen Sie uns</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400 rounded-lg flex items-center justify-center transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-400/20 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">Schnellzugriff</h3>
                <div className="space-y-3">
                  <Link
                    href="/verfuegbarkeit"
                    className="block text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    → Verfügbarkeit prüfen
                  </Link>
                  <Link href="/galerie" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                    → Unsere Fahrzeuge
                  </Link>
                  <Link href="#faq" className="block text-emerald-400 hover:text-emerald-300 transition-colors">
                    → Häufige Fragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
