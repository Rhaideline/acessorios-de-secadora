'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
      {/* Top bar */}
      <div className="bg-teal text-white text-center py-2 text-sm font-body">
        <div className="container mx-auto px-4">
          Frete grátis acima de R$199 | Parcele em até 12x sem juros
        </div>
      </div>

      {/* Main header */}
      <header className="bg-primary sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/69b5c77fb5f3d46f5aaf7f43.png"
                alt="Acessórios de Secadora"
                width={180}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-teal transition-colors text-sm font-medium font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Link href="/produtos">
                <Button size="sm" className="hidden md:inline-flex">
                  Comprar Agora
                </Button>
              </Link>

              <a
                href="https://loja.acessoriosdesecadora.com.br/cart"
                className="text-white relative p-2"
                aria-label="Ver carrinho"
              >
                <ShoppingCart size={22} />
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden text-white p-2"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  )
}
