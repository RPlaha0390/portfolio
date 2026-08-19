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
export const projects: Project[] = [
  {
    slug: 'chat-app',
    title: 'Chat App',
    summary: 'Real-time 1-on-1 and group messaging app with a custom design system, built to learn the MERN stack end to end.',
    description:
      'A real-time chat application supporting direct messages and group conversations, built from scratch to learn the MERN stack. Features JWT-based auth, live messaging and typing indicators over Socket.IO, file attachments, and a custom Tailwind design system with light/dark mode. Backend and frontend are both covered by test suites (Jest/Supertest and Vitest/React Testing Library), and the app is deployed live with the client on GitHub Pages and the API on Render.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    liveUrl: 'https://rplaha0390.github.io/chat-app/',
    repoUrl: 'https://github.com/RPlaha0390/chat-app',
    image: '/projects/chat-app.svg',
    featured: true,
  },
]
