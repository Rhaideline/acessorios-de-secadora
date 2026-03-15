'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SiteProduct } from '@/types/product'
import { formatPrice } from '@/lib/ghl'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import StarRating from '@/components/ui/StarRating'
import { ShoppingCart, Zap, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductDetailProps {
  product: SiteProduct
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('descricao')
  const tabs = [
    { id: 'descricao', label: 'Descrição' },
    { id: 'como-usar', label: 'Como Usar' },
    { id: 'avaliacoes', label: 'Avaliações' },
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image gallery */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface mb-4">
            <Image
              src={product.images[selectedImage]?.url || ''}
              alt={product.images[selectedImage]?.alt || product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0 ? product.images.length - 1 : selectedImage - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === product.images.length - 1 ? 0 : selectedImage + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isBestseller && <Badge variant="bestseller">Mais Vendido</Badge>}
              {product.isOnSale && product.discount && (
                <Badge variant="sale">-{product.discount}%</Badge>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    selectedImage === i ? 'border-teal' : 'border-transparent'
                  }`}
                >
                  <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div>
          <p className="text-teal font-body text-sm font-medium mb-2">{product.category}</p>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-text-dark mb-3">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <StarRating rating={5} />
            <span className="text-text-muted text-sm font-body">(127 avaliações)</span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-teal font-body">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xl text-text-muted line-through font-body">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            {product.discount && (
              <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-0.5 rounded font-body">
                -{product.discount}%
              </span>
            )}
          </div>

          <p className="text-text-muted font-body leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-body font-medium text-sm">Quantidade:</span>
            <div className="flex items-center border border-border-color rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-surface transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 font-body font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-surface transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href={`https://loja.acessoriosdesecadora.com.br/product-details/${product.ghlProductId}`} className="flex-1">
              <Button size="lg" className="w-full gap-2">
                <ShoppingCart size={20} /> Adicionar ao Carrinho
              </Button>
            </a>
            <a href={`https://loja.acessoriosdesecadora.com.br/product-details/${product.ghlProductId}`} className="flex-1">
              <Button size="lg" variant="outline" className="w-full gap-2">
                <Zap size={20} /> Comprar Agora
              </Button>
            </a>
          </div>

          {/* Trust */}
          <div className="bg-surface rounded-xl p-4 space-y-2 text-sm font-body text-text-muted">
            <p>✓ Frete grátis acima de R$ 199</p>
            <p>✓ Parcele em até 12x sem juros</p>
            <p>✓ Produto importado original</p>
            <p>✓ Prazo de entrega: até 15 dias úteis</p>
            <p>✓ Troca ou devolução em até 30 dias</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 md:mt-16">
        <div className="flex border-b border-border-color">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-body font-medium text-sm transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'text-teal border-teal'
                  : 'text-text-muted border-transparent hover:text-text-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-8">
          {activeTab === 'descricao' && (
            <div className="prose max-w-none font-body text-text-muted leading-relaxed">
              <p>{product.description}</p>
              <h3 className="text-text-dark font-display mt-6 mb-3">Características</h3>
              <ul>
                <li>Produto importado de alta qualidade</li>
                <li>Testado e aprovado por milhares de consumidores</li>
                <li>Fórmula segura para toda a família</li>
                <li>Embalagem prática e reutilizável</li>
              </ul>
            </div>
          )}

          {activeTab === 'como-usar' && (
            <div className="prose max-w-none font-body text-text-muted leading-relaxed">
              <h3 className="text-text-dark font-display mb-3">Instruções de Uso</h3>
              <ol>
                <li>Coloque as roupas úmidas na secadora normalmente.</li>
                <li>Adicione o produto junto com as roupas.</li>
                <li>Selecione o ciclo de secagem desejado.</li>
                <li>Ao finalizar, retire as roupas já macias e perfumadas.</li>
              </ol>
              <p className="mt-4">
                <strong>Dica:</strong> Para melhores resultados, não sobrecarregue a
                secadora. Deixe espaço para as roupas se moverem livremente.
              </p>
            </div>
          )}

          {activeTab === 'avaliacoes' && (
            <div className="space-y-6">
              {[
                {
                  name: 'Mariana S.',
                  text: 'Produto excelente! Minhas roupas ficaram muito mais macias.',
                },
                {
                  name: 'Fernanda L.',
                  text: 'Superou minhas expectativas. Já fiz 3 pedidos!',
                },
                {
                  name: 'Claudia M.',
                  text: 'Perfeito para pele sensível. Minha filha não teve reações.',
                },
              ].map((review, i) => (
                <div key={i} className="border-b border-border-color pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={5} size={14} />
                    <span className="font-body font-semibold text-sm text-text-dark">
                      {review.name}
                    </span>
                  </div>
                  <p className="text-text-muted font-body text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
