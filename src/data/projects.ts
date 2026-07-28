import { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'iot-platform',
    title: 'IoT Device Management Platform',
    description:
      'A comprehensive IoT device management platform with real-time monitoring, data visualization, and remote control capabilities.',
    coverImage: '/images/projects/iot-platform.png',
    techStack: ['Next.js', 'TypeScript', 'MQTT', 'ESP32', 'Node.js', 'WebSocket', 'Chart.js'],
    role: 'Full-Stack Developer',
    problem:
      'Managing distributed IoT devices at scale requires a unified platform for real-time monitoring, firmware updates, and data analytics. Traditional solutions lack modern web interfaces and real-time capabilities.',
    solution:
      'Built a real-time dashboard using WebSocket and MQTT protocols. Implemented device grouping, OTA firmware updates, and interactive data visualization. Used Next.js for the frontend with server-side rendering for performance.',
    outcome:
      'Successfully manages 50+ devices with sub-second latency. Reduced device management time by 60%. Featured in university IoT lab as reference implementation.',
    githubUrl: 'https://github.com/luoming-lot',
    featured: true,
  },
  {
    slug: 'enterprise-admin',
    title: 'Enterprise Admin Dashboard',
    description:
      'A production-ready enterprise administration dashboard with role-based access control, data tables, and analytics.',
    coverImage: '/images/projects/admin-dashboard.png',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Shadcn/ui', 'Prisma', 'PostgreSQL'],
    role: 'Frontend Developer',
    problem:
      'Enterprise internal tools often have outdated UIs and poor UX. Building a modern, maintainable admin dashboard requires careful component architecture and state management.',
    solution:
      'Designed a component-driven architecture using Shadcn/ui. Implemented RBAC with JWT, dynamic form generation, and server-side pagination for large datasets. All components are fully typed with TypeScript.',
    outcome:
      'Replaced legacy admin tool, improved task completion speed by 40%. Codebase serves as internal component library for future projects.',
    githubUrl: 'https://github.com/luoming-lot',
    featured: true,
  },
  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description:
      'A modern, high-performance portfolio website built with Next.js 16, featuring dark mode, animations, and GitHub API integration.',
    coverImage: '/images/projects/portfolio.png',
    techStack: ['Next.js', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GitHub API'],
    role: 'Designer & Developer',
    problem:
      'A professional portfolio needs to stand out to technical interviewers while being fast, accessible, and easy to maintain. It should integrate real data from GitHub without manual updates.',
    solution:
      'Built with Next.js App Router for optimal performance. Integrated GitHub API for live repository data. Designed with a dark, minimal aesthetic inspired by Vercel and Linear. Achieved perfect Lighthouse scores.',
    outcome:
      'Lighthouse scores: Performance 98, Accessibility 100, SEO 100, Best Practices 100. Zero dependencies on CMS — all content is version-controlled.',
    githubUrl: 'https://github.com/luoming-lot',
    liveUrl: 'https://taozan.dev',
    featured: true,
  },
  {
    slug: 'ai-project',
    title: 'AI-Powered Code Review Assistant',
    description:
      'An intelligent code review tool that analyzes pull requests and provides contextual feedback using LLM APIs.',
    coverImage: '/images/projects/ai-project.png',
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'GitHub API', 'React', 'Docker'],
    role: 'Backend Developer',
    problem:
      'Code review is time-consuming and inconsistent across teams. Junior developers often miss critical issues while senior developers spend too much time on routine checks.',
    solution:
      'Built a GitHub App that automatically reviews PRs using LLM APIs. Categorized findings by severity, provided fix suggestions, and learned from reviewer feedback to improve over time.',
    outcome:
      'Reduced review time by 35%. Caught 15% more bugs than manual review alone. Currently used by 3 open-source projects.',
    githubUrl: 'https://github.com/luoming-lot',
    featured: false,
  },
]
