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
 * Placeholder data — replace with your real projects.
 * `slug` drives the /projects/:slug route in src/pages/ProjectDetail.tsx.
 */
export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    summary: 'One-line summary of what this project does and why it matters.',
    description:
      'A longer description of the problem, your approach, and the outcome. ' +
      'Mention the interesting engineering decisions — this is the space to go deeper than the card summary.',
    tags: ['React', 'TypeScript', 'Node.js'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/project-one',
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'One-line summary of what this project does and why it matters.',
    description:
      'A longer description of the problem, your approach, and the outcome.',
    tags: ['TypeScript', 'Vite'],
    repoUrl: 'https://github.com/your-username/project-two',
    featured: true,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'One-line summary of what this project does and why it matters.',
    description:
      'A longer description of the problem, your approach, and the outcome.',
    tags: ['React'],
  },
]
