'use client'

import { Moon, Sun } from 'lucide-react'
import { useAppTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useAppTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
