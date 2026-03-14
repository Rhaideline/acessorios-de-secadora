'use client'

import { useState } from 'react'
import { FALLBACK_PRODUCTS } from '@/lib/products'
import ProductGrid from '@/components/products/ProductGrid'
import ProductFilters from '@/components/products/ProductFilters'

export default function ProdutosPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? FALLBACK_PRODUCTS.filter((p) => p.category === activeCategory)
    : FALLBACK_PRODUCTS

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Nossos Produtos
        </h1>
        <p className="text-text-muted font-body text-lg">
          Produtos importados de alta qualidade para sua secadora e lavanderia
        </p>
      </div>

      <ProductFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ProductGrid products={filtered} />

      {filtered.length === 0 && (
        <p className="text-center text-text-muted font-body py-12">
          Nenhum produto encontrado nessa categoria.
        </p>
      )}
    </div>
  )
}
