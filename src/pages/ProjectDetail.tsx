import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '@/data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/#projects" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)]">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight">{project.title}</h1>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[var(--color-fg)]">{project.description}</p>

      <div className="mt-8 flex gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[var(--color-fg)] px-4 py-2 font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            Live site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium transition-colors hover:border-[var(--color-accent)]"
          >
            Source code
          </a>
        )}
      </div>
    </div>
  )
}
