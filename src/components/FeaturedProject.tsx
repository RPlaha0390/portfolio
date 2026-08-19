import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { ExternalLinkIcon, GitHubIcon } from './icons'

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="grid gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:grid-cols-[1fr_1.4fr] sm:p-8">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="aspect-video w-full rounded-xl border border-[var(--color-border)] object-cover sm:aspect-auto sm:h-full"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-xl bg-[var(--color-surface-2)] font-mono text-xs text-[var(--color-ink-faint)] sm:aspect-auto">
          add a screenshot
        </div>
      )}

      <div className="flex flex-col justify-center">
        <p className="font-mono text-xs text-[var(--color-accent)]">Featured Project</p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-1 text-xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]"
        >
          {project.title}
        </Link>
        <p className="mt-3 text-sm text-[var(--color-ink-muted)]">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--color-ink-faint)]">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 text-[var(--color-ink-faint)]">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label="Source code" className="hover:text-[var(--color-accent)]">
              <GitHubIcon width={18} height={18} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live site" className="hover:text-[var(--color-accent)]">
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
