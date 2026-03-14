'use client'

import { motion } from 'framer-motion'
import { Shirt, Wind, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Shirt,
    number: '1',
    title: 'Coloque na Secadora',
    description:
      'Adicione 1–2 lenços ou as bolas de lã junto com as roupas úmidas na secadora.',
  },
  {
    icon: Wind,
    number: '2',
    title: 'Seque Normalmente',
    description:
      'O produto age durante a secagem, amaciando os tecidos e eliminando a estática.',
  },
  {
    icon: Sparkles,
    number: '3',
    title: 'Roupas Perfeitas',
    description:
      'Roupas saem macias, perfumadas, sem marcas e prontas para guardar.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Por Que Usar na Sua Secadora?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-light mb-6">
                <step.icon size={32} className="text-teal" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm font-body">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
