import { createGHLProduct, CreateProductInput } from '../lib/ghl'

const PRODUTOS_SEED: CreateProductInput[] = [
  {
    name: 'Lenços Aromatizados para Secadora — 120 Folhas',
    slug: 'lencos-aromatizados-secadora-120',
    description:
      'Lenços aromatizados para secadora importados. Amaciante de tecidos em folha que elimina a eletricidade estática, amacia as roupas e deixa um aroma suave e duradouro. Cada folha pode ser reutilizada até 3 vezes. Fórmula hipoalergênica, segura para crianças e pets. Embalagem com 120 folhas de alta qualidade.',
    price: 8990,
    compareAtPrice: 12990,
    tags: ['lenco-secadora', 'importado', 'bestseller', 'aromatizado'],
    images: [
      { url: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S5556677f7af743689143a822efc1e82ev.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S8a98e94679d14d929688cdd69c4d9f46C.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S3f63326291894788b2389c80acbea051a.jpg' },
      { url: 'https://ae01.alicdn.com/kf/Sf4ff5c8364334d04a5e1e17d20c7c48f9.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S844255cf3b1545e79194eaf8d25d07b5T.jpg' },
    ],
    sku: 'LEN-AR-120',
  },
  {
    name: 'Bolas de Lã Orgânica para Secadora — Kit 3un XL',
    slug: 'bolas-la-organica-secadora-kit-3',
    description:
      'Bolas de lã orgânica XL de 7cm importadas. Amaciante de tecido natural e reutilizável que reduz o tempo de secagem em até 25%, elimina a necessidade de lenços descartáveis e dura mais de 1.000 ciclos. Ecológicas, sem químicos e 100% naturais.',
    price: 5990,
    compareAtPrice: 8990,
    tags: ['bola-la', 'dryer-ball', 'importado', 'ecologico', 'bestseller'],
    images: [
      { url: 'https://ae01.alicdn.com/kf/Sdf24634297dc45feb45a0e067ec7295dA.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S02902ebc961a47f5b2d1d0e8f572549dp.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S0a10b77f102745d49bc0dbcf5fb16a6bo.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S352d43fbad114efe823dccf4e5bb8377B.jpg' },
      { url: 'https://ae01.alicdn.com/kf/S9c31c519777d431198444705a3e2ed6ev.jpg' },
      { url: 'https://ae01.alicdn.com/kf/Sd1f59e61e78c4a1496458cb0457de848g.jpg' },
    ],
    sku: 'BLA-XL-3',
  },
  {
    name: 'Lenços para Secadora Sem Perfume — 120un Hipoalergênico',
    slug: 'lencos-secadora-sem-perfume-120',
    description:
      'Para peles sensíveis. Amaciante sem fragrância, sem corantes artificiais e sem alérgenos. Dermatologicamente testado. Ideal para bebês, gestantes e pessoas com alergias.',
    price: 6490,
    compareAtPrice: 8990,
    tags: ['lenco-secadora', 'sem-perfume', 'pele-sensivel', 'importado'],
    images: [
      { url: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg' },
    ],
    sku: 'LEN-UN-120',
  },
  {
    name: 'Kit Starter Lavanderia Importada — Combo Completo',
    slug: 'kit-starter-lavanderia',
    description:
      'Kit completo para quem quer o melhor resultado na secadora: 1 pacote de lenços aromatizados 120un + 3 bolas de lã XL + 1 sachê de lavanda para o armário. Economize comprando o kit completo.',
    price: 16990,
    compareAtPrice: 21990,
    tags: ['kit', 'combo', 'importado', 'oferta', 'bestseller'],
    images: [
      { url: 'https://ae01.alicdn.com/kf/S61d213358fd1488d946fda18fecfbe89y.jpg' },
      { url: 'https://ae01.alicdn.com/kf/Sdf24634297dc45feb45a0e067ec7295dA.jpg' },
    ],
    sku: 'KIT-STR-01',
  },
  {
    name: 'Sachê Perfumado para Armário — Lavanda Francesa',
    slug: 'sache-perfumado-lavanda-francesa',
    description:
      'Sachê perfumado importado com óleo essencial de lavanda francesa. Deixa seu armário e gavetas com aroma fresco por até 60 dias. Afasta traças naturalmente. Caixa com 6 sachês.',
    price: 5990,
    compareAtPrice: 7990,
    tags: ['sache', 'armario', 'lavanda', 'importado'],
    images: [
      { url: 'https://ae01.alicdn.com/kf/S8a98e94679d14d929688cdd69c4d9f46C.jpg' },
    ],
    sku: 'SAC-LAV-6',
  },
  {
    name: 'Lenços para Secadora Lavanda — 80un Premium',
    slug: 'lencos-secadora-lavanda-80',
    description:
      'Lenços premium com aroma de lavanda francesa importada. Amaciante, antiestático e perfumado em um único produto. Embalagem reutilizável.',
    price: 4990,
    compareAtPrice: 6990,
    tags: ['lenco-secadora', 'lavanda', 'importado', 'premium'],
    images: [
      { url: 'https://ae01.alicdn.com/kf/Sf4ff5c8364334d04a5e1e17d20c7c48f9.jpg' },
    ],
    sku: 'LEN-LAV-80',
  },
]

async function seed() {
  console.log('Seeding products to GHL...\n')

  for (const product of PRODUTOS_SEED) {
    console.log(`Creating: ${product.name}`)
    const result = await createGHLProduct(product)
    if (result) {
      console.log(`  ✓ Created with ID: ${result.id}`)
    } else {
      console.log(`  ✗ Failed to create`)
    }
  }

  console.log('\nDone!')
}

seed().catch(console.error)
