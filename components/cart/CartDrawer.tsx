'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/ghl'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-color">
          <h2 className="font-display text-lg font-bold text-text-dark flex items-center gap-2">
            <ShoppingBag size={20} className="text-teal" />
            Carrinho ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-surface rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-text-muted/30 mb-4" />
              <p className="text-text-muted font-body mb-2">Seu carrinho está vazio</p>
              <p className="text-text-muted/60 font-body text-sm mb-6">
                Adicione produtos para começar suas compras
              </p>
              <Button onClick={closeCart} size="sm">
                <Link href="/produtos">Ver Produtos</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-surface rounded-xl"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]?.url || ''}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/produtos/${item.product.slug}`}
                      onClick={closeCart}
                      className="font-body font-semibold text-sm text-text-dark line-clamp-2 hover:text-teal transition-colors"
                    >
                      {item.product.name}
                    </Link>

                    <p className="text-teal font-bold text-sm font-body mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border-color rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-white transition-colors rounded-l-lg"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-body font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-white transition-colors rounded-r-lg"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border-color p-4 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-body text-text-muted">Subtotal</span>
              <span className="font-body font-bold text-lg text-text-dark">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <p className="text-xs text-text-muted font-body">
              Frete calculado no checkout
            </p>

            {/* Actions */}
            <div className="space-y-2">
              <Link href="/checkout" onClick={closeCart} className="block">
                <Button size="lg" className="w-full">
                  Finalizar Compra
                </Button>
              </Link>
              <Link href="/carrinho" onClick={closeCart} className="block">
                <Button size="lg" variant="outline" className="w-full">
                  Ver Carrinho
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
