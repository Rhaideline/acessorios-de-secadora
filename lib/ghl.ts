import { GHLProduct, SiteProduct } from '@/types/product'

const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const GHL_API_KEY = process.env.GHL_API_KEY!
const GHL_LOCATION = process.env.GHL_LOCATION_ID!

const headers = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  'Content-Type': 'application/json',
  Version: '2021-07-28',
}

export async function getGHLProducts(): Promise<GHLProduct[]> {
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/products/?locationId=${GHL_LOCATION}`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) {
      console.error('GHL API error:', res.status, await res.text())
      return []
    }

    const data = await res.json()
    return data.products || []
  } catch (error) {
    console.error('Failed to fetch GHL products:', error)
    return []
  }
}

export async function getGHLProductById(id: string): Promise<GHLProduct | null> {
  try {
    const res = await fetch(
      `${GHL_BASE_URL}/products/${id}?locationId=${GHL_LOCATION}`,
      { headers }
    )

    if (!res.ok) return null
    return await res.json()
  } catch (error) {
    console.error('Failed to fetch GHL product:', error)
    return null
  }
}

export interface CreateProductInput {
  name: string
  description: string
  price: number
  compareAtPrice?: number
  tags: string[]
  images: { url: string; alt?: string }[]
  sku?: string
  slug?: string
}

export async function createGHLProduct(product: CreateProductInput): Promise<GHLProduct | null> {
  try {
    const res = await fetch(`${GHL_BASE_URL}/products/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION,
        ...product,
        currency: 'BRL',
        isActive: true,
      }),
    })

    if (!res.ok) {
      console.error('Failed to create product:', res.status, await res.text())
      return null
    }

    return await res.json()
  } catch (error) {
    console.error('Failed to create GHL product:', error)
    return null
  }
}

export async function updateGHLProduct(
  id: string,
  data: Partial<CreateProductInput>
): Promise<GHLProduct | null> {
  try {
    const res = await fetch(`${GHL_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION,
        ...data,
      }),
    })

    if (!res.ok) return null
    return await res.json()
  } catch (error) {
    console.error('Failed to update GHL product:', error)
    return null
  }
}

function getCategoryFromTags(tags: string[]): string {
  if (tags.some((t) => t.includes('lenco-secadora'))) return 'Lenços para Secadora'
  if (tags.some((t) => t.includes('bola-la') || t.includes('dryer-ball'))) return 'Bolas de Lã'
  if (tags.some((t) => t.includes('kit') || t.includes('combo'))) return 'Kits Completos'
  if (tags.some((t) => t.includes('sache') || t.includes('armario'))) return 'Sachês e Perfumadores'
  return 'Outros Acessórios'
}

export function mapGHLProductToSite(ghlProduct: GHLProduct): SiteProduct {
  const hasDiscount =
    ghlProduct.compareAtPrice && ghlProduct.compareAtPrice > ghlProduct.price
  const discount = hasDiscount
    ? Math.round(
        ((ghlProduct.compareAtPrice! - ghlProduct.price) /
          ghlProduct.compareAtPrice!) *
          100
      )
    : undefined

  return {
    id: ghlProduct.id,
    name: ghlProduct.name,
    slug: ghlProduct.slug || ghlProduct.id,
    description: ghlProduct.description,
    price: ghlProduct.price,
    compareAtPrice: ghlProduct.compareAtPrice,
    discount,
    images: ghlProduct.images.map((img) => ({
      url: img.url,
      alt: img.alt || ghlProduct.name,
    })),
    tags: ghlProduct.tags,
    sku: ghlProduct.sku,
    inventory: ghlProduct.inventory,
    isActive: ghlProduct.isActive,
    category: getCategoryFromTags(ghlProduct.tags),
    isBestseller: ghlProduct.tags.includes('bestseller'),
    isNew: ghlProduct.tags.includes('novo'),
    isOnSale: !!hasDiscount,
    createdAt: ghlProduct.createdAt,
    updatedAt: ghlProduct.updatedAt,
  }
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100)
}
