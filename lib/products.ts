import { SiteProduct, BlogPost, Testimonial, Category } from '@/types/product'

// Fallback products for when GHL API is unavailable
export const FALLBACK_PRODUCTS: SiteProduct[] = [
  {
    id: '1',
    ghlProductId: '69b5d1b7632fe5b1e0181473',
    name: 'Lenços Aromatizados para Secadora — 120 Folhas',
    slug: 'lencos-aromatizados-secadora-120',
    description:
      'Lenços aromatizados para secadora importados. Amaciante de tecidos em folha que elimina a eletricidade estática, amacia as roupas e deixa um aroma suave e duradouro. Cada folha pode ser reutilizada até 3 vezes. Fórmula hipoalergênica, segura para crianças e pets. Embalagem com 120 folhas de alta qualidade.',
    price: 8990,
    compareAtPrice: 12990,
    discount: 31,
    images: [
      { url: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg', alt: 'Lenços Aromatizados para Secadora 120 Folhas' },
      { url: 'https://ae01.alicdn.com/kf/S5556677f7af743689143a822efc1e82ev.jpg', alt: 'Lenços para Secadora - detalhes' },
      { url: 'https://ae01.alicdn.com/kf/S8a98e94679d14d929688cdd69c4d9f46C.jpg', alt: 'Lenços para Secadora - uso' },
      { url: 'https://ae01.alicdn.com/kf/S3f63326291894788b2389c80acbea051a.jpg', alt: 'Lenços para Secadora - embalagem' },
      { url: 'https://ae01.alicdn.com/kf/Sf4ff5c8364334d04a5e1e17d20c7c48f9.jpg', alt: 'Lenços para Secadora - resultado' },
      { url: 'https://ae01.alicdn.com/kf/S844255cf3b1545e79194eaf8d25d07b5T.jpg', alt: 'Lenços para Secadora - aromas' },
    ],
    tags: ['lenco-secadora', 'importado', 'bestseller', 'aromatizado'],
    sku: 'LEN-AR-120',
    inventory: 50,
    isActive: true,
    category: 'Lenços para Secadora',
    isBestseller: true,
    isNew: false,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d1b7632fe5b1e0181473',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: '2',
    ghlProductId: '69b5d22c6601ec31533861c2',
    name: 'Bolas de Lã Orgânica para Secadora — Kit 3un XL',
    slug: 'bolas-la-organica-secadora-kit-3',
    description:
      'Bolas de lã orgânica XL de 7cm importadas. Amaciante de tecido natural e reutilizável que reduz o tempo de secagem em até 25%, elimina a necessidade de lenços descartáveis e dura mais de 1.000 ciclos. Ecológicas, sem químicos e 100% naturais. Adicione 2–3 gotas de óleo essencial para perfumar naturalmente suas roupas. Kit com 3 unidades.',
    price: 5990,
    compareAtPrice: 8990,
    discount: 33,
    images: [
      { url: 'https://ae01.alicdn.com/kf/Sdf24634297dc45feb45a0e067ec7295dA.jpg', alt: 'Bolas de Lã Orgânica para Secadora Kit 3un' },
      { url: 'https://ae01.alicdn.com/kf/S02902ebc961a47f5b2d1d0e8f572549dp.jpg', alt: 'Bolas de Lã - detalhes' },
      { url: 'https://ae01.alicdn.com/kf/S0a10b77f102745d49bc0dbcf5fb16a6bo.jpg', alt: 'Bolas de Lã - tamanho' },
      { url: 'https://ae01.alicdn.com/kf/S352d43fbad114efe823dccf4e5bb8377B.jpg', alt: 'Bolas de Lã - uso na secadora' },
      { url: 'https://ae01.alicdn.com/kf/S9c31c519777d431198444705a3e2ed6ev.jpg', alt: 'Bolas de Lã - resultado' },
      { url: 'https://ae01.alicdn.com/kf/Sd1f59e61e78c4a1496458cb0457de848g.jpg', alt: 'Bolas de Lã - embalagem' },
    ],
    tags: ['bola-la', 'dryer-ball', 'importado', 'ecologico', 'bestseller'],
    sku: 'BLA-XL-3',
    inventory: 40,
    isActive: true,
    category: 'Bolas de Lã',
    isBestseller: true,
    isNew: false,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d22c6601ec31533861c2',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: '3',
    ghlProductId: '69b5d22cc673108f73b1ec96',
    name: 'Lenços para Secadora Sem Perfume — 120un Hipoalergênico',
    slug: 'lencos-secadora-sem-perfume-120',
    description:
      'Para peles sensíveis. Amaciante sem fragrância, sem corantes artificiais e sem alérgenos. Dermatologicamente testado. Ideal para bebês, gestantes e pessoas com alergias. Elimina a eletricidade estática sem adicionar perfume.',
    price: 6490,
    compareAtPrice: 8990,
    discount: 28,
    images: [
      { url: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg', alt: 'Lenços Sem Perfume para Secadora' },
      { url: 'https://ae01.alicdn.com/kf/S5556677f7af743689143a822efc1e82ev.jpg', alt: 'Lenços Sem Perfume - detalhes' },
    ],
    tags: ['lenco-secadora', 'sem-perfume', 'pele-sensivel', 'importado'],
    sku: 'LEN-UN-120',
    inventory: 35,
    isActive: true,
    category: 'Lenços para Secadora',
    isBestseller: false,
    isNew: false,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d22cc673108f73b1ec96',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: '4',
    ghlProductId: '69b5d22ccc137271a1917edb',
    name: 'Kit Starter Lavanderia Importada — Combo Completo',
    slug: 'kit-starter-lavanderia',
    description:
      'Kit completo para quem quer o melhor resultado na secadora: 1 pacote de lenços aromatizados 120un + 3 bolas de lã XL + 1 sachê de lavanda para o armário. Economize comprando o kit completo com tudo que você precisa.',
    price: 16990,
    compareAtPrice: 21990,
    discount: 23,
    images: [
      { url: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg', alt: 'Kit Starter Lavanderia' },
      { url: 'https://ae01.alicdn.com/kf/Sdf24634297dc45feb45a0e067ec7295dA.jpg', alt: 'Kit Starter - bolas de lã' },
    ],
    tags: ['kit', 'combo', 'importado', 'oferta', 'bestseller'],
    sku: 'KIT-STR-01',
    inventory: 20,
    isActive: true,
    category: 'Kits Completos',
    isBestseller: true,
    isNew: false,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d22ccc137271a1917edb',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: '5',
    ghlProductId: '69b5d22de32f823e8158df79',
    name: 'Sachê Perfumado para Armário — Lavanda Francesa',
    slug: 'sache-perfumado-lavanda-francesa',
    description:
      'Sachê perfumado importado com óleo essencial de lavanda francesa. Deixa seu armário e gavetas com aroma fresco por até 60 dias. Afasta traças naturalmente. Caixa com 6 sachês.',
    price: 5990,
    compareAtPrice: 7990,
    discount: 25,
    images: [
      { url: 'https://ae01.alicdn.com/kf/S8a98e94679d14d929688cdd69c4d9f46C.jpg', alt: 'Sachê Perfumado Lavanda Francesa' },
    ],
    tags: ['sache', 'armario', 'lavanda', 'importado'],
    sku: 'SAC-LAV-6',
    inventory: 30,
    isActive: true,
    category: 'Sachês e Perfumadores',
    isBestseller: false,
    isNew: true,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d22de32f823e8158df79',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: '6',
    ghlProductId: '69b5d22d8b341a488c724548',
    name: 'Lenços para Secadora Lavanda — 80un Premium',
    slug: 'lencos-secadora-lavanda-80',
    description:
      'Lenços premium com aroma de lavanda francesa importada. Amaciante, antiestático e perfumado em um único produto. Embalagem reutilizável.',
    price: 4990,
    compareAtPrice: 6990,
    discount: 29,
    images: [
      { url: 'https://ae01.alicdn.com/kf/Sf4ff5c8364334d04a5e1e17d20c7c48f9.jpg', alt: 'Lenços Secadora Lavanda Premium' },
      { url: 'https://ae01.alicdn.com/kf/S844255cf3b1545e79194eaf8d25d07b5T.jpg', alt: 'Lenços Lavanda - detalhes' },
    ],
    tags: ['lenco-secadora', 'lavanda', 'importado', 'premium'],
    sku: 'LEN-LAV-80',
    inventory: 45,
    isActive: true,
    category: 'Lenços para Secadora',
    isBestseller: false,
    isNew: true,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d22d8b341a488c724548',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
  {
    id: '7',
    ghlProductId: '69b5d230632fe53a151821c6',
    name: 'Lenços Amaciantes Ultra Macios para Secadora — 120 Folhas Perfume Fresco',
    slug: 'lencos-amaciantes-ultra-macios-120',
    description:
      'Lenços amaciantes ultra macios para secadora com perfume fresco e duradouro. Antiestáticos de alta performance que deixam suas roupas incrivelmente macias e perfumadas. Fórmula importada de última geração que reduz rugas, elimina estática e facilita o desamassar. Embalagem econômica com 120 folhas.',
    price: 3990,
    compareAtPrice: 5990,
    discount: 33,
    images: [
      { url: 'https://ae01.alicdn.com/kf/S3687a1e3d9074d5796be1dc14efebe83l.jpg', alt: 'Lenços Amaciantes Ultra Macios 120 Folhas' },
      { url: 'https://ae01.alicdn.com/kf/S4f3f91c10e49417e87fa4c802186b638j.jpg', alt: 'Lenços Ultra Macios - detalhes' },
      { url: 'https://ae01.alicdn.com/kf/S36016faac9774c5da28cfd44ce651621c.jpg', alt: 'Lenços Ultra Macios - embalagem' },
      { url: 'https://ae01.alicdn.com/kf/Sfb107beede884524a4ecd0b4d5e676dcy.jpg', alt: 'Lenços Ultra Macios - uso' },
      { url: 'https://ae01.alicdn.com/kf/Sae74f1f565744a3a88c0c666de0eb347x.jpg', alt: 'Lenços Ultra Macios - resultado' },
      { url: 'https://ae01.alicdn.com/kf/S8e6e439a0f714e5bab4ad99d23c32597A.jpg', alt: 'Lenços Ultra Macios - aroma' },
    ],
    tags: ['lenco-secadora', 'importado', 'ultra-macio', 'bestseller'],
    sku: 'LEN-UM-120',
    inventory: 60,
    isActive: true,
    category: 'Lenços para Secadora',
    isBestseller: true,
    isNew: true,
    isOnSale: true,
    checkoutUrl: 'https://checkout.acessoriosdesecadora.com.br/69b5d230632fe53a151821c6',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
  },
]

export const CATEGORIES: Category[] = [
  {
    name: 'Lenços para Secadora',
    slug: 'lencos-para-secadora',
    description: 'Lenços amaciantes importados que perfumam e eliminam a estática das roupas.',
    image: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg',
  },
  {
    name: 'Bolas de Lã',
    slug: 'bolas-de-la',
    description: 'Bolas de lã ecológicas que reduzem o tempo de secagem e amaciam naturalmente.',
    image: 'https://ae01.alicdn.com/kf/Sdf24634297dc45feb45a0e067ec7295dA.jpg',
  },
  {
    name: 'Kits Completos',
    slug: 'kits-completos',
    description: 'Combos com desconto especial para equipar sua lavanderia.',
    image: 'https://ae01.alicdn.com/kf/S3f63326291894788b2389c80acbea051a.jpg',
  },
  {
    name: 'Sachês e Perfumadores',
    slug: 'saches-e-perfumadores',
    description: 'Sachês perfumados importados para armários e gavetas.',
    image: 'https://ae01.alicdn.com/kf/S8a98e94679d14d929688cdd69c4d9f46C.jpg',
  },
  {
    name: 'Outros Acessórios',
    slug: 'outros-acessorios',
    description: 'Acessórios diversos para melhorar sua rotina de lavanderia.',
    image: 'https://ae01.alicdn.com/kf/S0a10b77f102745d49bc0dbcf5fb16a6bo.jpg',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana S.',
    city: 'São Paulo',
    rating: 5,
    text: 'Uso os lenços aromatizados há 6 meses e minhas roupas nunca ficaram tão macias! A eletricidade estática sumiu completamente. Vale muito o investimento.',
  },
  {
    name: 'Fernanda L.',
    city: 'Belo Horizonte',
    rating: 5,
    text: 'As bolas de lã XL são incríveis. Reduziram meu tempo de secagem e ainda posso colocar óleo de lavanda. Recomendo o kit de 3 para começar.',
  },
  {
    name: 'Claudia M.',
    city: 'Curitiba',
    rating: 5,
    text: 'Comprei para a minha filha que tem pele sensível. Os lenços sem perfume são perfeitos, sem reação nenhuma. Já fiz 3 pedidos.',
  },
  {
    name: 'Renata T.',
    city: 'Rio de Janeiro',
    rating: 5,
    text: 'O kit starter foi o melhor presente que me dei. Produto chegou bem embalado, importado de verdade. O site passa total segurança.',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-usar-lenco-secadora',
    title: 'Como Usar Lenços para Secadora: Guia Completo',
    excerpt: 'Saiba a quantidade certa, quando substituir e quais roupas se beneficiam mais.',
    readTime: '5 min',
    date: '2025-03-01',
    author: 'Equipe Acessórios de Secadora',
    image: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg',
    tags: ['guia', 'lencos', 'secadora'],
    content: '',
  },
  {
    slug: 'bolas-la-vs-lencos-secadora',
    title: 'Bolas de Lã vs Lenços: Qual é Melhor para Você?',
    excerpt: 'Comparamos os dois produtos em custo, durabilidade e resultado final.',
    readTime: '7 min',
    date: '2025-02-15',
    author: 'Equipe Acessórios de Secadora',
    image: 'https://ae01.alicdn.com/kf/Sdf24634297dc45feb45a0e067ec7295dA.jpg',
    tags: ['comparativo', 'bolas-la', 'lencos'],
    content: '',
  },
  {
    slug: 'reducao-eletricidade-estatica-roupas',
    title: '5 Formas de Eliminar a Eletricidade Estática das Roupas',
    excerpt: 'A estática nas roupas tem solução simples — e uma delas custa menos de R$ 1 por uso.',
    readTime: '4 min',
    date: '2025-02-01',
    author: 'Equipe Acessórios de Secadora',
    image: 'https://ae01.alicdn.com/kf/S5556677f7af743689143a822efc1e82ev.jpg',
    tags: ['dicas', 'eletricidade-estatica', 'secadora'],
    content: '',
  },
]

export function getProductBySlug(slug: string): SiteProduct | undefined {
  return FALLBACK_PRODUCTS.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): SiteProduct[] {
  return FALLBACK_PRODUCTS.filter((p) => p.category === category)
}

export function getBestsellers(): SiteProduct[] {
  return FALLBACK_PRODUCTS.filter((p) => p.isBestseller)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}
