'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from '@/components/ui/Button'

const bullets = [
  'Fórmulas testadas por milhões de consumidores',
  'Ingredientes de grau farmacêutico',
  'Opções hipoalergênicas certificadas',
  'Durabilidade muito superior às alternativas nacionais',
]

export default function WhyImported() {
  return (
    <section className="py-16 md:py-20 bg-teal-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Por Que Produtos Importados?
            </h2>
            <p className="text-text-muted font-body text-lg leading-relaxed mb-8">
              Os lenços e bolas para secadora mais vendidos no Brasil vêm dos EUA
              e Canadá. Esses países têm décadas de tradição no uso de secadoras,
              e as marcas desenvolveram fórmulas que simplesmente funcionam melhor
              do que as poucas opções nacionais disponíveis.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-text-dark">
                  <span className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-teal" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <Link href="/produtos">
              <Button>Conhecer os Produtos</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://ae01.alicdn.com/kf/S02902ebc961a47f5b2d1d0e8f572549dp.jpg"
              alt="Produtos importados para secadora"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
