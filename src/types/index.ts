export interface Project {
  slug: string
  title: string
  description: string
  coverImage: string
  techStack: string[]
  role: string
  problem: string
  solution: string
  outcome: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Experience {
  year: string
  title: string
  organization: string
  description: string
  type: 'education' | 'work' | 'milestone'
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'iot' | 'tools' | 'design'
}

export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  language: string
  stargazers_count: number
  forks_count: number
  topics: string[]
  pinned?: boolean
}
