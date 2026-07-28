'use client'

import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink } from 'lucide-react'
import { Section } from '@/components/ui/Section'

export function Resume() {
  return (
    <Section id="resume" title="Resume" subtitle="View or download my latest resume.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        {/* PDF Preview placeholder */}
        <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm overflow-hidden">
          <div className="aspect-[8.5/11] bg-zinc-900/50 flex flex-col items-center justify-center gap-4 p-8">
            <FileText size={48} className="text-zinc-600" />
            <div className="text-center">
              <p className="text-lg font-medium text-zinc-300">Tao Zan — Resume</p>
              <p className="text-sm text-zinc-500 mt-1">
                Web Developer • IoT Platform Developer • 2027 Graduate
              </p>
            </div>
            <p className="text-xs text-zinc-600 max-w-sm text-center">
              Place your resume PDF at <code className="text-zinc-500">/public/resume.pdf</code> to
              enable online preview and download.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 transition-colors"
          >
            <ExternalLink size={16} />
            View Online
          </a>
        </div>
      </motion.div>
    </Section>
  )
}
