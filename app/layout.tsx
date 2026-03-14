import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import CartDrawer from '@/components/cart/CartDrawer'
import { CartProvider } from '@/contexts/CartContext'
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
} from '@/lib/seo'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://acessoriosdesecadora.com.br'),
  title: {
    default: 'Acessórios de Secadora — Produtos Importados para Lavanderia',
    template: '%s | Acessórios de Secadora',
  },
  description:
    'Compre lenços para secadora e bolas de lã importados. Roupas mais macias, sem estática e perfumadas. Entrega para todo Brasil. Frete grátis acima de R$199.',
  keywords: [
    'lenço para secadora',
    'lencos para secadora',
    'bolas de la para secadora',
    'dryer sheets brasil',
    'dryer balls brasil',
    'acessorios secadora importado',
    'folha para secadora',
    'como usar secadora',
    'amaciante secadora',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://acessoriosdesecadora.com.br',
    siteName: 'Acessórios de Secadora',
    title: 'Acessórios de Secadora — Produtos Importados para Lavanderia',
    description:
      'Lenços para secadora, bolas de lã e acessórios importados. Roupas mais macias e perfumadas.',
    images: [
      {
        url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/69b59c5b395ff47c62392516.png',
        width: 1200,
        height: 630,
        alt: 'Acessórios de Secadora',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acessórios de Secadora — Produtos Importados para Lavanderia',
    description:
      'Lenços para secadora, bolas de lã e acessórios importados. Roupas mais macias e perfumadas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://acessoriosdesecadora.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteJsonLd()),
          }}
        />
      </head>
      <body className="font-body text-text-dark antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
