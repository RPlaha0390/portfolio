import { projects } from '@/data/projects'
import { email } from '@/data/social'
import ProjectCard from '@/components/ProjectCard'
import FeaturedProject from '@/components/FeaturedProject'
import Experience from '@/components/Experience'
import SectionHeading from '@/components/SectionHeading'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-12 sm:py-24">
      {/* ---------------------------------------------------------------- */}
      {/* About                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section id="about" className="scroll-mt-24">
        <SectionHeading number="01" title="About Me" />
        <div className="max-w-xl space-y-4 text-[var(--color-ink-muted)]">
          <p>
            Senior Frontend Engineer with 12 years' experience building production web and mobile
            applications with React, TypeScript, GraphQL and Node.js. I have a strong track record
            owning features end-to-end in cross-functional teams, mentoring engineers, and driving
            code quality through review and pairing.
          </p>
          <p>
            Comfortable working across the stack — from React/Next.js UIs to GraphQL/Apollo and
            Node.js services, with data layers including MongoDB.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Experience                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="experience" className="scroll-mt-24 pt-20">
        <SectionHeading number="02" title="Experience" />
        <Experience />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Projects                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section id="projects" className="scroll-mt-24 pt-20">
        <SectionHeading number="03" title="Projects" />

        {projects.length === 0 && (
          <p className="rounded-xl border border-dashed border-[var(--color-border)] px-6 py-10 text-center text-sm text-[var(--color-ink-faint)]">
            Personal projects coming soon — add them to{' '}
            <code className="font-mono text-xs">src/data/projects.ts</code>.
          </p>
        )}

        {featuredProjects.length > 0 && (
          <div className="flex flex-col gap-6">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.slug} project={project} />
            ))}
          </div>
        )}

        {otherProjects.length > 0 && (
          <>
            <h3 className="mb-4 mt-12 text-center font-mono text-sm text-[var(--color-ink-faint)]">
              Other Noteworthy Projects
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Contact                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section id="contact" className="scroll-mt-24 py-20 text-center">
        <p className="font-mono text-sm text-[var(--color-accent)]">04. What's Next?</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-ink)]">
          Get In Touch
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[var(--color-ink-muted)]">
          Always happy to talk frontend engineering, hear about interesting opportunities, or
          just say hi. My inbox is open.
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-8 inline-block rounded-lg border border-[var(--color-accent)] px-6 py-3 font-mono text-sm text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent-tint)]"
        >
          Say Hello
        </a>
      </section>
    </div>
  )
}
