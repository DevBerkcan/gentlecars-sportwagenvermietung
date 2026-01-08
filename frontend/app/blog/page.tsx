'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import ContactButtons from '@/components/ContactButtons'
import SocialShare from '@/components/SocialShare'
import SEO from '@/components/SEO'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'porsche-911-gt3-testfahrt',
    title: 'Porsche 911 GT3: Eine Testfahrt der Extraklasse',
    excerpt: 'Unsere Erfahrungen mit dem ikonischen Sportwagen auf der Nordschleife und warum er zu unseren meistgebuchten Fahrzeugen gehört.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
    category: 'Fahrzeugtests',
    author: {
      name: 'Alexander Müller',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100'
    },
    date: '15. Dezember 2025',
    readTime: '5 Min',
    featured: true
  },
  {
    id: 2,
    slug: 'tipps-supersportwagen-mieten',
    title: '10 Tipps: Das sollten Sie beim Mieten eines Supersportwagens beachten',
    excerpt: 'Von der Versicherung bis zur perfekten Route – unser umfassender Guide für Ihr erstes Mal im Traum-Sportwagen.',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200',
    category: 'Ratgeber',
    author: {
      name: 'Sarah Schmidt',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100'
    },
    date: '10. Dezember 2025',
    readTime: '8 Min',
    featured: true
  },
  {
    id: 3,
    slug: 'neue-fahrzeuge-2026',
    title: 'Neu in unserer Flotte: Diese Supersportwagen erwarten Sie 2026',
    excerpt: 'Exklusiver Einblick in unsere kommenden Highlights – vom Ferrari F8 Spider bis zum McLaren 765LT.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200',
    category: 'News',
    author: {
      name: 'Michael Weber',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    },
    date: '5. Dezember 2025',
    readTime: '6 Min',
    featured: false
  },
  {
    id: 4,
    slug: 'beste-routen-deutschland',
    title: 'Die 5 schönsten Sportwagen-Routen in Deutschland',
    excerpt: 'Von der Schwarzwald-Hochstraße bis zur Romantischen Straße – entdecken Sie die besten Strecken für Ihr Fahrerlebnis.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200',
    category: 'Routen & Reisen',
    author: {
      name: 'Alexander Müller',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100'
    },
    date: '1. Dezember 2025',
    readTime: '10 Min',
    featured: false
  },
  {
    id: 5,
    slug: 'versicherung-sportwagen-erklaert',
    title: 'Versicherung bei Sportwagen-Vermietung: Das müssen Sie wissen',
    excerpt: 'Vollkasko, Selbstbeteiligung, Zusatzschutz – wir erklären alle wichtigen Versicherungsdetails verständlich.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
    category: 'Ratgeber',
    author: {
      name: 'Sarah Schmidt',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100'
    },
    date: '25. November 2025',
    readTime: '7 Min',
    featured: false
  },
  {
    id: 6,
    slug: 'elektro-sportwagen-trend',
    title: 'Elektro-Sportwagen: Die Zukunft des Performance-Fahrens',
    excerpt: 'Porsche Taycan, Audi e-tron GT & Co. – warum elektrische Supersportwagen die Branche revolutionieren.',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
    category: 'Trends',
    author: {
      name: 'Michael Weber',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    },
    date: '20. November 2025',
    readTime: '9 Min',
    featured: false
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <SEO
        title="GentleCars Blog - News & Ratgeber zu Premium-Sportwagen"
        description="Entdecken Sie spannende Artikel über Supersportwagen, Fahrzeugtests, Ratgeber und die neuesten Trends in der Welt exklusiver Sportwagen."
        canonicalUrl="https://gentlecars.de/blog"
        keywords={['Sportwagen Blog', 'Supersportwagen News', 'Fahrzeugtests', 'Sportwagen Ratgeber', 'Luxusauto Tipps']}
      />
      <main className="min-h-screen bg-black">
        <Navigation />
        <ContactButtons />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 sm:mb-6">
            GentleCars <span className="text-gold">Blog</span>
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            News, Fahrzeugtests, Ratgeber und alles rund um exklusive Supersportwagen
          </p>
          <div className="flex justify-center">
            <SocialShare
              title="GentleCars Blog - News & Ratgeber zu Supersportwagen"
              description="Entdecken Sie spannende Artikel über Premium-Sportwagen"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif text-white">Featured</h2>
              <div className="h-px flex-1 ml-6 bg-gradient-to-r from-gold/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-black border border-gold/20 rounded-xl overflow-hidden hover:border-gold transition-all hover:shadow-xl hover:shadow-gold/10">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-black text-xs px-3 py-1.5 rounded-full font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm">
                        <span className="text-gold font-semibold">{post.category}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">{post.date}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">{post.readTime} Lesezeit</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-semibold">{post.author.name}</div>
                        </div>
                        <svg className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-black'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-white/10 hover:border-gold/50'
                }`}
              >
                {category === 'all' ? 'Alle Artikel' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {regularPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Keine Artikel in dieser Kategorie gefunden.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-gray-900 border border-white/20 rounded-xl overflow-hidden hover:border-gold transition-all hover:shadow-xl hover:shadow-gold/10 h-full flex flex-col">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/80 backdrop-blur-sm text-gold text-xs px-3 py-1.5 rounded-full font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} Lesezeit</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors line-clamp-2 flex-1">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-white text-xs font-semibold">{post.author.name}</span>
                        </div>
                        <svg className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-gold/5 via-black to-black border-y border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 bg-gold/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            Verpassen Sie keine <span className="text-gold">Neuigkeiten</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Artikel, Angebote und News direkt in Ihr Postfach
          </p>
          <Link
            href="/#newsletter"
            className="inline-block px-8 sm:px-12 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all uppercase tracking-wider text-sm sm:text-base shadow-2xl hover:shadow-gold/50 hover:scale-105"
          >
            Jetzt anmelden
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}
