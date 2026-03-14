'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SiteProduct } from '@/types/product'
import { formatPrice } from '@/lib/ghl'
import Badge from '@/components/ui/Badge'
import StarRating from '@/components/ui/StarRating'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  product: SiteProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-color flex flex-col">
      {/* Image */}
      <Link href={`/produtos/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-surface">
          <Image
            src={product.images[0]?.url || '/images/placeholder.jpg'}
            alt={product.images[0]?.alt || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isBestseller && <Badge variant="bestseller">Mais Vendido</Badge>}
            {product.isNew && <Badge variant="new">Novo</Badge>}
            {product.isOnSale && product.discount && (
              <Badge variant="sale">-{product.discount}%</Badge>
            )}
          </div>

          {/* Quick add to cart */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              aria-label={`Adicionar ${product.name} ao carrinho`}
              className="bg-teal text-white p-3 rounded-full shadow-lg hover:bg-teal/90 transition-colors block"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <Link href={`/produtos/${product.slug}`} className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <StarRating rating={5} size={14} />
        </div>
        <h3 className="font-body font-semibold text-text-dark text-sm md:text-base leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-teal font-bold text-lg font-body">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-text-muted line-through text-sm font-body">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        {product.inventory !== undefined && product.inventory < 5 && product.inventory > 0 && (
          <p className="text-red-500 text-xs mt-1 font-body font-medium">
            Últimas {product.inventory} unidades!
          </p>
        )}
      </Link>
    </div>
  )
}
