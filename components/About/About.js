import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { about } from '../../lib/portfolio'
import './About.css'

const About = () => {
  const { name, role, description, social } = about

  return (
    <div className="about center">
      {name && (
        <h1 className="about__reveal about__reveal--1">
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && (
        <h2 className="about__role about__reveal about__reveal--2">
          A {role}.
        </h2>
      )}
      <p className="about__desc about__reveal about__reveal--3">
        {description && description}
      </p>

      <div className="about__contact center about__reveal about__reveal--4">
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <FaGithub size={24} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
