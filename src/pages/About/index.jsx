import { FiAward, FiBookOpen, FiCamera, FiChevronLeft, FiChevronRight, FiUsers } from 'react-icons/fi'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import { handleInternalClick } from '../../utils/navigation'
import './styles.css'

const AboutPage = ({ activeNav, onNavigate }) => {
  const approachItems = [
    [FiBookOpen, 'STORY FIRST', 'We focus on real moments and authentic emotions to craft your unique story.'],
    [FiCamera, 'ARTISTIC VISION', 'A blend of fine art photography and cinematic storytelling for timeless results.'],
    [FiUsers, 'PERSONALIZED SERVICE', 'We take time to understand you, your vision, and your dream wedding.'],
    [FiAward, 'TIMELESS QUALITY', 'Heirloom quality images and films that you will treasure forever.'],
  ]

  const team = [
    ['KUNAL SHRESTHA', 'Founder & Lead Photographer', 'The creative eye behind the lens, capturing emotions in their most beautiful form.', '/images/about/team-kunal.jpg'],
    ['NIKHIL C.', 'Lead Cinematographer', 'Turning moments into cinematic masterpieces that you will want to relive forever.', '/images/about/team-nikhil.jpg'],
    ['ANJALI SHRESTHA', 'Creative Director', 'The heart behind our stories, ensuring every detail reflects your love and vision.', '/images/about/team-anjali.jpg'],
    ['BIBEK THAPA', 'Editor', 'Crafting cinematic films and editing stories that leave a lasting impact.', '/images/about/team-bibek.jpg'],
  ]

  const features = ['WEDDINGSUTRA', 'WEDDINGWIRE', 'WedMeGood', 'FEARLESS', 'shaadi']

  return (
    <div className="demo-home about-page page-shell">
      <Header activeNav={activeNav} onNavigate={onNavigate} />
      <main>
        <section className="about-approach">
          <img className="about-decor about-decor-left" src="/images/about/approach-left.png" alt="" />
          <img className="about-decor about-decor-right" src="/images/about/approach-right.png" alt="" />
          <p className="mini-label">OUR APPROACH</p>
          <h1>The Spotlight Experience</h1>
          <span className="chapter-rule"></span>
          <p className="about-intro">We believe every wedding is a story waiting to be told. Our approach is rooted in artistry, authenticity, and a deep understanding of emotions.</p>

          <div className="approach-grid">
            {approachItems.map(([Icon, title, copy]) => (
              <article key={title}>
                <span><Icon /></span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="team-section">
          <p className="mini-label">OUR TEAM</p>
          <h2>The Creative Minds Behind The Stories</h2>
          <span className="chapter-rule"></span>
          <button className="team-arrow team-arrow-left" aria-label="Previous team member"><FiChevronLeft /></button>
          <button className="team-arrow team-arrow-right" aria-label="Next team member"><FiChevronRight /></button>

          <div className="team-grid">
            {team.map(([name, role, copy, image]) => (
              <article key={name}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{role}</p>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-logos">
          <p className="mini-label">FEATURED IN</p>
          <h2>Proudly Featured &amp; Recognized</h2>
          <div>
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div>
            <h2>Let's Create Something Beautiful Together</h2>
            <p>We would love to hear your story and be a part of your journey.</p>
            <a href="/#contact" className="solid-link" onClick={(event) => handleInternalClick(event, onNavigate)}>GET IN TOUCH</a>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default AboutPage
