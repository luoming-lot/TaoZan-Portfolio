'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

const timeline = [
  { year: '2023', title: 'Started University', desc: 'Enrolled in IoT Engineering at 重庆机电职业技术大学.' },
  { year: '2025', title: 'IoT Web Management System', desc: 'Built full-stack IoT platform with real-time MQTT monitoring.' },
  { year: '2026', title: 'CAICT Internship', desc: 'Technical Support Intern at China Academy of Information and Communications Technology (Chongqing).' },
  { year: '2027', title: 'Open to Work', desc: 'Seeking Web Frontend, IoT Platform, and Technical Support roles.' },
]

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm text-center"
          >
            <span className="text-xs font-bold text-zinc-500 tracking-wider">{item.year}</span>
            <h3 className="text-sm font-semibold text-zinc-200 mt-2">{item.title}</h3>
            <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
