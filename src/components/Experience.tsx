import { useState } from 'react'
import { experience } from '@/data/experience'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = experience[activeIndex]

  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <div
        role="tablist"
        aria-orientation="vertical"
        className="flex overflow-x-auto sm:w-40 sm:flex-shrink-0 sm:flex-col sm:overflow-visible sm:border-l sm:border-[var(--color-border)]"
      >
        {experience.map((entry, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={`${entry.company}-${entry.start}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-shrink-0 flex-col whitespace-nowrap border-b-2 px-4 py-2.5 text-left text-sm font-medium transition-colors sm:flex-shrink sm:whitespace-normal sm:border-b-0 sm:border-l-2 sm:-ml-px ${
                isActive
                  ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-tint)]'
                  : 'border-transparent text-[var(--color-ink-faint)] hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]'
              }`}
            >
              {entry.company}
              <span className="font-mono text-[10px] font-normal opacity-70">{entry.start}</span>
            </button>
          )
        })}
      </div>

      <div className="flex-1" role="tabpanel">
        <h3 className="text-lg font-semibold text-[var(--color-ink)]">
          {active.role}{' '}
          <span className="text-[var(--color-accent)]">
            @{' '}
            {active.companyUrl ? (
              <a href={active.companyUrl} target="_blank" rel="noreferrer" className="hover:underline">
                {active.company}
              </a>
            ) : (
              active.company
            )}
          </span>
        </h3>
        <p className="mt-1 font-mono text-xs text-[var(--color-ink-faint)]">
          {active.start} — {active.end}
        </p>

        <ul className="mt-4 space-y-3">
          {active.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-[var(--color-ink-muted)]">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent-soft)]" />
              {bullet}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {active.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-xs text-[var(--color-ink-faint)]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
