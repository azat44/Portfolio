import { about } from '../../lib/portfolio'
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <a href={about.social.linkedin} className="link footer__link">
      Created by {about.name}
    </a>
  </footer>
)

export default Footer
