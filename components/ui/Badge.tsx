'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'bestseller' | 'new' | 'sale' | 'default'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider',
        {
          'bg-teal text-white': variant === 'bestseller',
          'bg-emerald-500 text-white': variant === 'new',
          'bg-red-500 text-white': variant === 'sale',
          'bg-gray-100 text-gray-600': variant === 'default',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
