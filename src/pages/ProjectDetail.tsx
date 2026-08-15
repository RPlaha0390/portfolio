import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '@/data/projects'
import { ExternalLinkIcon, GitHubIcon } from '@/components/icons'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-12 sm:py-24">
      <Link to="/#projects" className="font-mono text-sm text-[var(--color-ink-faint)] hover:text-[var(--color-accent)]">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-[var(--color-ink)]">{project.title}</h1>

      <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-[var(--color-ink-faint)]">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[var(--color-ink-muted)]">{project.description}</p>

      <div className="mt-8 flex gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
          >
            <ExternalLinkIcon /> Live site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          >
            <GitHubIcon width={16} height={16} /> Source code
          </a>
        )}
      </div>
    </div>
  )
}
