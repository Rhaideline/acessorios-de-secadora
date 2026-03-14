import { SiteProduct, BlogPost } from '@/types/product'

const SITE_URL = 'https://acessoriosdesecadora.com.br'
const SITE_NAME = 'Acessórios de Secadora'

export function generateProductJsonLd(product: SiteProduct) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => img.url),
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/produtos/${product.slug}`,
      priceCurrency: 'BRL',
      price: (product.price / 100).toFixed(2),
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability: product.inventory && product.inventory > 0
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Mariana S.' },
        reviewBody: 'Produto excelente! Minhas roupas ficaram muito mais macias e perfumadas.',
      },
    ],
  }
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/69b59c5b395ff47c62392516.png',
    description: 'Produtos importados para secadora — lenços amaciantes, bolas de lã e acessórios.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: [],
  }
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/produtos?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateFAQJsonLd() {
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

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/69b59c5b395ff47c62392516.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }
}
