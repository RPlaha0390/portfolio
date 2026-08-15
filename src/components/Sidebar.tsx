import { Link } from 'react-router-dom'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'
import { socialLinks } from '@/data/social'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

const navItems = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'experience', number: '02', label: 'Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'contact', number: '04', label: 'Contact' },
]

const sectionIds = navItems.map((item) => item.id)
const iconFor = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }

export default function Sidebar() {
  const activeId = useActiveSection(sectionIds)
  const { theme, toggleTheme } = useTheme()

  return (
    <aside
      className="border-b border-[var(--color-border)] px-6 py-10
        lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:h-screen lg:w-[22rem]
        lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:px-10 lg:py-14"
    >
      <div>
        <Link to="/" className="inline-block">
          <h1 className="text-2xl font-bold tracking-tight">Raman Plaha</h1>
          <p className="mt-1 font-medium text-[var(--color-accent)]">Senior Frontend Engineer</p>
        </Link>

        <p className="mt-4 max-w-xs text-sm text-[var(--color-ink-muted)]">
          I build and ship production React &amp; TypeScript applications end-to-end — from UI
          through GraphQL and Node.js services — and enjoy mentoring engineers along the way.
        </p>
        <p className="mt-2 max-w-xs font-mono text-xs text-[var(--color-ink-faint)]">
          Maidenhead, UK
        </p>

        <nav className="mt-10 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center gap-3 text-sm font-medium transition-colors ${
                      isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-faint)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive ? 'w-8 bg-[var(--color-accent)]' : 'w-4 bg-[var(--color-ink-faint)] group-hover:w-8 group-hover:bg-[var(--color-accent)]'
                      }`}
                    />
                    <span className="font-mono text-xs text-[var(--color-ink-faint)]">{item.number}</span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5 lg:mt-0">
        {socialLinks.map((link) => {
          const Icon = iconFor[link.icon]
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={link.label}
              className="text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Icon />
            </a>
          )
        })}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="ml-auto rounded-full border border-[var(--color-border)] p-2 text-sm transition-colors hover:border-[var(--color-accent)]"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </aside>
  )
}
