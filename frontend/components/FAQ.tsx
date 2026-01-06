'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Welche Voraussetzungen muss ich für die Anmietung erfüllen?',
    answer: 'Sie müssen mindestens 25 Jahre alt sein, seit mindestens 3 Jahren einen gültigen Führerschein besitzen und eine Kreditkarte für die Kaution vorweisen können. Für bestimmte Fahrzeuge gelten höhere Anforderungen.',
  },
  {
    question: 'Wie hoch ist die Kaution?',
    answer: 'Die Kaution variiert je nach Fahrzeug zwischen 5.000€ und 15.000€. Sie wird bei der Fahrzeugübergabe auf Ihrer Kreditkarte geblockt und nach der ordnungsgemäßen Rückgabe wieder freigegeben.',
  },
  {
    question: 'Ist eine Vollkasko-Versicherung im Preis enthalten?',
    answer: 'Ja, alle unsere Fahrzeuge sind vollkaskoversichert. Die Selbstbeteiligung beträgt standardmäßig 3.000€. Sie können diese gegen einen Aufpreis auf 1.000€ oder 0€ reduzieren.',
  },
  {
    question: 'Kann ich das Fahrzeug deutschlandweit fahren?',
    answer: 'Ja, Sie können das Fahrzeug in ganz Deutschland fahren. Fahrten ins Ausland sind nach vorheriger Absprache und gegen Aufpreis möglich (innerhalb der EU).',
  },
  {
    question: 'Wie funktioniert die Buchung?',
    answer: 'Wählen Sie Ihr Wunschfahrzeug und den gewünschten Zeitraum aus. Nach der Online-Buchung erhalten Sie eine Bestätigung per E-Mail. Vor der Übergabe findet ein kurzes Beratungsgespräch statt.',
  },
  {
    question: 'Was ist bei der Rückgabe zu beachten?',
    answer: 'Das Fahrzeug sollte im gleichen Zustand wie bei der Übergabe zurückgegeben werden. Der Tank sollte zum gleichen Füllstand wie bei der Übergabe sein. Bei der Rückgabe findet eine gemeinsame Kontrolle statt.',
  },
  {
    question: 'Gibt es eine Kilometerbegrenzung?',
    answer: 'Die meisten Mietpakete beinhalten 200 km pro Tag. Zusätzliche Kilometer können für 0,50€ - 2,00€ je nach Fahrzeug hinzugebucht werden. Unbegrenzte Kilometer sind gegen Aufpreis verfügbar.',
  },
  {
    question: 'Kann ich die Buchung stornieren?',
    answer: 'Kostenlose Stornierung bis 7 Tage vor Mietbeginn. Bei Stornierung 3-7 Tage vorher: 50% der Mietkosten. Bei kurzfristigerer Stornierung: 100% der Mietkosten. Siehe unsere AGB für Details.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 px-4">
            Häufig gestellte <span className="text-emerald-400">Fragen</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um die Anmietung unserer Sportwagen
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 border border-white/10 rounded-lg overflow-hidden hover:border-emerald-400/30 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-semibold pr-3 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-400 leading-relaxed text-sm sm:text-base border-t border-white/5 pt-3 sm:pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-gray-400 mb-4 text-sm sm:text-base">Haben Sie weitere Fragen?</p>
          <a
            href="/kontakt"
            className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all uppercase tracking-wider text-xs sm:text-sm"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </section>
  )
}
