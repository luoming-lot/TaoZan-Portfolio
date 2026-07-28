'use client'

import { useState, useEffect } from 'react'
import { GitHubRepo } from '@/types'

const GITHUB_USERNAME = 'luoming-lot'

interface GitHubStats {
  repos: number
  stars: number
  followers: number
  languages: { name: string; color: string; percentage: number }[]
  pinnedRepos: GitHubRepo[]
  recentActivity: GitHubRepo[]
  loading: boolean
  error: string | null
}

export function useGitHub(): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    stars: 0,
    followers: 0,
    languages: [],
    pinnedRepos: [],
    recentActivity: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=owner`
          ),
        ])

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')

        const user = await userRes.json()
        const repos = await reposRes.json()

        const totalStars = repos.reduce((sum: number, r: { stargazers_count: number }) => sum + r.stargazers_count, 0)

        const langMap: Record<string, number> = {}
        repos.forEach((r: { language: string | null }) => {
          if (r.language) {
            langMap[r.language] = (langMap[r.language] || 0) + 1
          }
        })
        const total = Object.values(langMap).reduce((s, v) => s + v, 0)
        const languageColors: Record<string, string> = {
          TypeScript: '#3178C6',
          JavaScript: '#F7DF1E',
          Python: '#3776AB',
          Java: '#B07219',
          HTML: '#E34F26',
          CSS: '#563D7C',
        }
        const languages = Object.entries(langMap)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            color: languageColors[name] || '#8B8B8B',
            percentage: Math.round((count / total) * 100),
          }))

        setStats({
          repos: user.public_repos,
          stars: totalStars,
          followers: user.followers,
          languages,
          pinnedRepos: repos.slice(0, 4).map((r: Record<string, unknown>) => ({
            ...r,
            pinned: true,
          })),
          recentActivity: repos.slice(0, 6),
          loading: false,
          error: null,
        })
      } catch {
        setStats((prev) => ({ ...prev, loading: false, error: 'Failed to load GitHub data' }))
      }
    }

    fetchGitHub()
  }, [])

  return stats
}
