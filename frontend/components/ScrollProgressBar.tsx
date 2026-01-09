'use client'

import { useState, useEffect } from 'react'

interface ScrollProgressBarProps {
  color?: string
  height?: string
  showPercentage?: boolean
  position?: 'top' | 'bottom'
}

export default function ScrollProgressBar({
  color = 'bg-gold',
  height = 'h-1',
  showPercentage = false,
  position = 'top'
}: ScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate scroll percentage
      const totalScrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / totalScrollableHeight) * 100

      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const positionClasses = position === 'top' ? 'top-0' : 'bottom-0'

  return (
    <>
      {/* Progress Bar */}
      <div className={`fixed ${positionClasses} left-0 right-0 z-50 ${height} bg-gray-900/50 backdrop-blur-sm`}>
        <div
          className={`${height} ${color} transition-all duration-150 ease-out shadow-lg shadow-gold/50`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Percentage Display (Optional) */}
      {showPercentage && scrollProgress > 0 && (
        <div className="fixed top-20 right-6 z-50 bg-black/80 backdrop-blur-sm border border-gold/30 rounded-lg px-3 py-2 shadow-xl">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-gold text-sm font-semibold">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      )}
    </>
  )
}
