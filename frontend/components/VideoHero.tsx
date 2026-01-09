'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface VideoHeroProps {
  videoUrl?: string
  posterImage?: string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  overlay?: boolean
  autoPlay?: boolean
}

export default function VideoHero({
  videoUrl = 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
  posterImage = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920',
  title = 'Erleben Sie',
  subtitle = 'Premium Sportwagen',
  ctaText = 'Fahrzeuge entdecken',
  ctaLink = '/galerie',
  secondaryCtaText = 'Verfügbarkeit prüfen',
  secondaryCtaLink = '/verfuegbarkeit',
  overlay = true,
  autoPlay = true
}: VideoHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [autoPlay])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback Image */}
        <div className="absolute inset-0 bg-black">
          <Image
            src={posterImage}
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Video */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={autoPlay}
          muted={isMuted}
          loop
          playsInline
          poster={posterImage}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto">
            <Image
              src="/logo-gold.png"
              alt="GentleCars"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white mb-4 sm:mb-6 animate-fade-in animation-delay-200">
            {title}
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4 sm:mb-6 animate-fade-in animation-delay-300" />
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gold mb-6 sm:mb-8 animate-fade-in animation-delay-400">
            {subtitle}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in animation-delay-500">
            Exklusive Supersportwagen für unvergessliche Momente. <br className="hidden sm:block" />
            Buchen Sie jetzt Ihr Traum-Fahrzeug.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in animation-delay-600">
          <Link
            href={ctaLink}
            className="group px-8 sm:px-12 py-4 sm:py-5 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider text-sm sm:text-base shadow-2xl hover:shadow-gold/50 hover:scale-105 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              {ctaText}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link
            href={secondaryCtaLink}
            className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all uppercase tracking-wider text-sm sm:text-base w-full sm:w-auto"
          >
            {secondaryCtaText}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-wider">Scrollen</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 bg-black/50 hover:bg-black/70 border border-white/20 hover:border-gold/50 rounded-full transition-all backdrop-blur-sm"
        aria-label={isMuted ? 'Ton einschalten' : 'Ton ausschalten'}
      >
        {isMuted ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}
