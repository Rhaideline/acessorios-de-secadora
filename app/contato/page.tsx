import { Metadata } from 'next'
import { Mail, MessageCircle, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Acessórios de Secadora. Estamos disponíveis via WhatsApp e email para tirar suas dúvidas.',
  alternates: {
    canonical: 'https://acessoriosdesecadora.com.br/contato',
  },
}

export default function ContatoPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Fale Conosco
        </h1>
        <p className="text-text-muted font-body text-lg">
          Tem alguma dúvida ou sugestão? Estamos prontos para ajudar!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-surface rounded-2xl p-6 text-center border border-border-color">
          <div className="w-12 h-12 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={24} className="text-teal" />
          </div>
          <h3 className="font-display font-bold text-lg text-text-dark mb-2">WhatsApp</h3>
          <p className="text-text-muted font-body text-sm mb-4">
            Atendimento rápido de segunda a sexta, 9h às 18h.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Vi o site e quero saber mais sobre os produtos."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">Enviar Mensagem</Button>
          </a>
        </div>

        <div className="bg-surface rounded-2xl p-6 text-center border border-border-color">
          <div className="w-12 h-12 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={24} className="text-teal" />
          </div>
          <h3 className="font-display font-bold text-lg text-text-dark mb-2">E-mail</h3>
          <p className="text-text-muted font-body text-sm mb-4">
            Respondemos em até 24 horas úteis.
          </p>
          <a href="mailto:contato@acessoriosdesecadora.com.br">
            <Button size="sm" variant="outline">Enviar E-mail</Button>
          </a>
        </div>

        <div className="bg-surface rounded-2xl p-6 text-center border border-border-color">
          <div className="w-12 h-12 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin size={24} className="text-teal" />
          </div>
          <h3 className="font-display font-bold text-lg text-text-dark mb-2">Localização</h3>
          <p className="text-text-muted font-body text-sm">
            Operamos 100% online com envio para todo o Brasil.
          </p>
        </div>
      </div>

      {/* Contact form */}
      <div className="max-w-xl mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-body font-medium text-text-dark mb-1">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-border-color focus:border-teal focus:ring-1 focus:ring-teal outline-none font-body"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="block text-sm font-body font-medium text-text-dark mb-1">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-border-color focus:border-teal focus:ring-1 focus:ring-teal outline-none font-body"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-body font-medium text-text-dark mb-1">Mensagem</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border-color focus:border-teal focus:ring-1 focus:ring-teal outline-none font-body resize-none"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <Button size="lg" className="w-full">Enviar Mensagem</Button>
        </form>
      </div>
    </div>
  )
}
