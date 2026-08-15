export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  /** Path under /public, e.g. "/projects/example.png". Leave undefined to show a placeholder. */
  image?: string
  featured?: boolean
}

/**
 * Add your own personal/open-source projects here. Each entry auto-generates a card on the
 * home page and a detail page at /projects/:slug. Set `featured: true` for the larger stacked
 * cards at the top of the section; everything else falls into the "Other Noteworthy Projects" grid.
 *
 * Example:
 * {
 *   slug: 'my-project',
 *   title: 'My Project',
 *   summary: 'One-line summary of what it does and why it matters.',
 *   description: 'A longer description — the problem, your approach, the outcome.',
 *   tags: ['React', 'TypeScript'],
 *   liveUrl: 'https://example.com',
 *   repoUrl: 'https://github.com/your-username/my-project',
 *   featured: true,
 * }
 */
export const projects: Project[] = []
