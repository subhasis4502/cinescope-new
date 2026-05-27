import { FiCamera, FiFilm, FiHeart } from 'react-icons/fi'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import StatsBand from '../../components/common/StatsBand'
import './styles.css'

const PhilosophyPage = ({ activeNav, onNavigate }) => {
  const values = [
    [FiCamera, 'Real Moments', 'Nothing staged, everything felt.'],
    [FiFilm, 'Cinematic Vision', 'A film-like look for timeless memories.'],
    [FiHeart, 'Emotional Storytelling', 'We capture emotions that words cannot.'],
  ]

  return (
    <div className="demo-home philosophy-page page-shell">
      <Header activeNav={activeNav} onNavigate={onNavigate} />
      <main>
        <section className="subpage-hero philosophy-hero">
          <img className="subpage-floral-left" src="/images/philosophy/hero-left.png" alt="" />
          <img className="subpage-floral-right" src="/images/philosophy/hero-right.png" alt="" />
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h1>More Than Just Pictures,<em>We Preserve Emotions.</em></h1>
          <p>We believe wedding photography is not about posing, it's about presence. It's about capturing the real, the raw, and the beautiful, just as it unfolds.</p>
        </section>

        <section className="philosophy-split approach-block">
          <img src="/images/philosophy/approach.jpg" alt="Couple sharing a quiet wedding moment" />
          <div className="philosophy-copy">
            <FiHeart className="section-mark" />
            <h2>Our Approach</h2>
            <span className="chapter-rule"></span>
            <p>We are storytellers at heart. Our approach is documentary-driven with a cinematic soul. We blend into the moments, letting you live fully while we capture everything that matters.</p>
            <div className="value-row">
              {values.map(([Icon, title, copy]) => (
                <article key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy-split drives-block">
          <div className="philosophy-copy">
            <FiHeart className="section-mark" />
            <h2>What Drives Us</h2>
            <span className="chapter-rule"></span>
            <p>It's the laughter, the tears, the chaos, the quiet glances, the traditions and the unscripted magic. We are driven by the joy of turning these fleeting moments into timeless heirlooms.</p>
          </div>
          <img src="/images/philosophy/drives.jpg" alt="Wedding ceremony by the sacred fire" />
        </section>

        <section className="philosophy-split timeless-block">
          <img src="/images/philosophy/timeless.jpg" alt="Couple looking over mountains" />
          <div className="philosophy-copy">
            <FiHeart className="section-mark" />
            <h2>Timeless &amp; True</h2>
            <p>Trends fade, but true emotions never do. We don't chase trends, we capture your story in a way that will still feel as real decades from now.</p>
          </div>
        </section>

        <section className="promise-block">
          <img src="/images/philosophy/promise-temple.png" alt="" />
          <FiHeart className="section-mark" />
          <h2>Our Promise</h2>
          <p>We promise to be more than just your photographers. We'll be your calm in the chaos, your extra hands, your storytellers, and your friends.</p>
        </section>

        <StatsBand />

        <section className="bottom-quote">
          <img src="/images/philosophy/bottom-couple.jpg" alt="" />
          <blockquote>We don't just capture weddings,<br />we preserve a feeling, a memory, a legacy.</blockquote>
          <img src="/images/philosophy/bottom-lotus.png" alt="" />
        </section>
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default PhilosophyPage
