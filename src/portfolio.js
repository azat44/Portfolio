import { Helmet } from "react-helmet"

<Helmet>
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Development Portfolio | Azat Harut </title>
    <meta
      name="description"
      content="Azat Harut is a  front-end developper specializing in building modern web applications using React. I create high-performance, responsive, and user-friendly websites and web apps."
    />
    <meta
      name="keywords"
      content="front-end development, react, web development, javascript, single page applications, responsive design"
    />
    <meta name="author" content="Azat Harut" />
    {/* Open Graph meta tags for social media */}
    <meta
      property="og:title"
      content="Azat Harut - Front-end Development with React"
    />
    <meta
      property="og:description"
      content="Azat Harut is a   front-end developper  specializing in building modern web applications using React. We create high-performance, responsive, and user-friendly websites and web apps."
    />
    <meta
      property="og:image"
      content="https://www.portfolio.azatharut.com/og-image.jpg"
    />
    <meta property="og:url" content="https://www.portfolio.azatharut.com/" />
    <meta property="og:type" content="website" />
    {/* Twitter meta tags for social media */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Azatharut - Front-end Development with React"
    />
    <meta
      name="twitter:description"
      content="Azatharut is a leading front-end development company specializing in building modern web applications using React. We create high-performance, responsive, and user-friendly websites and web apps."
    />
    <meta
      name="twitter:image"
      content="https://www.portfolio.azatharut.com/twitter-image.jpg"
    />
    {/* Canonical URL */}
    <link rel="canonical" href="https://www.portfolio.azatharut.com/" />
  </>

</Helmet>
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/home',
  title: 'AH.',
}

const about = {
  name: 'AZAT HARUTYUNYAN',
  role: 'Junior front-end developer',
  description:
    'Junior front-end developer living in france ready to help with your projects.',
  social: {
    linkedin: 'https://fr.linkedin.com/in/azat-harutyunyan-487570210?trk=public_post_feed-actor-name',
    github: 'https://github.com/azat4444',
  },
}

const projects = [
  {
    name: 'Arev Society Inc',
    description:
      'The Arev Society is a tax-exempt 501(c)(3) corporation that fosters philanthropy and solidarity among the American people to support vulnerable Armenians worldwide.',
    livePreview: 'https://arev-society-react-git-master-azats-projects-0dbdb0ff.vercel.app/index.html',
  },



  {
    name: 'ToDoList',
    description:
      'This interactive and functional ToDoList allows users to add, modify, and remove tasks. The tasks colors change to indicate their status or progress.',
    livePreview: 'https://to-do-list-delta-dusky.vercel.app/',
  },

  {
    name: 'Contact form',
    description:
      'This contact form seamlessly connects users to your inbox. Just input your name and message, and hit send.',
    livePreview: 'https://contact-form-git-master-azats-projects-0dbdb0ff.vercel.app/',
  },

  {
    name: 'Survey form',
    description:
      'Start your day evaluation. Get your score with these 1o statements.',
    livePreview: 'https://survey-form-five-beta.vercel.app/',
  },

  {
    name: 'Photography portfolio',
    description:
      'The photography portfolio project presents a captivating array of images, carefully curated to reflect the passion and the creativity.',
    livePreview: 'https://bnwav-44-photography.vercel.app/',
  },




]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React-Native',
  'Git',
  'After-Effect',
  'Premiere Pro',

]

const contact = {

  email: 'azat.harut@gmail.com',
}

export { header, about, projects, skills, contact }
