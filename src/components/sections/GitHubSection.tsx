'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, ExternalLink, FolderGit2, Users, BookOpen } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { useGitHub } from '@/hooks/useGitHub'

export function GitHubSection() {
  const { repos, stars, followers, languages, pinnedRepos, recentActivity, loading, error } =
    useGitHub()

  return (
    <Section id="github" title="GitHub" subtitle="Live data from my GitHub profile.">
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {[
          { icon: FolderGit2, label: 'Repositories', value: repos },
          { icon: Star, label: 'Total Stars', value: stars },
          { icon: Users, label: 'Followers', value: followers },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm text-center"
          >
            <stat.icon size={18} className="text-zinc-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-zinc-100">
              {loading ? '...' : error ? '-' : stat.value}
            </p>
            <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      {languages.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Top Languages
          </h3>
          <div className="flex h-2 rounded-full overflow-hidden bg-zinc-800/50">
            {languages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                className="h-full first:rounded-l-full last:rounded-r-full"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-xs text-zinc-400">{lang.name}</span>
                <span className="text-xs text-zinc-600">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Pinned repos */}
      {pinnedRepos.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group p-5 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-700/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <BookOpen size={18} className="text-zinc-500 group-hover:text-zinc-400 transition-colors" />
                <ExternalLink size={14} className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-sm font-semibold text-zinc-200 mt-3 group-hover:text-zinc-100 transition-colors">
                {repo.name}
              </h4>
              <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2">
                {repo.description || 'No description'}
              </p>
              <div className="flex items-center gap-4 mt-4 text-xs text-zinc-600">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-zinc-500" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      {loading && (
        <div className="text-center py-12 text-zinc-500 text-sm">
          Loading GitHub data...
        </div>
      )}

      {error && (
        <div className="text-center py-12 text-zinc-500 text-sm">
          {error}. Showing placeholder data.
        </div>
      )}
    </Section>
  )
}
