export default function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="mb-8 flex items-center gap-4 text-xl font-semibold text-[var(--color-ink)]">
      <span className="font-mono text-[var(--color-accent)]">{number}.</span>
      {title}
      <span aria-hidden className="h-px flex-1 bg-[var(--color-border)]" />
    </h2>
  )
}
