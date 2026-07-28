'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Code2, Radio, Server, Headphones, Download } from 'lucide-react'
import { Section } from '@/components/ui/Section'

const infoCards = [
  { icon: GraduationCap, label: '2027 Graduate', value: 'IoT Engineering' },
  { icon: MapPin, label: 'University', value: '重庆机电职业技术大学 (Chongqing Polytechnic University of Mechatronics)' },
]

const focusCards = [
  { icon: Code2, label: 'Web Development', desc: 'React · Next.js · TypeScript' },
  { icon: Radio, label: 'IoT Platform', desc: 'ESP32 · MQTT · Arduino' },
  { icon: Server, label: 'Backend', desc: 'Node.js · Java · MySQL' },
  { icon: Headphones, label: 'Technical Support', desc: 'Currently interning at CAICT Chongqing' },
]

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: info + resume */}
        <div className="space-y-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm"
            >
              <div className="p-2 rounded-lg bg-zinc-800/50">
                <card.icon size={18} className="text-zinc-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{card.label}</p>
                <p className="text-sm text-zinc-200 mt-0.5">{card.value}</p>
              </div>
            </motion.div>
          ))}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-700/50 transition-colors group"
          >
            <div className="p-2 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50 transition-colors">
              <Download size={18} className="text-zinc-400 group-hover:text-zinc-200" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200 group-hover:text-zinc-100">Download Resume</p>
              <p className="text-xs text-zinc-500">PDF · View or download</p>
            </div>
          </motion.a>
        </div>

        {/* Right: focus areas */}
        <div className="grid grid-cols-2 gap-3">
          {focusCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-700/50 transition-colors"
            >
              <card.icon size={20} className="text-zinc-400 mb-3" />
              <p className="text-sm font-medium text-zinc-200">{card.label}</p>
              <p className="text-xs text-zinc-500 mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
