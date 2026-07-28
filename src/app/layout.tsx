import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Tao Zan — Web Developer & IoT Platform Developer',
    template: '%s — Tao Zan',
  },
  description:
    'Portfolio of Tao Zan — 2027 graduate specializing in Web Development, IoT Platforms, and Technical Support. Currently interning at CAICT Chongqing.',
  keywords: [
    'Tao Zan',
    'Web Developer',
    'IoT Developer',
    'Frontend Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Portfolio',
    '2027 Graduate',
  ],
  authors: [{ name: 'Tao Zan', url: 'https://github.com/luoming-lot' }],
  creator: 'Tao Zan',
  metadataBase: new URL('https://luoming-lot.github.io/portfolio'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taozan.dev',
    siteName: 'Tao Zan Portfolio',
    title: 'Tao Zan — Web Developer & IoT Platform Developer',
    description:
      'Portfolio of Tao Zan — 2027 graduate. Building modern web applications and IoT management platforms.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tao Zan — Web Developer & IoT Platform Developer',
    description:
      'Portfolio of Tao Zan — 2027 graduate. Building modern web applications and IoT management platforms.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('theme')
                if (t === 'light') {
                  document.documentElement.classList.remove('dark')
                  document.documentElement.classList.add('light')
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
