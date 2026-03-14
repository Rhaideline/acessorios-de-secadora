import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1 - Logo */}
          <div>
            <Image
              src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/69b5c77fb5f3d46f5aaf7f43.png"
              alt="Acessórios de Secadora"
              width={180}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/60 text-sm font-body mb-4">
              Produtos importados que fazem suas roupas durarem mais e cheirarem melhor.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/5511999999999?text=Olá! Vi o site e quero saber mais sobre os produtos."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 - Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-body text-sm text-white/60">
              <li><Link href="/produtos" className="hover:text-teal transition-colors">Produtos</Link></li>
              <li><Link href="/blog" className="hover:text-teal transition-colors">Blog</Link></li>
              <li><Link href="/sobre" className="hover:text-teal transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contato" className="hover:text-teal transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Col 3 - Categorias */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2 font-body text-sm text-white/60">
              <li><Link href="/categorias/lencos-para-secadora" className="hover:text-teal transition-colors">Lenços para Secadora</Link></li>
              <li><Link href="/categorias/bolas-de-la" className="hover:text-teal transition-colors">Bolas de Lã</Link></li>
              <li><Link href="/categorias/kits-completos" className="hover:text-teal transition-colors">Kits Completos</Link></li>
              <li><Link href="/categorias/capsulas-de-lavanderia" className="hover:text-teal transition-colors">Cápsulas de Lavanderia</Link></li>
              <li><Link href="/categorias/saches-e-perfumadores" className="hover:text-teal transition-colors">Sachês e Perfumadores</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contato */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 font-body text-sm text-white/60">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  className="hover:text-teal transition-colors"
                >
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@acessoriosdesecadora.com.br"
                  className="hover:text-teal transition-colors"
                >
                  contato@acessoriosdesecadora.com.br
                </a>
              </li>
            </ul>

            {/* Payment badges */}
            <div className="mt-6">
              <p className="text-xs text-white/40 mb-2">Pagamento seguro</p>
              <div className="flex gap-2 text-xs text-white/50">
                <span className="bg-white/10 px-2 py-1 rounded">Pix</span>
                <span className="bg-white/10 px-2 py-1 rounded">Visa</span>
                <span className="bg-white/10 px-2 py-1 rounded">Master</span>
                <span className="bg-white/10 px-2 py-1 rounded">Elo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/40 font-body">
          <p>&copy; {new Date().getFullYear()} Acessórios de Secadora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
