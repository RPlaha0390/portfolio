export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 py-8 text-sm text-[var(--color-muted)] sm:flex-row sm:justify-between">
        <p>© {year} Raman. Built with React, TypeScript &amp; Tailwind.</p>
        <p>
          <a
            href="https://github.com/your-username/portfolio"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-fg)]"
          >
            View source
          </a>
        </p>
      </div>
    </footer>
  )
}
