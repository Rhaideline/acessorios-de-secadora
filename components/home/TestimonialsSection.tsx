'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/products'
import StarRating from '@/components/ui/StarRating'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
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
            O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface rounded-2xl p-6 border border-border-color"
            >
              <Quote size={24} className="text-teal/30 mb-3" />
              <p className="text-text-dark font-body text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 mb-1">
                <StarRating rating={testimonial.rating} size={14} />
              </div>
              <p className="font-body text-sm font-semibold text-text-dark">
                {testimonial.name}
              </p>
              <p className="font-body text-xs text-text-muted">{testimonial.city}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
