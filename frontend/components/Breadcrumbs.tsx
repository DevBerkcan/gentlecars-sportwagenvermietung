'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

interface BreadcrumbItem {
  label: string
  href: string
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

// German translations for routes
const routeTranslations: Record<string, string> = {
  'galerie': 'Galerie',
  'blog': 'Blog',
  'verfuegbarkeit': 'Verfügbarkeit',
  'kontakt': 'Kontakt',
  'ueber-uns': 'Über uns',
  'cars': 'Fahrzeuge',
  'impressum': 'Impressum',
  'datenschutz': 'Datenschutz',
  'agb': 'AGB',
  'widerruf': 'Widerruf'
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generate breadcrumbs from pathname if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    let currentPath = ''
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      const label = routeTranslations[path] || path.charAt(0).toUpperCase() + path.slice(1)

      // Don't add if it's the last item (current page)
      if (index < paths.length - 1) {
        breadcrumbs.push({
          label,
          href: currentPath
        })
      } else {
        // Add current page without link
        breadcrumbs.push({
          label,
          href: currentPath
        })
      }
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateBreadcrumbs()

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null

  return (
    <nav aria-label="Breadcrumb" className={`py-4 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1

            return (
              <Fragment key={item.href}>
                <li className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-gold font-semibold" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
                {!isLast && (
                  <li aria-hidden="true">
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                )}
              </Fragment>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}

// Structured Data for SEO
export function BreadcrumbsStructuredData({ items }: { items?: BreadcrumbItem[] }) {
  const pathname = usePathname()

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const paths = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: 'https://gentlecars.de' }
    ]

    let currentPath = ''
    paths.forEach((path) => {
      currentPath += `/${path}`
      const label = routeTranslations[path] || path.charAt(0).toUpperCase() + path.slice(1)
      breadcrumbs.push({
        label,
        href: `https://gentlecars.de${currentPath}`
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateBreadcrumbs()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': item.href
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
