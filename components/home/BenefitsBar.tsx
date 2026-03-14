import { Package, Zap, Leaf, CreditCard } from 'lucide-react'

const benefits = [
  { icon: Package, text: 'Frete Grátis acima de R$ 199' },
  { icon: Zap, text: 'Envio em até 2 dias úteis' },
  { icon: Leaf, text: 'Produtos Importados Originais' },
  { icon: CreditCard, text: 'Parcele em até 12x sem juros' },
]

export default function BenefitsBar() {
  return (
    <section className="bg-teal py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-white text-sm font-body">
              <benefit.icon size={18} className="flex-shrink-0" />
              <span className="font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
