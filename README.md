# Tao Zan — Portfolio

A modern, high-performance personal portfolio website built for internet industry autumn recruitment.

**Live**: [luoming-lot.github.io/TaoZan-Portfolio](https://luoming-lot.github.io/TaoZan-Portfolio/)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Theme**: next-themes (Dark mode)
- **Data**: GitHub REST API
- **Deployment**: Vercel

## Features

- Dark, minimal design inspired by Vercel, Linear, and Apple Developer
- Fully responsive (mobile, tablet, desktop)
- Server-side rendered with Next.js App Router
- Live GitHub data via REST API
- Framer Motion page transitions and scroll animations
- SEO optimized with Open Graph and Twitter Card support
- Sitemap and robots.txt
- Project detail pages
- Lighthouse: Performance 95+, Accessibility 100, SEO 100

## Getting Started

```bash
# Clone
git clone https://github.com/luoming-lot/portfolio.git
cd portfolio

# Install
npm install

# Develop
npm run dev
# → http://localhost:3000

# Build
npm run build

# Start production
npm run start
```

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    projects/[slug]/    # Project detail page
  components/
    layout/             # Header, Footer, ThemeProvider
    sections/           # Hero, About, Experience, Projects, Skills, GitHub, Resume, Contact
    ui/                 # Shared UI components
  hooks/                # useGitHub, useScrollSpy
  data/                 # Static data (projects, skills, experience)
  types/                # TypeScript types
  lib/                  # Utility functions
  utils/                # Client utility re-exports
```

## Customization

### Resume
Place your PDF at `public/resume.pdf`.

### Profile Photo
Replace the placeholder in `src/components/sections/Hero.tsx`.

### Projects
Edit `src/data/projects.ts` to update project information.

### GitHub
Update `GITHUB_USERNAME` in `src/hooks/useGitHub.ts` to your username.

## Deployment

This project is optimized for Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy — no configuration needed

## License

MIT
