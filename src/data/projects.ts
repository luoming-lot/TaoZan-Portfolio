import { Project } from '@/types'
import { BASE_PATH } from '@/lib/config'

export const projects: Project[] = [
  {
    slug: 'smart-env-monitor',
    title: 'Smart Environment Monitoring Platform',
    description:
      '基于 ESP32 + MQTT + Spring Boot + React + MySQL 的全栈物联网监测平台：实时监控、历史曲线、阈值报警、设备管理与 JWT 登录。A full-stack IoT platform with real-time monitoring, history curves, threshold alarms, device management and JWT login.',
    coverImage: `${BASE_PATH}/images/projects/env-monitor.png`,
    techStack: ['Java 17', 'Spring Boot', 'React', 'MySQL', 'MQTT', 'ESP32', 'WebSocket', 'Docker'],
    role: 'Full-Stack Developer',
    problem:
      'Monitoring temperature and humidity across distributed locations needs a complete data pipeline — from embedded sensors to a modern web dashboard. Off-the-shelf solutions are either hardware-only or lack real-time visibility, history analysis and alarm handling.',
    solution:
      'Built the end-to-end pipeline: ESP32 firmware (DHT22 + MQTT) publishes telemetry to Eclipse Mosquitto; Spring Boot ingests data, auto-registers devices, evaluates threshold alarms and pushes updates over WebSocket; a React + Ant Design + ECharts dashboard provides real-time monitoring, history curves, and device/alarm management, secured with JWT and Flyway-managed MySQL.',
    outcome:
      'Deployed with Docker Compose and to Render as a live demo. Features auto device registration, threshold alarm trigger and auto-resolve, history aggregation, and WebSocket real-time push — fully documented with architecture diagrams, API reference and deployment guides.',
    githubUrl: 'https://github.com/luoming-lot/smart-env-monitor',
    liveUrl: 'https://env-monitor-60z3.onrender.com',
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
    githubUrl: 'https://github.com/luoming-lot/TaoZan-Portfolio',
    liveUrl: 'https://luoming-lot.github.io/TaoZan-Portfolio/',
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
