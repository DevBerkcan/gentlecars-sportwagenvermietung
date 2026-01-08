'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  origin?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 600,
  distance = 30,
  origin = 'bottom',
  className = ''
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('is-visible')
            }, delay)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay])

  const getTransformOrigin = () => {
    switch (origin) {
      case 'top':
        return `translateY(-${distance}px)`
      case 'bottom':
        return `translateY(${distance}px)`
      case 'left':
        return `translateX(-${distance}px)`
      case 'right':
        return `translateX(${distance}px)`
      default:
        return `translateY(${distance}px)`
    }
  }

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{
        opacity: 0,
        transform: getTransformOrigin(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
      <style jsx>{`
        .scroll-reveal.is-visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
      `}</style>
    </div>
  )
}
