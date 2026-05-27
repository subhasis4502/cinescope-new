import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi'
import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import { STORY_DATA } from '../../data/stories'
import { handleInternalClick } from '../../utils/navigation'
import './styles.css'

const StoryDetailPage = ({ story, activeNav, onNavigate }) => {
  const detailStory = story || STORY_DATA[0]
  const galleryImages = [
    '/images/story-detail/gallery-1.jpg',
    '/images/story-detail/gallery-2.jpg',
    '/images/story-detail/gallery-3.jpg',
    '/images/story-detail/gallery-4.jpg',
    '/images/story-detail/gallery-5.jpg',
    '/images/story-detail/gallery-6.jpg',
    '/images/story-detail/gallery-7.jpg',
    '/images/story-detail/gallery-8.jpg',
  ]

  return (
    <div className="demo-home story-detail-page page-shell">
      <Header activeNav={activeNav} onNavigate={onNavigate} />

      <main>
        <section className="detail-hero">
          <img className="detail-floral-left" src="/images/story-detail/detail-floral-left.png" alt="" />
          <div className="detail-hero-copy">
            <a href="/stories" className="back-link" onClick={(event) => handleInternalClick(event, onNavigate)}>BACK TO STORIES</a>
            <p className="eyebrow">{detailStory.marker}</p>
            <h1>
              {detailStory.names[0]}
              <span>&amp;</span>
              {detailStory.names[1]}
            </h1>
            <p>{detailStory.copy}</p>
            <div className="story-meta">
              <span><FiCalendar />{detailStory.date}</span>
              <span><FiMapPin />{detailStory.place}</span>
              <span><FiUsers />{detailStory.duration}</span>
            </div>
          </div>
          <img className="detail-hero-image" src={detailStory.slug === 'ananya-rohit' ? '/images/story-detail/detail-hero.jpg' : detailStory.image} alt={`${detailStory.names.join(' and ')} wedding portrait`} />
        </section>

        <nav className="chapter-nav" aria-label="Story chapters">
          {['THE STORY', '01 THE BEGINNING', '02 HALDI', '03 WEDDING', '04 CEREMONY', '05 RECEPTION', '06 FAREWELL'].map((chapter, index) => (
            <a className={index === 1 ? 'active' : ''} href="#beginning" key={chapter}>
              {chapter}
            </a>
          ))}
        </nav>

        <section id="beginning" className="chapter-section">
          <div className="chapter-copy">
            <p className="mini-label">CHAPTER 01</p>
            <h2>The Beginning</h2>
            <span className="chapter-rule"></span>
            <p>Every love story is beautiful, but theirs is our favorite.</p>
            <a href="#moments" className="solid-link">VIEW GALLERY</a>
          </div>
          <img src={detailStory.slug === 'ananya-rohit' ? '/images/story-detail/chapter-main.jpg' : detailStory.image} alt={`${detailStory.names.join(' and ')} chapter`} />
        </section>

        <section id="moments" className="moments-section">
          <p className="eyebrow">MOMENTS WE LOVED</p>
          <div className="moments-grid">
            {galleryImages.map((image) => (
              <img src={image} alt={`${detailStory.names.join(' and ')} wedding moment`} key={image} />
            ))}
          </div>
        </section>

        <section className="quote-section">
          <img className="quote-couple" src="/images/story-detail/quote-couple.jpg" alt="" />
          <blockquote>
            <span>&ldquo;</span>
            They captured the emotions, the in-between moments and the beauty we didn't even see.
            <cite>{detailStory.quoteName}</cite>
          </blockquote>
          <img className="quote-leaf" src="/images/story-detail/quote-leaf-pillar.jpg" alt="" />
        </section>
      </main>

      <SiteFooter onNavigate={onNavigate} />
    </div>
  )
}

export default StoryDetailPage
