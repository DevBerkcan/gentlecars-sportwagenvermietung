import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  noindex?: boolean
  structuredData?: object
}

export default function SEO({
  title = 'GentleCars - Premium Sportwagenvermietung | Porsche, Ferrari, Lamborghini',
  description = 'Mieten Sie exklusive Sportwagen und Supersportwagen bei GentleCars. Porsche 911, Ferrari F8, Lamborghini Huracán und mehr. Premium Service, transparente Preise, 24/7 Support.',
  keywords = [
    'Sportwagen mieten',
    'Supersportwagen Vermietung',
    'Porsche mieten',
    'Ferrari mieten',
    'Lamborghini mieten',
    'Premium Autovermietung',
    'Luxusauto mieten Deutschland',
    'Sportwagen Erlebnis',
    'GT3 mieten',
    'McLaren mieten'
  ],
  ogImage = 'https://gentlecars.de/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  structuredData
}: SEOProps) {
  const siteUrl = 'https://gentlecars.de'
  const fullTitle = title.includes('GentleCars') ? title : `${title} | GentleCars`

  // Default Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'GentleCars',
    description: 'Premium Sportwagenvermietung in Deutschland',
    url: siteUrl,
    logo: `${siteUrl}/logo-gold.png`,
    image: ogImage,
    telephone: '+49-123-456-789',
    email: 'info@gentlecars.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 123',
      addressLocality: 'Essen',
      postalCode: '45127',
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.4556',
      longitude: '7.0116'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/gentlecars',
      'https://www.instagram.com/gentlecars',
      'https://www.linkedin.com/company/gentlecars'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1'
    },
    priceRange: '€€€€'
  }

  const schemaData = structuredData || organizationSchema

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="GentleCars" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl || siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="GentleCars" />
      <meta name="language" content="DE" />
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Essen" />

      {/* Structured Data / Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>
  )
}
