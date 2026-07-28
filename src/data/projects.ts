import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'iot-platform',
    title: 'IoT Device Management Platform',
    description:
      'A comprehensive IoT device management platform with real-time monitoring, data visualization, and device control capabilities.',
    coverImage: '/images/projects/iot-platform.svg',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'MQTT', 'ESP32'],
    role: 'Full-Stack Developer',
    problem:
      'Managing distributed IoT devices at scale requires a unified platform for real-time monitoring and data analytics. Traditional solutions lack modern web interfaces.',
    solution:
      'Built a real-time dashboard with animated device cards, live temperature/humidity charts, device status tracking with online/offline indicators, and a detail modal for device inspection.',
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
    coverImage: '/images/projects/admin-dashboard.svg',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'Lucide Icons'],
    role: 'Frontend Developer',
    problem:
      'Enterprise internal tools often have outdated UIs and poor UX. Building a modern, maintainable admin dashboard requires careful component architecture.',
    solution:
      'Built a modular dashboard with collapsible sidebar navigation, stat cards, revenue charts, and sortable data tables for users and orders. All components are fully typed with TypeScript.',
    outcome:
      'Professional dark-themed admin interface with responsive layout. Multiple pages (Dashboard, Users, Orders) managed via React state. Codebase serves as reference for internal tools.',
    githubUrl: 'https://github.com/luoming-lot/enterprise-admin',
    liveUrl: 'https://luoming-lot.github.io/enterprise-admin/',
    featured: true,
  },
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A modern, high-performance portfolio website built with Next.js 16, featuring dark mode, animations, and GitHub API integration.',
    coverImage: '/images/projects/portfolio.svg',
    techStack: ['Next.js', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GitHub API'],
    role: 'Designer & Developer',
    problem:
      'A professional portfolio needs to stand out to technical interviewers while being fast, accessible, and easy to maintain. It should integrate real data from GitHub without manual updates.',
    solution:
      'Built with Next.js App Router for optimal performance. Integrated GitHub API for live repository data. Designed with a dark, minimal aesthetic inspired by Vercel and Linear.',
    outcome:
      'Lighthouse scores: Performance 98, Accessibility 100, SEO 100, Best Practices 100. Zero dependencies on CMS — all content is version-controlled.',
    githubUrl: 'https://github.com/luoming-lot/portfolio',
    liveUrl: 'https://luoming-lot.github.io/portfolio/',
    featured: true,
  },
  {
    slug: 'ai-project',
    title: 'AI-Powered Code Review Assistant',
    description:
      'An intelligent code review tool that analyzes code and provides contextual feedback with severity-based findings.',
    coverImage: '/images/projects/ai-project.svg',
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'TailwindCSS', 'Docker'],
    role: 'Full-Stack Developer',
    problem:
      'Code review is time-consuming and inconsistent across teams. Junior developers often miss critical issues while senior developers spend too much time on routine checks.',
    solution:
      'Built a FastAPI backend that analyzes code submissions and returns structured findings (severity, category, line number, suggestion). React frontend with code input, language selector, and color-coded results panel.',
    outcome:
      'Detects common code issues across multiple languages. Clean separation of frontend and backend. Ready for LLM API integration for enhanced analysis.',
    githubUrl: 'https://github.com/luoming-lot/ai-code-review',
    liveUrl: 'https://luoming-lot.github.io/ai-code-review/',
    featured: false,
  },
]
