import { Helmet } from "react-helmet"

<Helmet>
  <>
    <title>Web Development Portfolio | Azat Harut</title>
    <meta
      name="description"
      content="Full-stack developer specializing in Next.js, React, and PHP. Browse my portfolio and get in touch for your next project."
    />
    <meta
      name="keywords"
      content="fullstack developer, nextjs, react, react native, php, web development, france"
    />
    <meta name="author" content="Azat Harut" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta
      name="googlebot"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <meta
      name="bingbot"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <link rel="canonical" href="https://azat-harut.avdevex.com" />
  </>
</Helmet>
const header = {
  homepage: '/home',
  title: 'AH.',
}

const about = {
  name: 'AZAT HARUTYUNYAN',
  role: 'Junior Full-stack developer',
  description:
    'Junior Full-stack developer living in France, ready to help with your projects.',
  resume: 'CV .pdf',
  social: {
    linkedin: 'https://fr.linkedin.com/in/azat-harutyunyan-487570210?trk=public_post_feed-actor-name',
    github: 'https://github.com/azat44',
  },
}

const projects = [
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
      'Donation platform for Association d\'Aide Arménienne Sociale (AAAS), supporting Armenian social assistance initiatives.',
    livePreview: 'https://donation.avdevex.com',
  },

  {
    name: 'Photography portfolio',
    description:
      'This website is dedicated to the black and white photography, shadows and architecture.',
    livePreview: 'https://bnw-av.com/',
  },
]


const skills = [
  'Next.js',
  'React',
  'React Native',
  'PHP',

]

const contact = {

  email: 'azat.harut@gmail.com',
}

export { header, about, projects, skills, contact }
