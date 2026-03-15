'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Lock, CreditCard, QrCode, FileText, ShoppingBag, Check } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { formatPrice } from '@/lib/ghl'
import Button from '@/components/ui/Button'

type PaymentMethod = 'pix' | 'cartao' | 'boleto'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const discount = items.reduce((sum, item) => {
    if (item.product.compareAtPrice) {
      return sum + (item.product.compareAtPrice - item.product.price) * item.quantity
    }
    return sum
  }, 0)

  const freeShipping = totalPrice >= 19900
  const shippingCost = freeShipping ? 0 : 1990
  const finalTotal = totalPrice + shippingCost

  const pixDiscount = Math.round(finalTotal * 0.05)
  const pixTotal = finalTotal - pixDiscount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message with order details
    const itemsList = items
      .map((item) => `• ${item.product.name} (x${item.quantity}) — ${formatPrice(item.product.price * item.quantity)}`)
      .join('\n')

    const total = paymentMethod === 'pix' ? pixTotal : finalTotal
    const paymentLabel = paymentMethod === 'pix' ? 'Pix (5% desconto)' : paymentMethod === 'cartao' ? 'Cartão de Crédito' : 'Boleto'

    const message = `🛒 *Novo Pedido — Acessórios de Secadora*\n\n` +
      `*Cliente:* ${formData.nome}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*CPF:* ${formData.cpf}\n\n` +
      `*Endereço de Entrega:*\n` +
      `${formData.endereco}, ${formData.numero}${formData.complemento ? ` - ${formData.complemento}` : ''}\n` +
      `${formData.bairro} — ${formData.cidade}/${formData.estado}\n` +
      `CEP: ${formData.cep}\n\n` +
      `*Itens:*\n${itemsList}\n\n` +
      `*Subtotal:* ${formatPrice(totalPrice)}\n` +
      `*Frete:* ${freeShipping ? 'Grátis' : formatPrice(shippingCost)}\n` +
      `${paymentMethod === 'pix' ? `*Desconto Pix (5%):* -${formatPrice(pixDiscount)}\n` : ''}` +
      `*Total:* ${formatPrice(total)}\n\n` +
      `*Pagamento:* ${paymentLabel}`

    // Redirect to GHL store checkout
    const ghlCheckoutUrl = `https://loja.acessoriosdesecadora.com.br/checkout?firstName=${encodeURIComponent(formData.nome.split(' ')[0])}&lastName=${encodeURIComponent(formData.nome.split(' ').slice(1).join(' '))}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.telefone)}`
    window.location.href = ghlCheckoutUrl

    setSubmitted(true)
    clearCart()
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-text-muted/30 mb-6" />
        <h1 className="font-display text-2xl font-bold text-text-dark mb-3">
          Nenhum item no carrinho
        </h1>
        <p className="text-text-muted font-body mb-8">
          Adicione produtos ao carrinho antes de finalizar a compra.
        </p>
        <Link href="/produtos">
          <Button size="lg">Ver Produtos</Button>
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-lg">
        <div className="bg-teal/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-teal" />
        </div>
        <h1 className="font-display text-2xl font-bold text-text-dark mb-3">
          Pedido Enviado!
        </h1>
        <p className="text-text-muted font-body mb-4">
          Seu pedido foi enviado via WhatsApp. Nossa equipe entrará em contato em breve para confirmar e enviar as instruções de pagamento.
        </p>
        <p className="text-text-muted font-body text-sm mb-8">
          Se a janela do WhatsApp não abriu, clique no botão abaixo para enviar manualmente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/produtos">
            <Button variant="outline">Continuar Comprando</Button>
          </Link>
          <Link href="/">
            <Button>Voltar ao Início</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link
        href="/carrinho"
        className="inline-flex items-center gap-2 text-teal hover:text-teal/80 font-body font-medium text-sm mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Voltar ao carrinho
      </Link>

      <h1 className="font-display text-2xl md:text-3xl font-bold text-text-dark mb-8">
        Finalizar Compra
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal info */}
            <div className="bg-white rounded-2xl border border-border-color p-6">
              <h2 className="font-display font-bold text-lg text-text-dark mb-4">
                Dados Pessoais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    CPF *
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    required
                    value={formData.cpf}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl border border-border-color p-6">
              <h2 className="font-display font-bold text-lg text-text-dark mb-4">
                Endereço de Entrega
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    CEP *
                  </label>
                  <input
                    type="text"
                    name="cep"
                    required
                    value={formData.cep}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="00000-000"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Endereço *
                  </label>
                  <input
                    type="text"
                    name="endereco"
                    required
                    value={formData.endereco}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="Rua, Avenida..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Número *
                  </label>
                  <input
                    type="text"
                    name="numero"
                    required
                    value={formData.numero}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Complemento
                  </label>
                  <input
                    type="text"
                    name="complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="Apto, bloco..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Bairro *
                  </label>
                  <input
                    type="text"
                    name="bairro"
                    required
                    value={formData.bairro}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="Bairro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Cidade *
                  </label>
                  <input
                    type="text"
                    name="cidade"
                    required
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
                    placeholder="Cidade"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-text-dark mb-1">
                    Estado *
                  </label>
                  <select
                    name="estado"
                    required
                    value={formData.estado}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-color rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal bg-white"
                  >
                    <option value="">Selecione</option>
                    {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-2xl border border-border-color p-6">
              <h2 className="font-display font-bold text-lg text-text-dark mb-4">
                Forma de Pagamento
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-teal bg-teal/5'
                      : 'border-border-color hover:border-teal/50'
                  }`}
                >
                  <QrCode size={24} className={paymentMethod === 'pix' ? 'text-teal' : 'text-text-muted'} />
                  <span className="font-body font-semibold text-sm">Pix</span>
                  <span className="text-xs text-teal font-body font-bold">5% de desconto</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'cartao'
                      ? 'border-teal bg-teal/5'
                      : 'border-border-color hover:border-teal/50'
                  }`}
                >
                  <CreditCard size={24} className={paymentMethod === 'cartao' ? 'text-teal' : 'text-text-muted'} />
                  <span className="font-body font-semibold text-sm">Cartão</span>
                  <span className="text-xs text-text-muted font-body">Até 12x sem juros</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('boleto')}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'boleto'
                      ? 'border-teal bg-teal/5'
                      : 'border-border-color hover:border-teal/50'
                  }`}
                >
                  <FileText size={24} className={paymentMethod === 'boleto' ? 'text-teal' : 'text-text-muted'} />
                  <span className="font-body font-semibold text-sm">Boleto</span>
                  <span className="text-xs text-text-muted font-body">Vence em 3 dias</span>
                </button>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-2xl p-6 sticky top-28">
              <h2 className="font-display text-lg font-bold text-text-dark mb-4">
                Resumo do Pedido
              </h2>

              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.images[0]?.url || ''}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm text-text-dark line-clamp-1">
                        {item.product.name}
                      </p>
                      <p className="font-body text-xs text-text-muted">Qtd: {item.quantity}</p>
                      <p className="font-body text-sm font-bold text-teal">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border-color pt-4 space-y-2">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-text-muted">Subtotal</span>
                  <span className="text-text-dark">{formatPrice(totalPrice)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-text-muted">Economia</span>
                    <span className="text-green-600">-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-body">
                  <span className="text-text-muted">Frete</span>
                  <span className={freeShipping ? 'text-teal font-bold' : 'text-text-dark'}>
                    {freeShipping ? 'Grátis' : formatPrice(shippingCost)}
                  </span>
                </div>
                {paymentMethod === 'pix' && (
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-text-muted">Desconto Pix (5%)</span>
                    <span className="text-green-600">-{formatPrice(pixDiscount)}</span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-border-color">
                  <span className="font-body font-bold text-text-dark">Total</span>
                  <span className="font-body font-bold text-xl text-teal">
                    {formatPrice(paymentMethod === 'pix' ? pixTotal : finalTotal)}
                  </span>
                </div>
                {paymentMethod === 'cartao' && (
                  <p className="text-xs text-text-muted font-body text-right">
                    ou 12x de {formatPrice(Math.ceil(finalTotal / 12))} sem juros
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full mt-6 gap-2">
                <Lock size={18} /> Finalizar Pedido
              </Button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-text-muted font-body">
                <Lock size={12} />
                <span>Seus dados estão protegidos</span>
              </div>

              <div className="flex gap-2 justify-center mt-3 text-xs text-text-muted/60">
                <span className="bg-white px-2 py-1 rounded">Pix</span>
                <span className="bg-white px-2 py-1 rounded">Visa</span>
                <span className="bg-white px-2 py-1 rounded">Master</span>
                <span className="bg-white px-2 py-1 rounded">Elo</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
