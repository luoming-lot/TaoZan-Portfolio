import { Mail } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-400">
            Designed & Developed by{' '}
            <span className="text-zinc-200 font-medium">Tao Zan</span>
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/luoming-lot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:2847455825@qq.com"
            className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
