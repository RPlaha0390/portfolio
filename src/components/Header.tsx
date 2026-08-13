import { Link } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-sm font-semibold tracking-tight">
          raman<span className="text-[var(--color-accent)]">.dev</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[var(--color-muted)] sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[var(--color-fg)]">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="rounded-full border border-[var(--color-border)] p-2 text-sm transition-colors hover:border-[var(--color-accent)]"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  )
}
