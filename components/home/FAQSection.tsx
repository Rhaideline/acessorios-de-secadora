'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'O que são lenços para secadora?',
    answer:
      'Lenços para secadora (dryer sheets) são folhas tratadas com amaciante e antiestático que são colocadas junto com as roupas na secadora. Elas amaciam os tecidos, eliminam a eletricidade estática e perfumam as roupas durante a secagem.',
  },
  {
    question: 'Bolas de lã para secadora funcionam mesmo?',
    answer:
      'Sim. As bolas de lã XL para secadora são altamente eficazes: reduzem o tempo de secagem em até 25%, eliminam a estática e duram mais de 1.000 ciclos de lavagem — o equivalente a anos de uso.',
  },
  {
    question: 'Onde comprar lenços para secadora no Brasil?',
    answer:
      'A Acessórios de Secadora é especializada em produtos importados para secadora. Entregamos para todo o Brasil com frete grátis em compras acima de R$199.',
  },
  {
    question: 'Qual a diferença entre lenços e bolas de lã para secadora?',
    answer:
      'Lenços são descartáveis (ou reutilizáveis por 2–3 vezes), práticos e perfumam as roupas. Bolas de lã são permanentes (duram anos), mais econômicas e ecológicas, ideais para quem busca sustentabilidade.',
  },
  {
    question: 'Os produtos são seguros para crianças e pets?',
    answer:
      'Sim, nossos produtos têm opções hipoalergênicas e sem perfume, testadas dermatologicamente e seguras para bebês, gestantes e animais domésticos.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-20 bg-teal-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl border border-border-color overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-body font-semibold text-text-dark pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-teal flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 text-text-muted font-body leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
