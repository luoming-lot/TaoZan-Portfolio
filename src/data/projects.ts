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
  {
    slug: 'concert-ticket-monitor',
    title: 'Concert Ticket Monitor',
    description:
      '基于 FastAPI + Playwright + Vue3 的演唱会票务实时监控系统：多平台票务信息采集、库存/价格变化监控与多渠道通知推送。A real-time concert ticket monitoring system with multi-platform data collection, stock/price change tracking and multi-channel notifications.',
    coverImage: `${BASE_PATH}/images/projects/concert-ticket-monitor.svg`,
    techStack: ['Python', 'FastAPI', 'Playwright', 'Vue 3', 'Element Plus', 'ECharts', 'SQLite', 'Docker'],
    role: 'Full-Stack Developer',
    problem:
      '热门演唱会门票开售即秒空，手动刷新多个平台既慢又容易错过库存与价格变化。Getting popular concert tickets is frustrating — seats appear and vanish in seconds, and checking every platform manually is slow and unreliable.',
    solution:
      'Built a FastAPI + Playwright pipeline that automatically collects show, session and ticket-stock data, monitors stock/price changes on a schedule, and pushes alerts via desktop notifications, email, WeChat Work and DingTalk. A Vue 3 + Element Plus admin dashboard manages shows, monitoring rules and system config.',
    outcome:
      'Docker Compose one-click deployment with multi-platform data collection, real-time change monitoring and timely multi-channel notifications.',
    githubUrl: 'https://github.com/luoming-lot/concert-ticket-monitor',
    liveUrl: 'https://luoming-lot.github.io/concert-ticket-monitor',
    featured: false,
  },
  {
    slug: 'iot-platform',
    title: 'IoT Device Management Platform',
    description:
      '实时物联网设备监控仪表盘：在线状态、温湿度趋势与报警信息一目了然。A real-time IoT device monitoring dashboard with live device status, temperature & humidity trends and alert management.',
    coverImage: `${BASE_PATH}/images/projects/iot-platform.svg`,
    techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Recharts', 'Lucide Icons'],
    role: 'Frontend Developer',
    problem:
      'IoT 部署需要快速掌握设备健康状况——设备分散时很难发现离线节点或异常的传感器读数。IoT deployments need instant visibility into device health — scattered devices make it hard to spot offline nodes or abnormal sensor readings.',
    solution:
      'Built a React + TypeScript dashboard with animated stat counters, temperature & humidity trend charts (Recharts), a searchable device management table with detail modal, and simulated real-time data updates.',
    outcome:
      'Dark, fully responsive UI with live-updating device status; selected as a reference implementation by the university IoT lab.',
    githubUrl: 'https://github.com/luoming-lot/iot-platform',
    liveUrl: 'https://luoming-lot.github.io/iot-platform/',
    featured: false,
  },
  {
    slug: 'personal-website',
    title: 'Personal Tech Website',
    description:
      '个人技术主页：以 IoT 工程师视角展示技能、教育背景与项目经历。A personal tech homepage presenting skills, education and projects from an IoT engineer\u2019s perspective.',
    coverImage: `${BASE_PATH}/images/projects/personal-website.svg`,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Designer & Developer',
    problem:
      '需要一个简洁快速的个人页面来介绍技能与背景。A developer needs a simple, fast personal page to introduce their skills and background.',
    solution:
      'Built a lightweight static site with sections for about, skills, education and certificates — no build step, no dependencies.',
    outcome: 'Fast, dependency-free page deployed to GitHub Pages.',
    githubUrl: 'https://github.com/luoming-lot/personal-website',
    liveUrl: 'https://luoming-lot.github.io/personal-website/',
    featured: false,
  },
]
