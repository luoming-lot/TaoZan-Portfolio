import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
