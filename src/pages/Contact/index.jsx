import { FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import './styles.css'

const WHATSAPP_NUMBER = '919876543210'
const WHATSAPP_DISPLAY = '+91 98765 43210'
const EMAIL = 'hello@cinescope.studio'

const ContactPage = ({ activeNav, onNavigate }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Email integration to be wired up later.
  }

  return (
    <div className="demo-home contact-page page-shell">
      <Header activeNav={activeNav} onNavigate={onNavigate} />
      <main>
        <section className="subpage-hero contact-hero">
          <img className="subpage-floral-left" src="/images/decorations/floral-top-left.png" alt="" />
          <img className="subpage-floral-right" src="/images/decorations/floral-top-right.png" alt="" />
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Let's Start Planning<em>Your Wedding Story</em></h1>
          <p>Have a date in mind, or just exploring? We'd love to hear from you and bring your vision to life.</p>
        </section>

        <section className="contact-section">
          <div className="contact-info">
            <h2>Reach Us Directly</h2>
            <span className="chapter-rule"></span>
            <p>Prefer a quick chat? Message us on WhatsApp or drop an email, we typically respond within a day.</p>

            <div className="contact-methods">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method-icon">
                  <FaWhatsapp />
                </span>
                <span className="contact-method-text">
                  <span className="contact-method-label">WhatsApp</span>
                  <span className="contact-method-value">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>

              <a href={`mailto:${EMAIL}`} className="contact-method">
                <span className="contact-method-icon">
                  <FiMail />
                </span>
                <span className="contact-method-text">
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-value">{EMAIL}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send An Inquiry</h2>
            <span className="chapter-rule"></span>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your full name" required />
              </label>

              <label className="contact-field">
                <span>Contact Info</span>
                <input type="text" name="contactInfo" placeholder="Phone number or email" required />
              </label>

              <label className="contact-field">
                <span>Note <em>(optional)</em></span>
                <textarea
                  name="note"
                  rows="4"
                  placeholder="Tell us about your wedding date, location, or anything else"
                />
              </label>

              <button type="submit" className="solid-link contact-submit">SEND MESSAGE</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default ContactPage
