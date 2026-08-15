import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { FolderIcon, ExternalLinkIcon, GitHubIcon } from './icons'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-accent)]">
      <div className="flex items-start justify-between">
        <FolderIcon className="text-[var(--color-accent)]" />
        <div className="flex items-center gap-3 text-[var(--color-ink-faint)]">
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

      <div>
        <Link to={`/projects/${project.slug}`} className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent)]">
          {project.title}
        </Link>
        <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{project.summary}</p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-[var(--color-ink-faint)]">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
