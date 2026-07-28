'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (t: Theme) => void
}>({ theme: 'dark', setTheme: () => {} })

export function useAppTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'light') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
    setMounted(true)
  }, [])

  const handleSetTheme = (t: Theme) => {
    setTheme(t)
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', t)
  }

  // Always wrap — never skip Provider or children lose context
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : 'dark', setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
