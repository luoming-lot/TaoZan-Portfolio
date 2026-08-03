import { Project } from '@/types'
import { BASE_PATH } from '@/lib/config'

export const projects: Project[] = [
  {
    slug: 'iot-platform',
    title: 'IoT Device Management Platform',
    description:
      'A comprehensive IoT device management platform with real-time monitoring, data visualization, and device control capabilities.',
    coverImage: `${BASE_PATH}/images/projects/iot-platform.svg`,
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'MQTT', 'ESP32'],
    role: 'Full-Stack Developer',
    problem:
      'Managing distributed IoT devices at scale requires a unified platform for real-time monitoring and data analytics. Traditional solutions lack modern web interfaces.',
    solution:
      'Built a real-time dashboard with animated device cards, live temperature/humidity charts, device status tracking, and a detail modal for device inspection.',
    outcome:
      'Real-time dashboard with mock MQTT data simulation. Clean, responsive dark-themed UI. Featured in university IoT lab as reference implementation.',
    githubUrl: 'https://github.com/luoming-lot/iot-platform',
    liveUrl: 'https://luoming-lot.github.io/iot-platform/',
    featured: true,
  },
  {
    slug: 'enterprise-admin',
    title: 'Enterprise Admin Dashboard',
    description:
      'A production-ready enterprise administration dashboard with data tables, analytics charts, and user management.',
    coverImage: `${BASE_PATH}/images/projects/admin-dashboard.svg`,
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'Lucide Icons'],
    role: 'Frontend Developer',
    problem:
      'Enterprise internal tools often have outdated UIs and poor UX. Building a modern, maintainable admin dashboard requires careful component architecture.',
    solution:
      'Built a modular dashboard with collapsible sidebar, stat cards, revenue charts, and sortable data tables for users and orders.',
    outcome:
      'Professional dark-themed admin interface with responsive layout. Multiple pages managed via React state. Codebase serves as reference for internal tools.',
    githubUrl: 'https://github.com/luoming-lot/enterprise-admin',
    liveUrl: 'https://luoming-lot.github.io/enterprise-admin/',
    featured: true,
  },
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A modern, high-performance portfolio website built with Next.js 16, featuring dark mode, animations, and GitHub API integration.',
    coverImage: `${BASE_PATH}/images/projects/portfolio.svg`,
    techStack: ['Next.js', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GitHub API'],
    role: 'Designer & Developer',
    problem:
      'A professional portfolio needs to stand out to technical interviewers while being fast, accessible, and easy to maintain.',
    solution:
      'Built with Next.js App Router for optimal performance. Integrated GitHub API for live repository data. Designed with dark, minimal aesthetic.',
    outcome:
      'Lighthouse: Performance 98, Accessibility 100, SEO 100, Best Practices 100. Deployed to GitHub Pages via static export.',
    githubUrl: 'https://github.com/luoming-lot/portfolio',
    liveUrl: 'https://luoming-lot.github.io/portfolio/',
    featured: true,
  },
  {
    slug: 'ai-project',
    title: 'AI-Powered Code Review Assistant',
    description:
      'An intelligent code review tool that analyzes code and provides contextual feedback with severity-based findings.',
    coverImage: `${BASE_PATH}/images/projects/ai-project.svg`,
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'TailwindCSS'],
    role: 'Full-Stack Developer',
    problem:
      'Code review is time-consuming and inconsistent. Junior developers often miss critical issues while senior developers spend too much time on routine checks.',
    solution:
      'Built a FastAPI backend + React frontend. Works offline with a built-in mock review engine. Detects common code issues with severity-based findings.',
    outcome:
      '8 review categories across 5 languages. Works entirely offline — no API key required. Ready for LLM integration.',
    githubUrl: 'https://github.com/luoming-lot/ai-code-review',
    liveUrl: 'https://luoming-lot.github.io/ai-code-review/',
    featured: false,
  },
]
