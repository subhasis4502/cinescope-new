import { FiMail, FiMapPin, FiPhone, FiStar } from 'react-icons/fi'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import StatsBand from '../../components/common/StatsBand'
import { handleInternalClick } from '../../utils/navigation'
import './styles.css'

const TestimonialsPage = ({ activeNav, onNavigate }) => {
  const cards = [
    ['SNEHA & ARJUN', 'Udaipur Celebration', '/images/testimonials/avatar-1.jpg', 'From our first conversation to the last delivery, the experience was seamless and so personal. They truly care.'],
    ['MEGHNA & VIKRAM', 'Goa Wedding', '/images/testimonials/avatar-2.jpg', 'We are not the best in front of the camera, but they made us feel so comfortable. The photos and film are beyond what we imagined!'],
    ['DIYA & KARAN', 'Himachal Wedding', '/images/testimonials/avatar-3.jpg', 'The team was like family. They blended in so beautifully and captured moments we did not even realize were happening.'],
  ]

  return (
    <div className="demo-home testimonials-page page-shell">
      <Header activeNav={activeNav} onNavigate={onNavigate} />
      <main>
        <section className="subpage-hero testimonials-hero">
          <img className="subpage-floral-left" src="/images/testimonials/hero-left.png" alt="" />
          <img className="subpage-floral-right" src="/images/testimonials/hero-right.png" alt="" />
          <p className="eyebrow">TESTIMONIALS</p>
          <h1>Kind Words<em>From Our Couples</em></h1>
          <p>Real stories. Honest words. From the people who lived the moments, we captured.</p>
        </section>

        <section className="testimonial-feature">
          <img src="/images/testimonials/feature-1.jpg" alt="Ananya and Rohit wedding portrait" />
          <div>
            <span className="quote-mark">&ldquo;</span>
            <blockquote>They didn't just capture our wedding, they captured how it felt.<em>Every laugh, every tear, every in-between moment.</em></blockquote>
            <p className="testimonial-name">ANANYA &amp; ROHIT</p>
            <p>Kerala Wedding</p>
          </div>
        </section>

        <section className="testimonial-cards">
          {cards.map(([name, place, image, quote]) => (
            <article key={name}>
              <img src={image} alt={`${name} wedding`} />
              <span className="quote-mark">&ldquo;</span>
              <p>{quote}</p>
              <span className="small-divider"></span>
              <h3>{name}</h3>
              <p>{place}</p>
              <div className="stars"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
            </article>
          ))}
        </section>

        <section className="testimonial-feature reverse">
          <img src="/images/testimonials/feature-2.jpg" alt="Ishita and Manav wedding ceremony" />
          <div>
            <span className="quote-mark">&ldquo;</span>
            <blockquote>The magic is in their eyes for details and the way they tell a story. We'll cherish these memories forever and ever.</blockquote>
            <p className="testimonial-name">ISHITA &amp; MANAV</p>
            <p>Tuscany, Italy</p>
            <div className="stars"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
          </div>
        </section>

        <StatsBand />

        <section className="testimonial-cta">
          <img src="/images/testimonials/bottom-couple.jpg" alt="" />
          <div>
            <h2>Ready to create your story?</h2>
            <p>We'd love to hear all about it.</p>
            <a href="/contact" className="solid-link" onClick={(event) => handleInternalClick(event, onNavigate)}>INQUIRE NOW</a>
          </div>
          <address>
            <span><FiMail />hello@cinescope.studio</span>
            <span><FiPhone />+91 98765 43210</span>
            <span><FiMapPin />Based in India. Available worldwide.</span>
          </address>
          <img src="/images/testimonials/bottom-right.png" alt="" />
        </section>
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default TestimonialsPage
