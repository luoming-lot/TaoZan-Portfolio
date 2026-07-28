import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Cover image */}
        <div className="aspect-video rounded-2xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden mb-10">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Detail sections */}
        <div className="mt-16 space-y-12">
          <DetailSection title="My Role" content={project.role} />
          <DetailSection title="Problem" content={project.problem} />
          <DetailSection title="Solution" content={project.solution} />
          <DetailSection title="Outcome" content={project.outcome} />
        </div>

        {/* Action buttons */}
        <div className="mt-16 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              <FaGithub size={16} />
              View Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-600 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">{title}</h2>
      <p className="text-zinc-400 leading-relaxed">{content}</p>
    </div>
  )
}
