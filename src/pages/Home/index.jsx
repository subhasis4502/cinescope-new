import { FiBookOpen, FiCamera, FiChevronLeft, FiChevronRight, FiGlobe, FiPlay, FiVideo } from 'react-icons/fi'
import { BsCameraReels } from 'react-icons/bs'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import { handleInternalClick } from '../../utils/navigation'
import './styles.css'

const HomePage = ({ activeNav, onNavigate }) => {
  const stories = [
    ['ANANYA & ROHIT', 'Kerala Wedding', '/images/demo/story-ananya.jpg'],
    ['SNEHA & ARJUN', 'Udaipur Celebration', '/images/demo/story-sneha.jpg'],
    ['MEGHNA & VIKRAM', 'Goa Wedding', '/images/demo/story-meghna.jpg'],
  ]

  const services = [
    [FiCamera, 'PHOTOGRAPHY', 'Candid & editorial wedding photography'],
    [FiVideo, 'WEDDING FILMS', 'Cinematic storytelling that lasts forever'],
    [FiGlobe, 'DESTINATION', 'From mountains to beaches, we travel where love takes you'],
    [BsCameraReels, 'REELS & SHORTS', 'Creative reels to relive and share'],
    [FiBookOpen, 'LUXURY ALBUMS', 'Handcrafted albums that preserve memories'],
  ]

  const frames = [
    '/images/demo/insta-1.jpg',
    '/images/demo/insta-2.jpg',
    '/images/demo/insta-3.jpg',
    '/images/demo/insta-4.jpg',
    '/images/demo/insta-5.jpg',
    '/images/demo/insta-6.jpg',
    '/images/demo/insta-7.jpg',
  ]

  return (
    <div className="demo-home page-shell" key="home-page">
      <Header activeNav={activeNav} onNavigate={onNavigate} />

      <main>
        <section id="home" className="demo-hero">
          <img className="hero-floral hero-floral-left" src="/images/demo/floral-left.png" alt="" />
          <img className="hero-floral hero-floral-right" src="/images/demo/floral-right.png" alt="" />
          <div className="demo-hero-copy">
            <p className="eyebrow">CAPTURING EMOTIONS</p>
            <h1>
              <span>TIMELESS</span>
              <em>Wedding</em>
              <span>STORIES</span>
            </h1>
            <p className="hero-text">We capture real moments and turn them into timeless memories.</p>
            <a href="/stories" className="solid-link" onClick={(event) => handleInternalClick(event, onNavigate)}>VIEW OUR STORIES</a>
          </div>
          <img className="hero-couple" src="/images/demo/hero-couple.jpg" alt="Illustrated wedding couple" />
          <img className="hero-bride" src="/images/demo/hero-bride.jpg" alt="Bride in traditional wedding attire" />
        </section>

        <section id="stories" className="featured-section">
          <div className="section-inner featured-grid">
            <div className="feature-intro">
              <p className="eyebrow">FEATURED STORIES</p>
              <h2>Every Love Story<br />Is Beautiful</h2>
              <a href="/stories" className="text-link" onClick={(event) => handleInternalClick(event, onNavigate)}>VIEW ALL STORIES <span></span></a>
            </div>
            <div className="story-list">
              {stories.map(([title, location, image]) => (
                <article className="story-card" key={title}>
                  <img src={image} alt={`${title} wedding`} />
                  <h3>{title}</h3>
                  <p>{location}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="films" className="film-section">
          <div className="section-inner film-grid">
            <div className="film-copy">
              <p className="eyebrow">CINEMATIC FILMS</p>
              <h2>Relive The Magic</h2>
              <p>Our films are crafted to make you feel the emotions all over again.</p>
              <a href="#films" className="text-link">WATCH FILMS <span></span></a>
            </div>
            <div className="film-frame">
              <img src="/images/demo/film.jpg" alt="Wedding film preview" />
              <button aria-label="Play wedding film"><FiPlay /></button>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <p className="eyebrow">THE EXPERIENCE</p>
          <h2>More Than Just Pictures</h2>
          <div className="service-row">
            {services.map(([Icon, title, copy]) => (
              <article className="service-item" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journal" className="instagram-section">
          <p className="eyebrow">FROM INSTAGRAM</p>
          <h2>Stories In Frames</h2>
          <div className="frame-slider">
            <FiChevronLeft className="slider-arrow slider-left" />
            <div className="frame-row">
              {frames.map((image) => (
                <img src={image} alt="Wedding story frame" key={image} />
              ))}
            </div>
            <FiChevronRight className="slider-arrow slider-right" />
          </div>
          <a className="instagram-link" href="#contact">FOLLOW US @CINESCOPE.STUDIO</a>
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default HomePage
