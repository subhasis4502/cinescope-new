import { handleInternalClick } from '../../utils/navigation'

const SiteFooter = ({ onNavigate }) => (
  <footer id="contact" className="demo-footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <h2>Cinescope</h2>
        <p>STUDIO</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/" onClick={(event) => handleInternalClick(event, onNavigate)}>HOME</a>
        <a href="/stories" onClick={(event) => handleInternalClick(event, onNavigate)}>STORIES</a>
        <a href="/#films" onClick={(event) => handleInternalClick(event, onNavigate)}>FILMS</a>
        <a href="/philosophy" onClick={(event) => handleInternalClick(event, onNavigate)}>PHILOSOPHY</a>
        <a href="/testimonials" onClick={(event) => handleInternalClick(event, onNavigate)}>TESTIMONIALS</a>
        <a href="/#experience" onClick={(event) => handleInternalClick(event, onNavigate)}>EXPERIENCE</a>
        <a href="/#contact" onClick={(event) => handleInternalClick(event, onNavigate)}>CONTACT</a>
      </nav>
      <div className="footer-contact">
        <a href="mailto:hello@cinescope.studio">HELLO@CINESCOPE.STUDIO</a>
        <span>+91 98765 43210</span>
      </div>
    </div>
    <p className="footer-copy">&copy; 2026 Cinescope Studio. All rights reserved.</p>
  </footer>
)

export default SiteFooter
