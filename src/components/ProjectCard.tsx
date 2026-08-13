import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold group-hover:text-[var(--color-accent)]">{project.title}</h3>
        <span aria-hidden className="text-[var(--color-muted)] transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>

      <p className="text-sm text-[var(--color-muted)]">{project.summary}</p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}
