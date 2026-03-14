'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BLOG_POSTS } from '@/lib/products'
import { Clock, ArrowRight } from 'lucide-react'

export default function BlogPreview() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-dark mb-3">
            Aprenda a Cuidar das Suas Roupas
          </h2>
          <p className="text-text-muted font-body text-lg">
            Dicas de especialistas sobre lavanderia e conservação de tecidos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border-color block h-full"
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
                <div className="p-5">
                  <div className="flex items-center gap-2 text-text-muted text-xs font-body mb-2">
                    <Clock size={12} />
                    <span>{post.readTime} de leitura</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-dark mb-2 group-hover:text-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted font-body text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-teal font-body text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler mais <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
