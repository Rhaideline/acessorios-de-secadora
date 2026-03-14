'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/ghl'
import Button from '@/components/ui/Button'

export default function CarrinhoPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-text-muted/30 mb-6" />
        <h1 className="font-display text-2xl font-bold text-text-dark mb-3">
          Seu carrinho está vazio
        </h1>
        <p className="text-text-muted font-body mb-8">
          Explore nossos produtos e encontre o que precisa para sua lavanderia.
        </p>
        <Link href="/produtos">
          <Button size="lg">Ver Produtos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-text-dark">
          Carrinho ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
        </h1>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 text-sm font-body font-medium transition-colors"
        >
          Limpar carrinho
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items list */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex gap-4 p-4 bg-white rounded-2xl border border-border-color"
            >
              {/* Image */}
              <Link href={`/produtos/${item.product.slug}`} className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden">
                  <Image
                    src={item.product.images[0]?.url || ''}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </Link>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/produtos/${item.product.slug}`}
                  className="font-body font-semibold text-text-dark hover:text-teal transition-colors line-clamp-2"
                >
                  {item.product.name}
                </Link>

                <p className="text-text-muted text-sm font-body mt-1">{item.product.category}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-teal font-bold font-body">
                    {formatPrice(item.product.price)}
                  </span>
                  {item.product.compareAtPrice && (
                    <span className="text-text-muted line-through text-sm font-body">
                      {formatPrice(item.product.compareAtPrice)}
                    </span>
                  )}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border-color rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 hover:bg-surface transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-body font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 hover:bg-surface transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-body font-bold text-text-dark">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 text-teal hover:text-teal/80 font-body font-medium text-sm transition-colors mt-4"
          >
            <ArrowLeft size={16} /> Continuar comprando
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-surface rounded-2xl p-6 sticky top-28">
            <h2 className="font-display text-lg font-bold text-text-dark mb-4">
              Resumo do Pedido
            </h2>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm font-body">
                  <span className="text-text-muted truncate mr-2">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="text-text-dark font-medium flex-shrink-0">
                    {formatPrice(item.product.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border-color pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-body text-text-muted">Subtotal</span>
                <span className="font-body font-bold text-text-dark">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-body text-text-muted">Frete</span>
                <span className="font-body text-sm text-teal">
                  {totalPrice >= 19900 ? 'Grátis' : 'Calculado no checkout'}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border-color">
                <span className="font-body font-bold text-text-dark">Total</span>
                <span className="font-body font-bold text-xl text-teal">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <Link href="/checkout" className="block">
              <Button size="lg" className="w-full">
                Finalizar Compra
              </Button>
            </Link>

            <div className="mt-4 space-y-1.5 text-xs font-body text-text-muted">
              <p>✓ Pagamento seguro via Pix, cartão ou boleto</p>
              <p>✓ Parcele em até 12x sem juros</p>
              <p>✓ Troca ou devolução em até 30 dias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
