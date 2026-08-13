import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-6 py-24">
      <p className="font-mono text-sm text-[var(--color-accent)]">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-[var(--color-muted)]">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
      >
        ← Back home
      </Link>
    </div>
  )
}
