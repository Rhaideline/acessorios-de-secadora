import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/products'
import { generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo'
import { Clock, ArrowLeft, ChevronRight } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}

  const titleMap: Record<string, string> = {
    'como-usar-lenco-secadora':
      'Como Usar Lenços para Secadora: Guia Completo para Iniciantes',
    'bolas-la-vs-lencos-secadora':
      'Bolas de Lã vs Lenços para Secadora: Qual é Melhor em 2025?',
    'reducao-eletricidade-estatica-roupas':
      'Como Eliminar a Eletricidade Estática das Roupas de Vez',
  }

  const descriptionMap: Record<string, string> = {
    'como-usar-lenco-secadora':
      'Aprenda como usar lenço para secadora da forma correta. Guia completo com quantidade por ciclo, tipos de roupa ideais e dicas avançadas de uso.',
    'bolas-la-vs-lencos-secadora':
      'Comparativo completo entre bolas de lã e lenços para secadora. Descubra qual é melhor em custo, durabilidade, resultado e sustentabilidade.',
    'reducao-eletricidade-estatica-roupas':
      'Descubra 5 métodos comprovados para eliminar a eletricidade estática das roupas na secadora. Dicas práticas e acessíveis.',
  }

  const keywordsMap: Record<string, string[]> = {
    'como-usar-lenco-secadora': [
      'como usar lenço para secadora',
      'lenço para secadora como funciona',
      'dryer sheets como usar',
      'lenço amaciante secadora',
    ],
    'bolas-la-vs-lencos-secadora': [
      'bolas de la para secadora',
      'dryer balls vs dryer sheets',
      'bolas de lã ou lenços secadora',
      'melhor acessório secadora',
    ],
    'reducao-eletricidade-estatica-roupas': [
      'eletricidade estatica roupa secadora',
      'como tirar estática da roupa',
      'roupa grudando no corpo',
      'eliminar estática secadora',
    ],
  }

  return {
    title: titleMap[params.slug] || post.title,
    description: descriptionMap[params.slug] || post.excerpt,
    keywords: keywordsMap[params.slug] || post.tags,
    alternates: {
      canonical: `https://acessoriosdesecadora.com.br/blog/${params.slug}`,
    },
    openGraph: {
      title: titleMap[params.slug] || post.title,
      description: descriptionMap[params.slug] || post.excerpt,
      url: `https://acessoriosdesecadora.com.br/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : [],
    },
  }
}

function ArticleComoUsarLenco() {
  return (
    <>
      <p className="text-text-muted font-body text-lg leading-relaxed mb-6">
        Se você acabou de comprar sua primeira secadora — ou já tem uma há anos, mas nunca usou acessórios — este guia é para você. Vamos explicar tudo sobre os{' '}
        <strong className="text-text-dark">lenços para secadora</strong> (também chamados de <em>dryer sheets</em>): o que são, como funcionam, a quantidade certa por ciclo e muito mais.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        O Que é um Lenço para Secadora?
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Um lenço para secadora é uma folha fina de tecido não-tecido, impregnada com agentes amaciantes e compostos antiestáticos. Ele é colocado junto com as roupas dentro do tambor da secadora antes de iniciar o ciclo de secagem.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Originários dos Estados Unidos, os <em>dryer sheets</em> são extremamente populares no exterior e agora estão conquistando o público brasileiro. Eles substituem o amaciante líquido tradicional com diversas vantagens: não deixam resíduos, perfumam de forma uniforme e eliminam a temida eletricidade estática.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Na nossa loja, você encontra lenços importados de alta qualidade, com fragrâncias que duram semanas.{' '}
        <Link href="/produtos" className="text-teal font-semibold hover:underline">
          Confira nossos lenços para secadora
        </Link>.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Como o Lenço para Secadora Funciona?
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        O funcionamento é surpreendentemente simples. Quando a secadora aquece o ar e o tambor começa a girar, o calor derrete lentamente os agentes amaciantes presentes na superfície do lenço. Esses compostos são então transferidos para as fibras das roupas por meio do movimento de rotação.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Esse processo faz três coisas ao mesmo tempo:
      </p>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li><strong className="text-text-dark">Amaciamento:</strong> os agentes lubrificam as fibras dos tecidos, deixando-as mais macias e flexíveis ao toque.</li>
        <li><strong className="text-text-dark">Redução da estática:</strong> os compostos antiestáticos neutralizam as cargas elétricas geradas pelo atrito entre os tecidos durante a secagem.</li>
        <li><strong className="text-text-dark">Perfume duradouro:</strong> a fragrância é encapsulada nas fibras e liberada gradualmente, mantendo as roupas cheirosas por dias — até semanas.</li>
      </ul>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Diferentemente do amaciante líquido, que pode acumular resíduos na máquina de lavar e reduzir a absorção de toalhas, o lenço para secadora age de forma mais leve e uniforme, sem comprometer a capacidade de absorção dos tecidos quando usado na quantidade correta.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Quantidade Certa de Lenços por Ciclo
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Uma das dúvidas mais comuns é: <strong className="text-text-dark">&quot;Quantos lenços devo usar por vez?&quot;</strong> A resposta depende do tamanho da carga, mas a regra geral é bastante simples:
      </p>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li><strong className="text-text-dark">Carga pequena (até 3 kg):</strong> 1 lenço é suficiente.</li>
        <li><strong className="text-text-dark">Carga média (3 a 5 kg):</strong> 1 a 2 lenços.</li>
        <li><strong className="text-text-dark">Carga grande (acima de 5 kg):</strong> 2 a 3 lenços.</li>
      </ul>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Usar lenços demais não traz benefícios extras — pelo contrário, pode deixar um leve resíduo nos tecidos. O segredo está em dosar corretamente. Para cargas muito grandes, como edredons ou cobertores, 2 lenços distribuídos em pontos diferentes do tambor funcionam perfeitamente.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        <strong className="text-text-dark">Dica bônus:</strong> se você prefere um perfume mais sutil, pode cortar o lenço ao meio e usar apenas metade por ciclo. Isso também rende mais o produto e economiza no longo prazo.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Quais Tipos de Roupa Se Beneficiam Mais?
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Os lenços para secadora funcionam bem com a maioria dos tecidos, mas alguns se beneficiam especialmente:
      </p>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li><strong className="text-text-dark">Roupas de algodão:</strong> ficam incrivelmente macias e perfumadas. Camisetas, lençóis e panos de prato são excelentes candidatos.</li>
        <li><strong className="text-text-dark">Roupas sintéticas:</strong> nylon, poliéster e lycra acumulam muita estática. O lenço resolve isso completamente.</li>
        <li><strong className="text-text-dark">Toalhas:</strong> ficam fofas como de hotel, especialmente se combinadas com a secagem completa no calor médio.</li>
        <li><strong className="text-text-dark">Roupas de cama:</strong> lençóis e fronhas saem lisinhos, perfumados e sem estática — prontos para arrumar a cama.</li>
      </ul>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        <strong className="text-text-dark">Atenção:</strong> evite usar lenços com roupas esportivas de alta performance (tecidos que absorvem suor), fraldas de pano e tecidos à prova d&apos;água. Os agentes amaciantes podem comprometer a funcionalidade desses materiais.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Dicas Avançadas de Uso
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Depois de dominar o básico, experimente essas estratégias para extrair o máximo dos seus lenços:
      </p>
      <ol className="list-decimal list-inside text-text-muted font-body leading-relaxed mb-4 space-y-3 pl-4">
        <li><strong className="text-text-dark">Reutilize lenços usados para limpar:</strong> após o ciclo, o lenço usado ainda serve para limpar o filtro de fiapos da secadora, dar brilho em superfícies de inox ou até remover pelos de animais do sofá.</li>
        <li><strong className="text-text-dark">Use em gavetas e armários:</strong> coloque um lenço novo entre as roupas dobradas para manter o perfume por mais tempo. Funciona como um sachê improvisado.</li>
        <li><strong className="text-text-dark">Combine com bolas de lã:</strong> para quem quer o melhor dos dois mundos, use 1 lenço junto com 3 bolas de lã. As bolas aceleram a secagem e o lenço adiciona perfume. Veja nossos{' '}
          <Link href="/produtos" className="text-teal font-semibold hover:underline">kits combinados</Link>.
        </li>
        <li><strong className="text-text-dark">Coloque nos sapatos:</strong> um lenço dentro de cada sapato overnight elimina odores e deixa um cheiro agradável.</li>
        <li><strong className="text-text-dark">Perfume a mala de viagem:</strong> antes de guardar sua mala, coloque 2 lenços dentro para manter o interior fresco até a próxima viagem.</li>
      </ol>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Perguntas Frequentes (FAQ)
      </h2>
      <div className="space-y-6 mb-6">
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            O lenço para secadora substitui o amaciante?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Sim, na maioria dos casos. O lenço para secadora cumpre a função de amaciar, perfumar e reduzir a estática. Se você já usa lenço na secadora, pode pular o amaciante líquido na máquina de lavar — especialmente em toalhas, que ficam mais absorventes sem ele.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            Posso reutilizar o lenço?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Alguns lenços podem ser reutilizados 1 a 2 vezes antes de perderem a eficácia. Você vai perceber que o perfume fica mais fraco e a textura do lenço muda. Quando isso acontecer, descarte-o e use um novo. Nossos lenços premium são formulados para entrega máxima em um único uso, mas aguente bem uma segunda rodada em cargas pequenas.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            Os lenços funcionam em secadoras a gás e elétricas?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Sim. Os lenços para secadora funcionam em qualquer tipo de secadora com tambor rotativo — seja a gás, elétrica, de condensação ou por bomba de calor. Basta colocar o lenço junto com as roupas no início do ciclo.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            Os lenços são seguros para bebês?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Temos opções hipoalergênicas e sem perfume, especialmente formuladas para peles sensíveis e roupas de bebê. Consulte a{' '}
            <Link href="/produtos" className="text-teal font-semibold hover:underline">nossa linha de produtos</Link>{' '}
            para encontrar a opção ideal.
          </p>
        </div>
      </div>

      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 mt-10">
        <p className="font-display text-lg font-bold text-text-dark mb-2">
          Pronto para experimentar?
        </p>
        <p className="text-text-muted font-body leading-relaxed mb-4">
          Na Acessórios de Secadora, temos lenços importados das melhores marcas americanas, com frete grátis para todo o Brasil em compras acima de R$199.
        </p>
        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold px-6 py-3 rounded-xl hover:bg-teal/90 transition-colors"
        >
          Ver Lenços para Secadora <ChevronRight size={16} />
        </Link>
      </div>
    </>
  )
}

function ArticleBolasLaVsLencos() {
  return (
    <>
      <p className="text-text-muted font-body text-lg leading-relaxed mb-6">
        Se você está montando sua rotina de lavanderia ou quer otimizar o uso da sua secadora, provavelmente já esbarrou nessa dúvida:{' '}
        <strong className="text-text-dark">bolas de lã ou lenços para secadora?</strong> Ambos são acessórios populares nos Estados Unidos e Europa, e cada um tem vantagens claras. Neste comparativo completo, vamos analisar tudo para você tomar a melhor decisão.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        O Que São Lenços para Secadora?
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Os lenços para secadora (<em>dryer sheets</em>) são folhas finas de tecido não-tecido impregnadas com agentes amaciantes, antiestáticos e fragrâncias. Você coloca um ou dois dentro do tambor da secadora junto com as roupas, e o calor do ciclo libera esses compostos sobre os tecidos.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        O resultado? Roupas macias, perfumadas e sem estática. Os lenços são descartáveis (embora muitos possam ser reutilizados 1-2 vezes), práticos e disponíveis em diversas fragrâncias — de lavanda a brisa oceânica.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Na Acessórios de Secadora, oferecemos lenços importados das marcas mais respeitadas do mercado americano.{' '}
        <Link href="/produtos" className="text-teal font-semibold hover:underline">
          Veja nossa seleção completa
        </Link>.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        O Que São Bolas de Lã para Secadora?
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        As bolas de lã para secadora (<em>dryer balls</em>) são esferas compactas feitas de lã de ovelha 100% natural, com tamanho de uma bola de tênis. Você coloca de 3 a 6 bolas no tambor e elas trabalham mecanicamente: conforme a secadora gira, as bolas se movem entre as roupas, separando-as e criando espaço para o ar quente circular melhor.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Esse movimento mecânico traz benefícios surpreendentes:
      </p>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li><strong className="text-text-dark">Redução do tempo de secagem:</strong> até 25% mais rápido, pois o ar circula melhor entre as peças.</li>
        <li><strong className="text-text-dark">Amaciamento natural:</strong> o atrito suave das bolas com as fibras dos tecidos amaciante-os sem nenhum produto químico.</li>
        <li><strong className="text-text-dark">Eliminação da estática:</strong> a lã absorve parte da umidade e reduz o atrito elétrico entre os tecidos.</li>
        <li><strong className="text-text-dark">Durabilidade excepcional:</strong> cada bola dura mais de 1.000 ciclos — o equivalente a 2 a 4 anos de uso regular.</li>
      </ul>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Por não conterem químicos ou fragrâncias, são ideais para pessoas com pele sensível, alergias, bebês e famílias com pets.{' '}
        <Link href="/produtos" className="text-teal font-semibold hover:underline">
          Conheça nossas bolas de lã XL
        </Link>.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Tabela Comparativa: Bolas de Lã vs Lenços
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-border-color">
          <thead>
            <tr className="bg-teal/5">
              <th className="text-left font-display font-bold text-text-dark px-4 py-3 border-b border-border-color">Critério</th>
              <th className="text-left font-display font-bold text-text-dark px-4 py-3 border-b border-border-color">Bolas de Lã</th>
              <th className="text-left font-display font-bold text-text-dark px-4 py-3 border-b border-border-color">Lenços para Secadora</th>
            </tr>
          </thead>
          <tbody className="font-body text-text-muted">
            <tr className="border-b border-border-color">
              <td className="px-4 py-3 font-semibold text-text-dark">Custo por uso</td>
              <td className="px-4 py-3">~R$ 0,04 por ciclo</td>
              <td className="px-4 py-3">~R$ 0,80 a R$ 1,50 por ciclo</td>
            </tr>
            <tr className="border-b border-border-color bg-gray-50/50">
              <td className="px-4 py-3 font-semibold text-text-dark">Durabilidade</td>
              <td className="px-4 py-3">+1.000 ciclos (2-4 anos)</td>
              <td className="px-4 py-3">Descartável (1-2 usos)</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-4 py-3 font-semibold text-text-dark">Perfume</td>
              <td className="px-4 py-3">Sem perfume (natural)</td>
              <td className="px-4 py-3">Diversas fragrâncias</td>
            </tr>
            <tr className="border-b border-border-color bg-gray-50/50">
              <td className="px-4 py-3 font-semibold text-text-dark">Amaciamento</td>
              <td className="px-4 py-3">Mecânico (sem químicos)</td>
              <td className="px-4 py-3">Químico (agentes amaciantes)</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-4 py-3 font-semibold text-text-dark">Redução de estática</td>
              <td className="px-4 py-3">Boa</td>
              <td className="px-4 py-3">Excelente</td>
            </tr>
            <tr className="border-b border-border-color bg-gray-50/50">
              <td className="px-4 py-3 font-semibold text-text-dark">Redução do tempo de secagem</td>
              <td className="px-4 py-3">Sim (até 25%)</td>
              <td className="px-4 py-3">Não</td>
            </tr>
            <tr className="border-b border-border-color">
              <td className="px-4 py-3 font-semibold text-text-dark">Peles sensíveis / bebês</td>
              <td className="px-4 py-3">Ideal</td>
              <td className="px-4 py-3">Versões hipoalergênicas</td>
            </tr>
            <tr className="border-b border-border-color bg-gray-50/50">
              <td className="px-4 py-3 font-semibold text-text-dark">Sustentabilidade</td>
              <td className="px-4 py-3">100% natural e compostável</td>
              <td className="px-4 py-3">Gera resíduo a cada uso</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-text-dark">Praticidade</td>
              <td className="px-4 py-3">Alta (não precisa repor)</td>
              <td className="px-4 py-3">Alta (só jogar no tambor)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Prós e Contras de Cada Opção
      </h2>

      <h3 className="font-display text-xl font-bold text-text-dark mt-6 mb-3">
        Bolas de Lã: Prós
      </h3>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li>Economia absurda no longo prazo — um kit de 6 bolas custa menos que 2 caixas de lenços e dura anos.</li>
        <li>100% naturais, sem químicos, hipoalergênicas e compostáveis ao final da vida útil.</li>
        <li>Reduzem o tempo de secagem em até 25%, economizando energia elétrica a cada ciclo.</li>
        <li>Deixam as roupas macias de forma natural, sem resíduos nas fibras.</li>
        <li>Você pode pingar algumas gotas de óleo essencial nas bolas para adicionar seu próprio aroma personalizado.</li>
      </ul>

      <h3 className="font-display text-xl font-bold text-text-dark mt-6 mb-3">
        Bolas de Lã: Contras
      </h3>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li>Não perfumam as roupas nativamente (a menos que você use óleos essenciais).</li>
        <li>A redução de estática, embora eficaz, pode ser inferior à dos lenços em climas muito secos.</li>
        <li>Produzem um leve ruído durante o ciclo de secagem (algumas pessoas estranham no início).</li>
      </ul>

      <h3 className="font-display text-xl font-bold text-text-dark mt-6 mb-3">
        Lenços para Secadora: Prós
      </h3>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li>Perfume intenso e duradouro, com dezenas de fragrâncias disponíveis.</li>
        <li>Excelentes para eliminar estática, especialmente em tecidos sintéticos.</li>
        <li>Extremamente práticos — basta pegar um lenço e jogar no tambor.</li>
        <li>Os lenços usados têm múltiplas utilidades: limpar pó, espantar insetos, perfumar gavetas.</li>
        <li>Ideais para quem prioriza roupas perfumadas acima de tudo.</li>
      </ul>

      <h3 className="font-display text-xl font-bold text-text-dark mt-6 mb-3">
        Lenços para Secadora: Contras
      </h3>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-4 space-y-2 pl-4">
        <li>Custo recorrente — você precisa comprar regularmente.</li>
        <li>Geram resíduo a cada uso (não são a opção mais ecológica).</li>
        <li>Podem reduzir a absorção de toalhas se usados em excesso.</li>
        <li>Algumas fragrâncias podem irritar peles muito sensíveis (opte por versões sem perfume nesses casos).</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Qual Escolher? Depende do Seu Perfil
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Não existe uma resposta única. A melhor escolha depende das suas prioridades:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-border-color rounded-xl p-6">
          <h3 className="font-display text-lg font-bold text-text-dark mb-3">Escolha Bolas de Lã se você...</h3>
          <ul className="list-disc list-inside text-text-muted font-body leading-relaxed space-y-2 pl-2">
            <li>Prioriza economia e sustentabilidade</li>
            <li>Tem pele sensível ou bebês em casa</li>
            <li>Quer reduzir o tempo (e custo) de secagem</li>
            <li>Prefere produtos naturais sem químicos</li>
            <li>Não se importa com perfume nas roupas</li>
          </ul>
        </div>
        <div className="bg-white border border-border-color rounded-xl p-6">
          <h3 className="font-display text-lg font-bold text-text-dark mb-3">Escolha Lenços se você...</h3>
          <ul className="list-disc list-inside text-text-muted font-body leading-relaxed space-y-2 pl-2">
            <li>Ama roupas perfumadas com fragrâncias intensas</li>
            <li>Lida com muita estática (clima seco, tecidos sintéticos)</li>
            <li>Busca praticidade máxima no dia a dia</li>
            <li>Gosta de reutilizar os lenços para limpeza doméstica</li>
            <li>Não se importa com custo recorrente</li>
          </ul>
        </div>
      </div>

      <p className="text-text-muted font-body leading-relaxed mb-4">
        <strong className="text-text-dark">A nossa recomendação?</strong> Experimente os dois. Muitos dos nossos clientes combinam bolas de lã com um único lenço por ciclo. As bolas cuidam do amaciamento e da secagem rápida, enquanto o lenço adiciona o toque de perfume. É o melhor dos dois mundos — e o custo por ciclo fica mínimo.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Temos kits combinados na nossa loja que facilitam essa experiência.{' '}
        <Link href="/produtos" className="text-teal font-semibold hover:underline">
          Confira os kits e economize
        </Link>.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Conclusão
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Tanto as bolas de lã quanto os lenços para secadora são excelentes acessórios que transformam a experiência de secar roupas. As bolas ganham no quesito economia e sustentabilidade; os lenços vencem em perfume e controle de estática.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Se você está começando agora, sugerimos um kit combinado para descobrir sua preferência pessoal. E lembre-se: qualquer um dos dois é infinitamente melhor do que secar roupas sem nenhum acessório — suas roupas (e seu nariz) vão agradecer.
      </p>

      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 mt-10">
        <p className="font-display text-lg font-bold text-text-dark mb-2">
          Experimente sem risco
        </p>
        <p className="text-text-muted font-body leading-relaxed mb-4">
          Todos os nossos produtos vêm com garantia de satisfação. Se não gostar, devolvemos seu dinheiro. Entrega para todo o Brasil com frete grátis acima de R$199.
        </p>
        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold px-6 py-3 rounded-xl hover:bg-teal/90 transition-colors"
        >
          Ver Todos os Produtos <ChevronRight size={16} />
        </Link>
      </div>
    </>
  )
}

function ArticleEletricidadeEstatica() {
  return (
    <>
      <p className="text-text-muted font-body text-lg leading-relaxed mb-6">
        Sabe aquela sensação irritante de vestir uma blusa e ela grudar no corpo inteiro? Ou tirar a roupa da secadora e levar um choquinho? Isso é a{' '}
        <strong className="text-text-dark">eletricidade estática</strong>, e ela tem solução. Neste artigo, vamos explicar por que acontece e mostrar 5 métodos comprovados para eliminar esse problema de vez.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Por Que a Eletricidade Estática Acontece nas Roupas?
      </h2>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        A eletricidade estática é gerada pelo atrito entre os tecidos — especialmente dentro da secadora, onde as roupas ficam girando e se esfregando umas nas outras por longos períodos em um ambiente quente e seco.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Quando dois materiais diferentes se atritam, elétrons são transferidos de um para o outro. Isso cria um desequilíbrio de cargas elétricas: um tecido fica carregado positivamente e outro negativamente. O resultado? Eles se atraem, grudam entre si e podem causar pequenos choques ao toque.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Alguns fatores pioram o problema:
      </p>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-6 space-y-2 pl-4">
        <li><strong className="text-text-dark">Tecidos sintéticos:</strong> poliéster, nylon e acrílico são campeões em acumular carga estática.</li>
        <li><strong className="text-text-dark">Clima seco:</strong> a umidade do ar ajuda a dissipar a estática. Em dias secos ou em ambientes com ar-condicionado, o problema se intensifica.</li>
        <li><strong className="text-text-dark">Secagem excessiva:</strong> deixar as roupas na secadora além do necessário resseca os tecidos e aumenta o atrito.</li>
        <li><strong className="text-text-dark">Falta de acessórios:</strong> secar roupas sem lenços ou bolas de lã é a receita certa para roupas cheias de estática.</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        5 Métodos Comprovados para Eliminar a Estática
      </h2>

      <h3 className="font-display text-xl font-bold text-text-dark mt-8 mb-3">
        1. Use Lenços para Secadora (Dryer Sheets)
      </h3>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Este é o método mais popular e eficaz do mundo. Os lenços para secadora contêm compostos antiestáticos que são liberados pelo calor e revestem as fibras dos tecidos, neutralizando as cargas elétricas durante a secagem.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Basta colocar 1-2 lenços no tambor junto com as roupas. Além de eliminar a estática, eles amaciam os tecidos e perfumam as roupas. É a solução mais prática e confiável disponível.{' '}
        <Link href="/produtos" className="text-teal font-semibold hover:underline">
          Veja nossos lenços antiestáticos importados
        </Link>.
      </p>

      <h3 className="font-display text-xl font-bold text-text-dark mt-8 mb-3">
        2. Aposte nas Bolas de Lã
      </h3>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        As bolas de lã para secadora combatem a estática de forma natural. Elas se movem entre as roupas durante a secagem, separando os tecidos e impedindo que fiquem grudados. A lã natural também absorve parte da umidade, o que ajuda a manter um equilíbrio que reduz o acúmulo de cargas elétricas.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Use 4 a 6 bolas de lã XL por ciclo para melhores resultados. Além de reduzir a estática, elas diminuem o tempo de secagem em até 25%.{' '}
        <Link href="/produtos" className="text-teal font-semibold hover:underline">
          Conheça nossas bolas de lã XL
        </Link>.
      </p>

      <h3 className="font-display text-xl font-bold text-text-dark mt-8 mb-3">
        3. Não Seque Demais
      </h3>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Este é um erro comum que quase todo mundo comete. Secar as roupas além do ponto ideal remove toda a umidade residual dos tecidos, criando o ambiente perfeito para o acúmulo de estática.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        A solução é simples: retire as roupas da secadora quando ainda estiverem <em>levemente</em> úmidas — aquele ponto em que estão praticamente secas, mas não completamente crocantes. Se sua secadora tem sensor de umidade, configure-o para &quot;quase seco&quot; ou &quot;levemente úmido&quot; ao invés de &quot;extra seco&quot;.
      </p>

      <h3 className="font-display text-xl font-bold text-text-dark mt-8 mb-3">
        4. Separe Sintéticos de Naturais
      </h3>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        O atrito entre tecidos <em>diferentes</em> é o principal gerador de estática. Quando você mistura algodão com poliéster na mesma carga, as fibras se esfregam e transferem elétrons com muita facilidade.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        Sempre que possível, separe suas roupas por tipo de tecido. Seque algodão com algodão e sintéticos com sintéticos. Isso reduz drasticamente o atrito entre materiais diferentes e, consequentemente, a estática gerada.
      </p>

      <h3 className="font-display text-xl font-bold text-text-dark mt-8 mb-3">
        5. Aumente a Umidade do Ambiente
      </h3>
      <p className="text-text-muted font-body leading-relaxed mb-4">
        A umidade do ar é a inimiga natural da eletricidade estática. Em dias muito secos ou em ambientes com ar-condicionado, considere usar um umidificador no cômodo onde você guarda ou veste as roupas.
      </p>
      <p className="text-text-muted font-body leading-relaxed mb-6">
        Uma dica caseira rápida: borrife uma quantidade mínima de água (usando um spray) na parte interna das roupas que estão grudando. A umidade dissipa a carga estática instantaneamente. Mas cuidado para não molhar demais — o objetivo é apenas umedecer levemente.
      </p>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Dicas Extras para o Dia a Dia
      </h2>
      <ul className="list-disc list-inside text-text-muted font-body leading-relaxed mb-6 space-y-3 pl-4">
        <li><strong className="text-text-dark">Passe a mão úmida:</strong> se a roupa já está no corpo e grudando, passe as mãos levemente úmidas sobre o tecido. A umidade descarrega a estática na hora.</li>
        <li><strong className="text-text-dark">Use um cabide de metal:</strong> passe um cabide de arame pelo interior da roupa antes de vestir. O metal conduz a eletricidade e remove a carga acumulada.</li>
        <li><strong className="text-text-dark">Creme hidratante na pele:</strong> pele seca conduz mais estática. Passar hidratante antes de se vestir cria uma barreira que reduz o acúmulo de cargas.</li>
        <li><strong className="text-text-dark">Alfinete de segurança:</strong> prenda um pequeno alfinete de metal na costura interna da roupa. O metal atrai e descarrega continuamente a estática acumulada. Ninguém vai ver, e funciona surpreendentemente bem.</li>
        <li><strong className="text-text-dark">Toque em metal:</strong> antes de vestir a roupa problemática, toque em um objeto metálico (como uma maçaneta ou torneira). Isso descarrega sua própria estática corporal e reduz o efeito nas roupas.</li>
      </ul>

      <h2 className="font-display text-2xl font-bold text-text-dark mt-10 mb-4">
        Perguntas Frequentes (FAQ)
      </h2>
      <div className="space-y-6 mb-6">
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            A eletricidade estática pode danificar as roupas?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Não diretamente. A estática não danifica os tecidos, mas pode causar desconforto, fazer as roupas grudarem no corpo de forma pouco elegante e atrair poeira e fiapos com mais facilidade. A longo prazo, o excesso de atrito (que causa a estática) pode desgastar fibras sintéticas mais rapidamente.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            Qual método é mais eficaz: bolas de lã ou lenços?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Para combater especificamente a estática, os lenços para secadora levam uma leve vantagem, pois seus compostos antiestáticos são formulados exatamente para isso. As bolas de lã também funcionam bem, mas de forma mais suave. Para resultados máximos, combine os dois:{' '}
            <Link href="/produtos" className="text-teal font-semibold hover:underline">
              veja nossos kits combinados
            </Link>.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-text-dark mb-2">
            Roupas secas no varal também acumulam estática?
          </h3>
          <p className="text-text-muted font-body leading-relaxed">
            Muito menos. A secagem ao ar livre mantém a umidade residual nos tecidos e não gera o mesmo nível de atrito que a secadora. No entanto, em dias muito secos e ventosos, alguma estática pode se acumular — especialmente em tecidos 100% sintéticos.
          </p>
        </div>
      </div>

      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6 mt-10">
        <p className="font-display text-lg font-bold text-text-dark mb-2">
          Chega de choques e roupas grudando!
        </p>
        <p className="text-text-muted font-body leading-relaxed mb-4">
          Na Acessórios de Secadora, temos tudo o que você precisa para eliminar a eletricidade estática de vez. Lenços antiestáticos, bolas de lã XL e kits combinados — com entrega para todo o Brasil.
        </p>
        <Link
          href="/produtos"
          className="inline-flex items-center gap-2 bg-teal text-white font-body font-semibold px-6 py-3 rounded-xl hover:bg-teal/90 transition-colors"
        >
          Ver Soluções Antiestáticas <ChevronRight size={16} />
        </Link>
      </div>
    </>
  )
}

export default function BlogArticlePage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const titleMap: Record<string, string> = {
    'como-usar-lenco-secadora':
      'Como Usar Lenços para Secadora: Guia Completo para Iniciantes',
    'bolas-la-vs-lencos-secadora':
      'Bolas de Lã vs Lenços para Secadora: Qual é Melhor em 2025?',
    'reducao-eletricidade-estatica-roupas':
      'Como Eliminar a Eletricidade Estática das Roupas de Vez',
  }

  const articleTitle = titleMap[params.slug] || post.title

  const articleJsonLd = generateArticleJsonLd({
    ...post,
    title: articleTitle,
  })
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: articleTitle, url: `/blog/${params.slug}` },
  ])

  function renderArticleContent() {
    switch (params.slug) {
      case 'como-usar-lenco-secadora':
        return <ArticleComoUsarLenco />
      case 'bolas-la-vs-lencos-secadora':
        return <ArticleBolasLaVsLencos />
      case 'reducao-eletricidade-estatica-roupas':
        return <ArticleEletricidadeEstatica />
      default:
        notFound()
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm font-body text-text-muted mb-8">
          <Link href="/" className="hover:text-teal transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/blog" className="hover:text-teal transition-colors">
            Blog
          </Link>
          <ChevronRight size={14} />
          <span className="text-text-dark truncate">{articleTitle}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-teal font-body text-sm font-semibold hover:underline mb-6"
        >
          <ArrowLeft size={14} />
          Voltar ao Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark leading-tight mb-4">
            {articleTitle}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-text-muted font-body text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} de leitura
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </header>

        {/* Featured image */}
        {post.image && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.image}
              alt={articleTitle}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal/10 text-teal font-body text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Article content */}
        <div className="prose-custom">
          {renderArticleContent()}
        </div>

        {/* Author box */}
        <div className="mt-12 pt-8 border-t border-border-color">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
              <span className="font-display text-teal font-bold text-lg">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-display font-bold text-text-dark">
                {post.author}
              </p>
              <p className="text-text-muted font-body text-sm">
                Especialistas em cuidados com roupas e acessórios para secadora.
              </p>
            </div>
          </div>
        </div>

        {/* Related posts */}
        <div className="mt-12 pt-8 border-t border-border-color">
          <h2 className="font-display text-xl font-bold text-text-dark mb-6">
            Leia Também
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BLOG_POSTS.filter((p) => p.slug !== params.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white border border-border-color rounded-xl p-4 hover:shadow-md transition-all"
                >
                  <h3 className="font-display font-bold text-text-dark group-hover:text-teal transition-colors mb-1">
                    {relatedPost.title}
                  </h3>
                  <p className="text-text-muted font-body text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </>
  )
}
