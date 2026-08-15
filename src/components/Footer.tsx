export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-6 py-12 text-center sm:px-12">
      <p className="font-mono text-xs text-[var(--color-ink-faint)]">
        Built with React, TypeScript &amp; Tailwind ·{' '}
        <a
          href="https://github.com/your-username/portfolio"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
        >
          View source
        </a>
      </p>
    </footer>
  )
}
