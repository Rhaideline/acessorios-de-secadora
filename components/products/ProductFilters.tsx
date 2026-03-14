'use client'

import { CATEGORIES } from '@/lib/products'

interface ProductFiltersProps {
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export default function ProductFilters({ activeCategory, onCategoryChange }: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
          activeCategory === null
            ? 'bg-teal text-white'
            : 'bg-surface text-text-muted hover:bg-teal-light'
        }`}
      >
        Todos
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onCategoryChange(cat.name)}
          className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
            activeCategory === cat.name
              ? 'bg-teal text-white'
              : 'bg-surface text-text-muted hover:bg-teal-light'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}
