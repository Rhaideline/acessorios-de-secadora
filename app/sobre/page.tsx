import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a Acessórios de Secadora — loja especializada em produtos importados para lavanderia. Nossa missão é levar qualidade e praticidade para o cuidado das suas roupas.',
  alternates: {
    canonical: 'https://acessoriosdesecadora.com.br/sobre',
  },
}

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-6 text-center">
          Sobre a Acessórios de Secadora
        </h1>

        <div className="prose max-w-none font-body text-text-muted leading-relaxed">
          <p className="text-lg">
            Somos uma loja especializada em produtos importados para lavanderia doméstica.
            Nossa missão é trazer para o Brasil os melhores acessórios para secadora,
            que já são sucesso absoluto nos Estados Unidos, Canadá e Europa.
          </p>

          <h2 className="font-display text-text-dark mt-10 mb-4">Nossa História</h2>
          <p>
            Tudo começou quando descobrimos que os produtos para secadora disponíveis
            no mercado brasileiro eram limitados e de qualidade inferior aos importados.
            Depois de experimentar os lenços e bolas de lã vendidos nos EUA, a diferença
            era gritante — roupas muito mais macias, perfumadas e sem eletricidade estática.
          </p>
          <p>
            Decidimos então criar a Acessórios de Secadora para tornar esses produtos
            acessíveis a todos os brasileiros que possuem secadora em casa.
          </p>

          <h2 className="font-display text-text-dark mt-10 mb-4">Por Que nos Escolher?</h2>
          <ul className="space-y-2">
            {[
              'Produtos 100% importados e originais',
              'Preços justos e competitivos',
              'Frete grátis em compras acima de R$ 199',
              'Atendimento humanizado via WhatsApp',
              'Política de troca e devolução facilitada',
              'Embalagens seguras e bem cuidadas',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check size={16} className="text-teal flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-text-dark mt-10 mb-4">
            Nosso Compromisso
          </h2>
          <p>
            Trabalhamos apenas com produtos de marcas reconhecidas internacionalmente,
            testados e aprovados por milhões de consumidores. Cada item é selecionado
            com cuidado para garantir a melhor experiência na sua lavanderia.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link href="/produtos">
            <Button size="lg">Ver Nossos Produtos</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
