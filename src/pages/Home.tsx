import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* ---------------------------------------------------------------- */}
      {/* Hero — swap the copy below for your own name/title/pitch.        */}
      {/* ---------------------------------------------------------------- */}
      <section className="flex min-h-[70vh] flex-col justify-center gap-4 py-20">
        <p className="font-mono text-sm text-[var(--color-accent)]">Hi, I'm Raman 👋</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Frontend Engineer building fast, accessible interfaces.
        </h1>
        <p className="max-w-xl text-lg text-[var(--color-muted)]">
          Replace this with your own one- or two-sentence pitch — what you build, what you care
          about, and what you're looking for next.
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-[var(--color-fg)] px-4 py-2 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--color-accent)]"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* About                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section id="about" className="scroll-mt-24 py-16">
        <h2 className="mb-4 font-mono text-sm text-[var(--color-muted)]">01 · About</h2>
        <p className="max-w-2xl text-[var(--color-fg)]">
          A couple of paragraphs about your background, the kind of problems you like solving, and
          the stack you're strongest in. Keep it concrete — mention real technologies and real
          outcomes rather than generic adjectives.
        </p>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Projects — sourced from src/data/projects.ts                     */}
      {/* ---------------------------------------------------------------- */}
      <section id="projects" className="scroll-mt-24 py-16">
        <h2 className="mb-6 font-mono text-sm text-[var(--color-muted)]">02 · Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Contact                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section id="contact" className="scroll-mt-24 py-16">
        <h2 className="mb-4 font-mono text-sm text-[var(--color-muted)]">03 · Contact</h2>
        <p className="max-w-xl text-[var(--color-muted)]">
          The best way to reach me is email — or find me on the links below.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:you@example.com"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium transition-colors hover:border-[var(--color-accent)]"
          >
            you@example.com
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium transition-colors hover:border-[var(--color-accent)]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--color-border)] px-4 py-2 font-medium transition-colors hover:border-[var(--color-accent)]"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
