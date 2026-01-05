const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000/api'

export interface Car {
  id: string
  slug: string
  name: string
  brand: string
  model: string
  year: number
  images: string[]
  specs: any
  pricing?: Array<{
    weekdayGroup: string
    dailyRateCents: number
    currency: string
  }>
}

export interface PriceQuote {
  totalCents: number
  currency: string
  breakdown: any
}

export interface BookingRequest {
  carId: string
  startUtc: string
  endUtc: string
  name: string
  email: string
  phone: string
  address?: string
}

export interface BookingResponse {
  bookingId: string
  status: string
  totalCents: number
  currency: string
  message: string
}

export async function getCars(): Promise<Car[]> {
  try {
    console.log('Fetching cars from:', `${API_BASE}/cars`)
    const res = await fetch(`${API_BASE}/cars`, { cache: 'no-store' })
    console.log('Response status:', res.status)

    if (!res.ok) {
      const errorText = await res.text()
      console.error('API Error:', errorText)
      throw new Error(`Failed to fetch cars: ${res.status} - ${errorText}`)
    }

    const data = await res.json()
    console.log('Cars loaded:', data.length)
    return data
  } catch (error) {
    console.error('getCars error:', error)
    throw error
  }
}

export async function getCarBySlug(slug: string): Promise<Car> {
  const res = await fetch(`${API_BASE}/cars/${slug}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Car not found')
  return res.json()
}

export async function checkAvailability(
  carId: string,
  from: string,
  to: string
): Promise<{ available: boolean }> {
  const res = await fetch(
    `${API_BASE}/availability?carId=${carId}&from=${from}&to=${to}`
  )
  if (!res.ok) throw new Error('Availability check failed')
  return res.json()
}

export async function getPriceQuote(payload: {
  carId: string
  startUtc: string
  endUtc: string
}): Promise<PriceQuote> {
  const res = await fetch(`${API_BASE}/price-quote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Price quote failed' }))
    throw new Error(error.message || 'Preis konnte nicht berechnet werden')
  }
  return res.json()
}

export async function createBooking(payload: BookingRequest): Promise<BookingResponse> {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: 'Booking failed' }))
    throw new Error(error.message || 'Reservierung fehlgeschlagen')
  }
  return res.json()
}
