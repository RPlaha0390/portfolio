export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

/** Replace with your own links. */
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/your-username', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:ramanplaha1990@gmail.com', icon: 'mail' },
]

export const email = 'ramanplaha1990@gmail.com'
