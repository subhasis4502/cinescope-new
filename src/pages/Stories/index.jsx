import Header from '../../components/common/Header'
import SiteFooter from '../../components/common/SiteFooter'
import { STORY_DATA } from '../../data/stories'
import { handleInternalClick } from '../../utils/navigation'
import './styles.css'

const StoriesPage = ({ activeNav, onNavigate }) => (
  <div className="demo-home stories-page page-shell" key="stories-page">
    <Header activeNav={activeNav} onNavigate={onNavigate} />
    <main>
      <section className="stories-hero">
        <img className="stories-floral stories-floral-left" src="/images/stories/stories-floral-left.png" alt="" />
        <img className="stories-floral stories-floral-right" src="/images/stories/stories-floral-right.png" alt="" />
        <p className="eyebrow">OUR STORIES</p>
        <h1>
          Timeless Stories
          <em>Beautifully</em>
          Told
        </h1>
        <p>Every wedding we capture is a story of emotions, connections and moments that last forever. Explore our favorite celebrations.</p>
      </section>

      <section className="stories-collection">
        <nav className="story-filters" aria-label="Story categories">
          <a className="active" href="/stories" onClick={(event) => event.preventDefault()}>ALL STORIES</a>
          <a href="/stories" onClick={(event) => event.preventDefault()}>INDIAN WEDDINGS</a>
          <a href="/stories" onClick={(event) => event.preventDefault()}>DESTINATION WEDDINGS</a>
          <a href="/stories" onClick={(event) => event.preventDefault()}>INTIMATE WEDDINGS</a>
        </nav>

        <div className="story-showcase">
          {STORY_DATA.map((story) => (
            <article className={`story-showcase-card ${story.align === 'right' ? 'image-first' : ''}`} key={story.names.join('&')}>
              {story.align === 'left' && <StoryCopy story={story} onNavigate={onNavigate} />}
              <img src={story.image} alt={`${story.names.join(' and ')} wedding`} />
              {story.align === 'right' && <StoryCopy story={story} onNavigate={onNavigate} />}
            </article>
          ))}
        </div>
      </section>

      <section className="stories-cta">
        <img className="stories-cta-couple" src="/images/stories/footer-couple.jpg" alt="" />
        <div>
          <p className="mini-label">READY TO CREATE YOUR STORY?</p>
          <h2>Let's capture your beautiful journey.</h2>
          <a href="/contact" className="solid-link" onClick={(event) => handleInternalClick(event, onNavigate)}>INQUIRE NOW</a>
        </div>
        <img className="stories-cta-leaf" src="/images/stories/footer-leaf-pillar.jpg" alt="" />
      </section>
    </main>

    <SiteFooter onNavigate={onNavigate} />
  </div>
)

const StoryCopy = ({ story, onNavigate }) => (
  <div className="story-showcase-copy">
    <p className="mini-label">{story.marker}</p>
    <h2>
      {story.names[0]}
      <span>&amp;</span>
      {story.names[1]}
    </h2>
    <p>{story.copy}</p>
    <a href={`/stories/${story.slug}`} className="text-link" onClick={(event) => handleInternalClick(event, onNavigate)}>VIEW STORY <span></span></a>
  </div>
)

export default StoriesPage
