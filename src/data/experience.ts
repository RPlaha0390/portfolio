export interface ExperienceEntry {
  company: string
  role: string
  start: string
  end: string
  companyUrl?: string
  bullets: string[]
  tags: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Marcura',
    role: 'Senior Frontend Developer',
    start: 'May 2023',
    end: 'Present',
    bullets: [
      'Own delivery of frontend features end-to-end using React, Next.js, Nx, TypeScript, GraphQL and Apollo, partnering directly with backend engineers, product owners and designers in a cross-functional team.',
      "Introduced Claude Code and Cursor into the team's daily workflow for building, debugging and refactoring.",
      'Mentor other frontend engineers day-to-day, drawing on deep codebase and architectural knowledge to guide technical decisions and unblock delivery.',
      'Drive regular knowledge-sharing, pair programming and code review as core team practices.',
      'Manage delivery through Asana across daily standups, sprint planning and retrospectives.',
    ],
    tags: ['React', 'Next.js', 'Nx', 'TypeScript', 'GraphQL', 'Apollo'],
  },
  {
    company: 'Validus Risk Management',
    role: 'Senior Frontend Developer',
    start: 'Oct 2022',
    end: 'May 2023',
    bullets: [
      'Delivered core features across a suite of multiple apps using React, TypeScript, React Testing Library and Jest.',
      "Mentored junior frontend engineers, resolving day-to-day technical blockers and raising the team's delivery pace.",
      'Consolidated multiple standalone apps into a single Nx monorepo, simplifying cross-app code sharing.',
      'Reviewed pull requests via Bitbucket and worked a full agile cycle in JIRA — standups, sprint planning, retrospectives.',
    ],
    tags: ['React', 'TypeScript', 'Nx', 'Jest', 'React Testing Library'],
  },
  {
    company: 'Shipserv',
    role: 'Frontend Developer',
    start: 'Jul 2020',
    end: 'Sep 2022',
    bullets: [
      'Built a trading platform for the blue economy sector using React, TypeScript, GraphQL, Apollo and Node.js, including backend contributions via Node.js and Apollo.',
      'Shipped features within an agile team tracked through Asana; reviewed pull requests via Bitbucket and deployed via Microsoft Azure.',
      'Took part in remote pair programming and monthly cross-team knowledge-sharing sessions.',
    ],
    tags: ['React', 'TypeScript', 'GraphQL', 'Apollo', 'Node.js'],
  },
  {
    company: 'Fantastec',
    role: 'Frontend Developer',
    start: 'Jan 2019',
    end: 'Jul 2020',
    bullets: [
      'Built React and React Native features using Redux, TypeScript and Styled Components, working closely with the backend team on new functionality.',
      'Wrote e2e test coverage in Jest and Enzyme; used Team City and App Center for CI, and Fastlane/Codepush to release a React Native app to the App Store.',
      'Took part in product discovery sessions with product owners and designers to assess feature feasibility.',
    ],
    tags: ['React Native', 'Redux', 'TypeScript', 'Styled Components', 'Jest'],
  },
  {
    company: 'The FA',
    role: 'UI Developer',
    start: 'Sep 2017',
    end: 'Dec 2018',
    bullets: [
      'Delivered UI for FA and Wembley websites using HTML, SCSS and JavaScript, working with product owners, business analysts and backend developers in an agile/scrum team.',
      'Modernised legacy websites incrementally while maintaining live production sites; produced high- and low-fidelity wireframes to support feature design.',
    ],
    tags: ['HTML', 'SCSS', 'JavaScript'],
  },
  {
    company: 'Brandwidth',
    role: 'Junior Frontend Developer',
    start: 'Jun 2014',
    end: 'Sep 2017',
    bullets: [
      'Built and maintained large websites and microsites in a PHP Laravel MVC environment using HTML, SCSS, CSS, JavaScript and jQuery.',
      'Delivered fast-turnaround work for client accounts under tight deadlines in a fast-paced agency environment, using Git for version control.',
    ],
    tags: ['PHP', 'Laravel', 'jQuery', 'HTML/CSS'],
  },
]
