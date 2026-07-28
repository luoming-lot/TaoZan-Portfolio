'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 md:py-32', className)}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-zinc-400 max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
