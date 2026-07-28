'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Selected work showcasing my skills and experience.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block h-full p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all duration-300"
            >
              {/* Cover placeholder */}
              <div className="aspect-video rounded-lg bg-zinc-800/50 border border-zinc-700/30 mb-5 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-800/30" />
                <span className="text-sm font-medium text-zinc-600">{project.title}</span>
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-zinc-50 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-700/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="px-2 py-0.5 text-[11px] text-zinc-500">
                    +{project.techStack.length - 5}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="mt-5 pt-4 border-t border-zinc-800/30 flex items-center gap-4">
                {project.githubUrl && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                    <FaGithub size={14} />
                    Source
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  Details
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
