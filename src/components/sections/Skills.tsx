'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const skillGroups = [
  {
    label: 'Frontend',
    items: 'HTML · CSS · JavaScript · TypeScript · React · Next.js · Vue · TailwindCSS',
  },
  {
    label: 'Backend',
    items: 'Node.js · Java · MySQL',
  },
  {
    label: 'IoT & Embedded',
    items: 'ESP32 · Arduino · MQTT',
  },
  {
    label: 'Tools & DevOps',
    items: 'Git · GitHub · Linux · Docker · VS Code',
  },
  {
    label: 'Design',
    items: 'Photoshop · Illustrator · After Effects · C4D',
  },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm"
          >
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
              {group.label}
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">{group.items}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
