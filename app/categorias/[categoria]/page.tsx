import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CATEGORIES, FALLBACK_PRODUCTS } from '@/lib/products'
import { generateBreadcrumbJsonLd } from '@/lib/seo'
import ProductGrid from '@/components/products/ProductGrid'

interface PageProps {
  params: { categoria: string }
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = CATEGORIES.find((c) => c.slug === params.categoria)
  if (!category) return {}

  return {
    title: `${category.name} — Produtos Importados`,
    description: category.description,
    alternates: {
      canonical: `https://acessoriosdesecadora.com.br/categorias/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: PageProps) {
  const category = CATEGORIES.find((c) => c.slug === params.categoria)
  if (!category) notFound()

  const products = FALLBACK_PRODUCTS.filter((p) => p.category === category.name)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: 'Início', url: '/' },
              { name: 'Categorias', url: '/categorias' },
              { name: category.name, url: `/categorias/${category.slug}` },
            ])
          ),
        }}
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
            {category.name}
          </h1>
          <p className="text-text-muted font-body text-lg">{category.description}</p>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-center text-text-muted font-body py-12">
            Produtos em breve nessa categoria.
          </p>
        )}
      </div>
    </>
  )
}
