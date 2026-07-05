import { useRef } from "react";
import {
  FiBookOpen,
  FiCamera,
  FiChevronLeft,
  FiChevronRight,
  FiGlobe,
  FiPlay,
  FiVideo,
} from "react-icons/fi";
import { BsCameraReels } from "react-icons/bs";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { STORY_DATA } from "../../data/stories";
import { handleInternalClick } from "../../utils/navigation";
import "./styles.css";

const HomePage = ({ activeNav, onNavigate }) => {
  const frameRowRef = useRef(null);

  const scrollFrames = (direction) => {
    frameRowRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  const stories = STORY_DATA.slice(0, 3);

  const services = [
    [FiCamera, "PHOTOGRAPHY", "Candid & editorial wedding photography"],
    [FiVideo, "WEDDING FILMS", "Cinematic storytelling that lasts forever"],
    [
      FiGlobe,
      "DESTINATION",
      "From mountains to beaches, we travel where love takes you",
    ],
    [BsCameraReels, "REELS & SHORTS", "Creative reels to relive and share"],
    [FiBookOpen, "LUXURY ALBUMS", "Handcrafted albums that preserve memories"],
  ];

  const frames = [
    "/images/demo/insta-1.jpg",
    "/images/demo/insta-2.jpg",
    "/images/demo/insta-3.jpg",
    "/images/demo/insta-4.jpg",
    "/images/demo/insta-5.jpg",
    "/images/demo/insta-6.jpg",
    "/images/demo/insta-7.jpg",
  ];

  return (
    <div className="demo-home page-shell" key="home-page">
      <Header activeNav={activeNav} onNavigate={onNavigate} />

      <main>
        <section id="home" className="demo-hero">
          {/* Decorative Florals */}

          <img
            className="hero-floral hero-floral-left"
            src="/images/decorations/floral-top-left.png"
            alt=""
            aria-hidden="true"
          />

          <img
            className="hero-floral hero-floral-right"
            src="/images/decorations/floral-top-right.png"
            alt=""
            aria-hidden="true"
          />

          {/* Background Glow */}

          <div className="hero-glow hero-glow-left" />

          <div className="hero-glow hero-glow-right" />

          {/* Left Content */}

          <div className="demo-hero-copy">
            <p className="eyebrow">CAPTURING EMOTIONS</p>

            <h1>
              <span>TIMELESS</span>

              <em>Wedding</em>

              <span>STORIES</span>
            </h1>

            <p className="hero-text">
              Every wedding is filled with fleeting moments, heartfelt emotions,
              and unforgettable memories. We transform them into cinematic
              stories you'll relive forever.
            </p>

            <a
              href="/stories"
              className="hero-button"
              onClick={(event) => handleInternalClick(event, onNavigate)}
            >
              VIEW OUR STORIES
            </a>

            <div className="hero-meta">
              <span className="hero-dot" />

              <span className="hero-location">AVAILABLE WORLDWIDE</span>
            </div>

            {/* Couple Illustration */}

            <div className="hero-couple-card">
              <img
                className="hero-couple"
                src="/images/hero/couple-illustration.png"
                alt="Wedding illustration"
              />

              <img
                className="hero-couple-floral"
                src="/images/decorations/floral-bottom-left.png"
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Bride */}

          <div className="hero-image">
            <img
              className="hero-bride"
              src="/images/hero/bride-side.png"
              alt="Bride portrait"
            />
          </div>

          {/* Scroll Indicator */}

          <div className="hero-scroll">
            <span>SCROLL</span>

            <div className="hero-scroll-line" />
          </div>
        </section>

        <section id="stories" className="featured-section">
          <div className="section-inner featured-grid">
            <div className="feature-intro">
              <p className="eyebrow">FEATURED STORIES</p>
              <h2>
                Every Love Story
                <br />
                Is Beautiful
              </h2>
              <a
                href="/stories"
                className="text-link"
                onClick={(event) => handleInternalClick(event, onNavigate)}
              >
                VIEW ALL STORIES <span></span>
              </a>
            </div>
            <div className="story-list">
              {stories.map((story) => (
                <a
                  href={`/stories/${story.slug}`}
                  className="story-card"
                  key={story.slug}
                  onClick={(event) => handleInternalClick(event, onNavigate)}
                >
                  <div className="story-card-image">
                    <img src={story.image} alt={`${story.names.join(" & ")} wedding`} />
                  </div>
                  <h3>{story.names.join(" & ")}</h3>
                  <p>{story.place}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="films" className="film-section">
          <div className="section-inner film-grid">
            <div className="film-copy">
              <p className="eyebrow">CINEMATIC FILMS</p>
              <h2>Relive The Magic</h2>
              <p>
                Our films are crafted to make you feel the emotions all over
                again.
              </p>
              <a href="#films" className="text-link">
                WATCH FILMS <span></span>
              </a>
            </div>
            <div className="film-frame">
              <img src="/images/demo/film.jpg" alt="Wedding film preview" />
              <button aria-label="Play wedding film">
                <FiPlay />
              </button>
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
            <button
              type="button"
              className="slider-arrow slider-left"
              aria-label="Scroll frames left"
              onClick={() => scrollFrames(-1)}
            >
              <FiChevronLeft />
            </button>
            <div className="frame-row" ref={frameRowRef}>
              {frames.map((image) => (
                <img src={image} alt="Wedding story frame" key={image} />
              ))}
            </div>
            <button
              type="button"
              className="slider-arrow slider-right"
              aria-label="Scroll frames right"
              onClick={() => scrollFrames(1)}
            >
              <FiChevronRight />
            </button>
          </div>
          <a className="instagram-link" href="#contact">
            FOLLOW US @CINESCOPE.STUDIO
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
