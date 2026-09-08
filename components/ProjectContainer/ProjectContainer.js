import { ExternalLink } from 'lucide-react'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className="project">
    {project.livePreview && (
      <a href={project.livePreview} aria-label="live preview">
        <h3>{project.name}</h3>
      </a>
    )}

    <p className="project__description">{project.description}</p>

    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={item} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <ExternalLink size={20} />
      </a>
    )}
  </div>
)

export default ProjectContainer
