'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, FileText, Briefcase } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { BASE_PATH } from '@/lib/config'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-medium tracking-widest text-zinc-400 uppercase mb-6"
            >
              Portfolio
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.05]">
              Tao Zan
            </h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Web Developer', 'IoT Platform Developer', '2027 Graduate'].map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-800/70 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm"
                >
                  {role}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-lg text-zinc-400 max-w-md leading-relaxed"
            >
              Building modern web applications and IoT management platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
              >
                <Briefcase size={16} />
                View Projects
              </a>
              <a
                href="https://luoming-lot.github.io/portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 transition-colors"
              >
                <FileText size={16} />
                Download Resume
              </a>
              <a
                href="https://github.com/luoming-lot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 transition-colors"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 transition-colors"
              >
                <Mail size={16} />
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Right - photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-zinc-500/20 via-transparent to-zinc-700/20 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-72 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img
                  src={`${BASE_PATH}/images/avatar.jpg`}
                  alt="Tao Zan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                      target.parentElement.innerHTML = '<div class="text-center"><div class="w-24 h-24 mx-auto rounded-full bg-zinc-700/50 flex items-center justify-center mb-4"><span class="text-3xl font-bold text-zinc-400">TZ</span></div><p class="text-sm text-zinc-500">Put photo at</p><p class="text-xs text-zinc-600 mt-1">public/images/avatar.jpg</p></div>'
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-zinc-500"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
