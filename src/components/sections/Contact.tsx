'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Globe } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Section } from '@/components/ui/Section'

const links = [
  { icon: Mail, label: 'Email', value: '2847455825@qq.com', href: 'mailto:2847455825@qq.com' },
  { icon: FaGithub, label: 'GitHub', value: 'luoming-lot', href: 'https://github.com/luoming-lot' },
  { icon: Phone, label: 'Phone', value: '13032334599', href: 'tel:+8613032334599' },
  { icon: Globe, label: 'LinkedIn', value: 'luoming-lot', href: 'https://www.linkedin.com/in/luoming-lot' },
]

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let's connect. Open to opportunities.">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-700/50 transition-all text-center group"
          >
            <link.icon size={18} className="text-zinc-400 group-hover:text-zinc-200 transition-colors" />
            <div>
              <p className="text-xs font-medium text-zinc-300">{link.label}</p>
              <p className="text-[11px] text-zinc-500 mt-0.5 break-all">{link.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
