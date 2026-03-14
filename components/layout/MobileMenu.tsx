'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Menu drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-72 bg-primary z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col pt-20 px-6 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-white/80 hover:text-teal py-3 border-b border-white/10 text-lg font-body transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/produtos"
                onClick={onClose}
                className="mt-4 bg-teal text-white text-center py-3 rounded-lg font-semibold font-body"
              >
                Comprar Agora
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
