import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/lib/products'
import { Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Dicas de Lavanderia e Cuidados com Roupas',
  description:
    'Dicas de especialistas sobre lavanderia, secadora e conservação de tecidos. Aprenda a cuidar melhor das suas roupas.',
  alternates: {
    canonical: 'https://acessoriosdesecadora.com.br/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
          Blog
        </h1>
        <p className="text-text-muted font-body text-lg">
          Dicas de especialistas sobre lavanderia e conservação de tecidos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border-color"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image || ''}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-text-muted text-xs font-body mb-3">
                <Clock size={12} />
                <span>{post.readTime} de leitura</span>
                <span>·</span>
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <h2 className="font-display font-bold text-xl text-text-dark mb-2 group-hover:text-teal transition-colors">
                {post.title}
              </h2>
              <p className="text-text-muted font-body text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-teal font-body text-sm font-semibold inline-flex items-center gap-1">
                Ler mais <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
