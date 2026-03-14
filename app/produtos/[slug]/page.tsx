import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FALLBACK_PRODUCTS } from '@/lib/products'
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { formatPrice } from '@/lib/ghl'
import ProductDetail from '@/components/products/ProductDetail'
import ProductGrid from '@/components/products/ProductGrid'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return FALLBACK_PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = FALLBACK_PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}

  return {
    title: `${product.name} | Acessórios de Secadora`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: product.images.map((img) => ({ url: img.url })),
      type: 'website',
    },
    alternates: {
      canonical: `https://acessoriosdesecadora.com.br/produtos/${product.slug}`,
    },
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = FALLBACK_PRODUCTS.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = FALLBACK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: 'Início', url: '/' },
              { name: 'Produtos', url: '/produtos' },
              { name: product.name, url: `/produtos/${product.slug}` },
            ])
          ),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border-color">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm font-body text-text-muted">
            <a href="/" className="hover:text-teal transition-colors">Início</a>
            <span>/</span>
            <a href="/produtos" className="hover:text-teal transition-colors">Produtos</a>
            <span>/</span>
            <span className="text-text-dark">{product.name}</span>
          </nav>
        </div>
      </div>

      <ProductDetail product={product} />

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="bg-surface py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-dark mb-8 text-center">
              Frequentemente Comprados Juntos
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </>
  )
}
