export const siteMeta = {
  title: 'Web Development Portfolio | Azat Harut',
  description:
    'Full-stack developer specializing in Next.js, React, and PHP. Browse my portfolio and get in touch for your next project.',
  keywords:
    'fullstack developer, nextjs, react, react native, php, web development, france',
  author: 'Azat Harut',
  canonical: 'https://azat-harut.avdevex.com',
}

export const header = {
  homepage: '/home',
  title: 'AH.',
}

export const about = {
  name: 'AZAT HARUTYUNYAN',
  role: 'Junior Full-stack developer',
  description:
    'Junior Full-stack developer living in France, ready to help with your projects.',
  resume: 'CV .pdf',
  social: {
    linkedin:
      'https://fr.linkedin.com/in/azat-harutyunyan-487570210?trk=public_post_feed-actor-name',
    github: 'https://github.com/azat44',
  },
}

export const projects = [
  {
    name: 'AveXgen LLC',
    description:
      'Professional outsourcing and consulting company based in Las Vegas.',
    livePreview: 'https://avexgen.com/',
  },
  {
    name: 'Arev Society Inc',
    description:
      'The Arev Society is a tax-exempt 501(c)(3) corporation in New York.',
    livePreview: 'https://arevsociety.org/',
  },
  {
    name: 'Arev Society Donation Platform',
    description:
      'Donation platform for Arev Society 501(c)(3) non-profit organization.',
    livePreview: 'https://donation.arevsociety.org',
  },
  {
    name: 'AAAS Donation Platform',
    description:
      "Donation platform for Association d'Aide Arménienne Sociale (AAAS), supporting Armenian social assistance initiatives.",
    livePreview: 'https://donner.aaas.fr',
  },
  {
    name: 'AAAS — Association Arménienne d\'Aide Sociale',
    description:
      "Official website for AAAS, France's oldest Armenian association, founded in 1890.",
    livePreview: 'https://www.aaas.fr/fr/',
  },
  {
    name: 'Photography portfolio',
    description:
      'This website is dedicated to the black and white photography, shadows and architecture.',
    livePreview: 'https://bnw-av.com/',
  },
]

export const skillCategories = [
  {
    name: 'Front-end',
    icon: 'code',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'WordPress', 'Elementor'],
  },
  {
    name: 'Mobile',
    icon: 'smartphone',
    skills: ['React Native', 'Flutter'],
  },
  {
    name: 'Back-end',
    icon: 'database',
    skills: ['PHP', 'Go', 'Node.js', 'Firebase', 'SQL', 'WebSocket'],
  },
  {
    name: 'DevOps & tools',
    icon: 'tool',
    skills: ['Docker', 'Git', 'CI/CD', 'Grafana'],
  },
]

export const skills = skillCategories.flatMap((category) => category.skills)

export const contact = {
  email: 'azat.harut@gmail.com',
}