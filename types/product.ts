export interface GHLProduct {
  id: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  currency: 'BRL'
  images: { url: string; alt?: string }[]
  variants?: GHLVariant[]
  tags: string[]
  sku?: string
  inventory?: number
  isActive: boolean
  slug: string
  createdAt: string
  updatedAt: string
}

export interface GHLVariant {
  id: string
  name: string
  price: number
  sku?: string
  inventory?: number
  options: Record<string, string>
}

export interface SiteProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  compareAtPrice?: number
  discount?: number
  images: { url: string; alt: string }[]
  tags: string[]
  sku?: string
  inventory?: number
  isActive: boolean
  category: string
  isBestseller: boolean
  isNew: boolean
  isOnSale: boolean
  createdAt: string
  updatedAt: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  readTime: string
  date: string
  author: string
  image?: string
  tags: string[]
}

export interface Testimonial {
  name: string
  city: string
  rating: number
  text: string
}

export interface Category {
  name: string
  slug: string
  description: string
  image: string
}
