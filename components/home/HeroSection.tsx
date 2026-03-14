'use client'

import Link from 'next/link'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Lock, Package, Star, RefreshCw } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/6186814/pexels-photo-6186814.jpeg)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Roupas Mais Macias.{' '}
            <span className="text-teal">Casa Mais Perfumada.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-body mb-8 leading-relaxed">
            Produtos importados para secadora que você não encontra facilmente no
            Brasil. Lenços amaciantes, bolas de lã e muito mais — entrega para
            todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/produtos">
              <Button size="lg">Ver Produtos Importados</Button>
            </Link>
            <a href="#como-funciona">
              <Button variant="secondary" size="lg">
                Como Funciona?
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-white/70 text-sm font-body">
            <span className="flex items-center gap-1.5">
              <Lock size={14} className="text-teal" /> Pagamento Seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Package size={14} className="text-teal" /> Frete para todo Brasil
            </span>
            <span className="flex items-center gap-1.5">
              <Star size={14} className="text-teal" /> 4.9/5 de avaliação
            </span>
            <span className="flex items-center gap-1.5">
              <RefreshCw size={14} className="text-teal" /> Troca Fácil
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
