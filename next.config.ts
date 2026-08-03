import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/TaoZan-Portfolio',
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
