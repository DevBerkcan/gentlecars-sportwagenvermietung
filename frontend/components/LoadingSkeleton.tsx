export interface LoadingSkeletonProps {
  type?: 'card' | 'text' | 'avatar' | 'image' | 'list' | 'table'
  count?: number
  className?: string
}

// Single Line Skeleton
export function SkeletonLine({ className = '', width = 'w-full' }: { className?: string; width?: string }) {
  return (
    <div className={`h-4 ${width} bg-gray-800 rounded animate-pulse ${className}`} />
  )
}

// Avatar Skeleton
export function SkeletonAvatar({ size = 'w-12 h-12', className = '' }: { size?: string; className?: string }) {
  return (
    <div className={`${size} bg-gray-800 rounded-full animate-pulse ${className}`} />
  )
}

// Image Skeleton
export function SkeletonImage({ aspectRatio = 'aspect-video', className = '' }: { aspectRatio?: string; className?: string }) {
  return (
    <div className={`${aspectRatio} w-full bg-gray-800 rounded-lg animate-pulse ${className}`} />
  )
}

// Car Card Skeleton
export function SkeletonCarCard() {
  return (
    <div className="bg-gray-900 border border-white/10 rounded-lg overflow-hidden">
      {/* Image */}
      <SkeletonImage aspectRatio="aspect-[4/3]" />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <SkeletonLine width="w-3/4" className="mb-4" />

        {/* Subtitle */}
        <SkeletonLine width="w-1/2" className="mb-6 h-3" />

        {/* Specs */}
        <div className="flex gap-4 mb-6">
          <SkeletonLine width="w-16" className="h-3" />
          <SkeletonLine width="w-16" className="h-3" />
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <SkeletonLine width="w-20" className="h-6" />
          <SkeletonLine width="w-24" className="h-3" />
        </div>
      </div>
    </div>
  )
}

// Blog Card Skeleton
export function SkeletonBlogCard() {
  return (
    <div className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden">
      {/* Image */}
      <SkeletonImage aspectRatio="aspect-[16/9]" />

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex gap-3 mb-3">
          <SkeletonLine width="w-20" className="h-3" />
          <SkeletonLine width="w-16" className="h-3" />
        </div>

        {/* Title */}
        <SkeletonLine width="w-full" className="mb-2" />
        <SkeletonLine width="w-5/6" className="mb-4" />

        {/* Excerpt */}
        <SkeletonLine width="w-full" className="mb-1 h-3" />
        <SkeletonLine width="w-4/5" className="mb-4 h-3" />

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <SkeletonAvatar size="w-8 h-8" />
          <SkeletonLine width="w-24" className="h-3" />
        </div>
      </div>
    </div>
  )
}

// Testimonial Card Skeleton
export function SkeletonTestimonial() {
  return (
    <div className="bg-gray-900 border border-white/10 rounded-xl p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-800 rounded animate-pulse" />
        ))}
      </div>

      {/* Text */}
      <SkeletonLine width="w-full" className="mb-2 h-3" />
      <SkeletonLine width="w-full" className="mb-2 h-3" />
      <SkeletonLine width="w-3/4" className="mb-6 h-3" />

      {/* Car Info */}
      <div className="mb-6 p-3 bg-black/50 rounded-lg">
        <SkeletonLine width="w-32" className="h-3" />
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <SkeletonAvatar />
        <div className="flex-1">
          <SkeletonLine width="w-32" className="mb-2 h-3" />
          <SkeletonLine width="w-24" className="h-3" />
        </div>
      </div>
    </div>
  )
}

// List Skeleton
export function SkeletonList({ count = 3, spacing = 'space-y-4' }: { count?: number; spacing?: string }) {
  return (
    <div className={spacing}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <SkeletonAvatar />
          <div className="flex-1 space-y-2">
            <SkeletonLine width="w-1/3" />
            <SkeletonLine width="w-1/2" className="h-3" />
          </div>
        </div>
      ))}
    </div>
  )
}

// Table Row Skeleton
export function SkeletonTableRow({ columns = 4 }: { columns?: number }) {
  return (
    <tr className="border-b border-white/10">
      {[...Array(columns)].map((_, i) => (
        <td key={i} className="p-4">
          <SkeletonLine />
        </td>
      ))}
    </tr>
  )
}

// Table Skeleton
export function SkeletonTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-black/50">
          <tr>
            {[...Array(columns)].map((_, i) => (
              <th key={i} className="p-4">
                <SkeletonLine />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rows)].map((_, i) => (
            <SkeletonTableRow key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Page Loading (Full Page Skeleton)
export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Skeleton */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <SkeletonLine width="w-64" className="h-12 mx-auto mb-4" />
          <SkeletonLine width="w-96" className="h-4 mx-auto" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCarCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main LoadingSkeleton Component
export default function LoadingSkeleton({ type = 'card', count = 1, className = '' }: LoadingSkeletonProps) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return <SkeletonCarCard />
      case 'text':
        return <SkeletonLine className={className} />
      case 'avatar':
        return <SkeletonAvatar className={className} />
      case 'image':
        return <SkeletonImage className={className} />
      case 'list':
        return <SkeletonList count={count} />
      case 'table':
        return <SkeletonTable rows={count} />
      default:
        return <SkeletonCarCard />
    }
  }

  if (count > 1 && type !== 'list' && type !== 'table') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {[...Array(count)].map((_, i) => (
          <div key={i}>{renderSkeleton()}</div>
        ))}
      </div>
    )
  }

  return <div className={className}>{renderSkeleton()}</div>
}
