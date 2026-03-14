'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Experimente a Diferença dos Importados
          </h2>
          <p className="text-white/70 font-body text-lg mb-8 max-w-xl mx-auto">
            Frete grátis na primeira compra acima de R$ 149. Não encontrou? Devolvemos o dinheiro.
          </p>

          <Link href="/produtos">
            <Button size="lg">Comprar Agora</Button>
          </Link>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-white/50 text-sm font-body">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-teal" /> Pagamento seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-teal" /> Entrega garantida
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-teal" /> Suporte via WhatsApp
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
