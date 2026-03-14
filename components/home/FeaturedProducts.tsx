'use client'

import { motion } from 'framer-motion'
import { getBestsellers } from '@/lib/products'
import ProductGrid from '@/components/products/ProductGrid'

export default function FeaturedProducts() {
  const bestsellers = getBestsellers()

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Os Mais Vendidos
          </h2>
          <p className="text-text-muted font-body text-lg">
            Importados direto dos EUA — testados e aprovados
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ProductGrid products={bestsellers} />
        </motion.div>
      </div>
    </section>
  )
}
