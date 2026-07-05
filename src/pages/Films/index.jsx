import { FiCamera, FiCpu, FiEdit3, FiFilm, FiMic, FiPlay, FiSliders, FiVolume2 } from 'react-icons/fi'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import { handleInternalClick } from '../../utils/navigation'
import './styles.css'

const FilmsPage = ({ activeNav, onNavigate }) => {
  const featuredFilms = [
    ['Diya & Karan', 'Pokhara, Nepal', '04:12', '/images/films/film-diya.jpg'],
    ['Ananya & Rohan', 'Udaipur, Rajasthan', '05:47', '/images/films/film-ananya.jpg'],
    ['Megha & Arjun', 'Jaipur, Rajasthan', '04:05', '/images/films/film-megha.jpg'],
  ]

  const services = [
    [FiFilm, 'Cinematic Storytelling', 'We tell your story like a movie.'],
    [FiCamera, 'High End Equipment', 'Latest cinema cameras, lenses & stabilizers.'],
    [FiVolume2, 'Emotional Sound Design', 'Music that enhances every emotion.'],
    [FiSliders, 'Color Grading', 'Cinematic color tones that feel timeless.'],
  ]

  const process = [
    [FiMic, 'We Listen', 'We understand your story & vision.'],
    [FiCamera, 'We Plan', 'Shot planning & creative concept.'],
    [FiCpu, 'We Capture', 'Cinematic filming with precision.'],
    [FiEdit3, 'We Edit', 'Storytelling, music & emotional flow.'],
    [FiSliders, 'We Grade', 'Color grading for a timeless look.'],
    [FiFilm, 'We Deliver', 'A film you will cherish forever.'],
  ]

  return (
    <div className="demo-home films-page page-shell">
      <Header activeNav={activeNav} onNavigate={onNavigate} />
      <main>
        <section className="films-hero">
          <img src="/images/films/hero.jpg" alt="Wedding film ceremony" />
          <div className="films-hero-copy">
            <p className="mini-label">WEDDING FILMS THAT</p>
            <h1>Bring Your Story<br />To Life.</h1>
            <span className="chapter-rule"></span>
            <p>Our films are crafted with emotion, cinematic storytelling and a timeless artistic touch.</p>
            <div>
              <a href="#films-featured" className="solid-link"><FiPlay /> WATCH SHOWREEL</a>
              <a href="#films-process" className="outline-link">VIEW PROCESS <span></span></a>
            </div>
          </div>
          <button className="hero-play" aria-label="Play film"><FiPlay /></button>
          <span className="sound-pill"><FiVolume2 /> Play with sound</span>
        </section>

        <section id="films-featured" className="film-strip">
          {featuredFilms.map(([title, place, time, image], index) => (
            <article className={index === 1 ? 'featured' : ''} key={title}>
              <img src={image} alt={`${title} wedding film`} />
              <button aria-label={`Play ${title} film`}><FiPlay /></button>
              <div>
                <h2>{title}</h2>
                <p>{place}</p>
              </div>
              <span>{time}</span>
            </article>
          ))}
        </section>

        <section className="film-services">
          <img className="films-decor-left" src="/images/films/decor-left.png" alt="" />
          <img className="films-decor-right" src="/images/films/decor-right.png" alt="" />
          <div className="film-services-copy">
            <h2>More Than Just<br />A Wedding Film</h2>
            <span className="chapter-rule"></span>
            <p>Every frame is intentional. Every moment is immortal. We don't just document your wedding, we craft a cinematic memory you will relive for a lifetime.</p>
          </div>
          <div className="film-service-grid">
            {services.map(([Icon, title, copy]) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="films-process" className="film-process">
          <p className="mini-label">OUR PROCESS</p>
          <h2>Our Film Making Process</h2>
          <div>
            {process.map(([Icon, title, copy]) => (
              <article key={title}>
                <span><Icon /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="films-testimonial">
          <div className="films-testimonial-title">
            <h2>Kind Words From<br />Our Couples</h2>
            <span className="chapter-rule"></span>
          </div>
          <blockquote>
            <span>&ldquo;</span>
            Spotlight didn't just make a film, they made us relive every emotion all over again. It's beyond beautiful.
            <cite>Ananya &amp; Rohan<br />Udaipur, Rajasthan</cite>
          </blockquote>
          <div className="films-testimonial-gallery">
            <img src="/images/films/testimonial-wide.jpg" alt="Wedding film moment" />
            <img src="/images/films/testimonial-bride.jpg" alt="Bride film still" />
            <img src="/images/films/testimonial-tall.jpg" alt="Couple film still" />
          </div>
        </section>

        <section className="films-cta">
          <h2>Let us turn your moments into a timeless film.</h2>
          <a href="/contact" className="outline-light-link" onClick={(event) => handleInternalClick(event, onNavigate)}>LET'S CREATE YOUR STORY <span></span></a>
        </section>
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default FilmsPage
