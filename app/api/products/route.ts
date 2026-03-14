import { NextResponse } from 'next/server'
import { getGHLProducts, mapGHLProductToSite } from '@/lib/ghl'
import { FALLBACK_PRODUCTS } from '@/lib/products'

export async function GET() {
  try {
    const ghlProducts = await getGHLProducts()

    if (ghlProducts.length > 0) {
      const siteProducts = ghlProducts.map(mapGHLProductToSite)
      return NextResponse.json(siteProducts, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      })
    }

    // Fallback to static products
    return NextResponse.json(FALLBACK_PRODUCTS, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch {
    return NextResponse.json(FALLBACK_PRODUCTS, { status: 200 })
  }
}
