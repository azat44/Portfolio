import { Helmet } from "react-helmet"

<Helmet>
  <>
    <title>Web Development Portfolio | Azat Harut</title>{" "}
    <meta
      name="description"
      content="Learn web development with React and JavaScript. Get hands-on tutorials, code examples, and best practices from Azat Harut's website."
    />{" "}
    <meta
      name="keywords"
      content="web development, react, javascript, tutorials, coding, frontend"
    />{" "}
    <meta name="author" content="Azat Harut" />{" "}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
    <meta name="robots" content="index, follow" />{" "}
    <meta
      name="googlebot"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />{" "}
    <meta
      name="bingbot"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />{" "}
    <link rel="canonical" href="https://azat-harut.avdevex.com" />
  </>

</Helmet>
const header = {
  homepage: '/home',
  title: 'AH.',
}

const about = {
  name: 'AZAT HARUTYUNYAN',
  role: 'Junior front-end developer',
  description:
    'Junior front-end developer living in france ready to help with your projects',
  resume: 'CV .pdf',
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
    livePreview: 'https://arevsociety.org/',
  },

  {
    name: 'Photography portfolio',
    description:
      'This Photography website is dedicated  to the black and white photography, shadows and architecture',
    livePreview: 'https://bnw-av.com/',
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
    name: 'ToDoList',
    description:
      'This interactive and functional ToDoList allows users to add, modify, and remove tasks. The tasks colors change to indicate their status or progress.',
    livePreview: 'https://to-do-list-delta-dusky.vercel.app/',
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
