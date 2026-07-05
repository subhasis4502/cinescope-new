import React from "react";
import { COLORS } from "../../config/theme";

const Hero = () => {
  return (
    <section
      className="relative pt-24 md:pt-0 md:min-h-[820px] overflow-hidden flex items-center"
      style={{
        background: `radial-gradient(circle at 78% 35%, rgba(234,216,198,0.65), transparent 30%),
                     radial-gradient(circle at 15% 80%, rgba(245,236,227,0.9), transparent 28%),
                     linear-gradient(90deg, #fbf8f4 0%, #faf6f1 45%, #f8efe7 100%)`,
      }}
    >
      {/* Decorative florals - desktop only */}
      <img
        src="/images/decorations/floral-top-left.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-0 left-0 w-60 pointer-events-none select-none z-[15]"
      />
      <img
        src="/images/decorations/floral-top-right.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-0 right-0 w-60 pointer-events-none select-none z-[15]"
      />

      {/* Background glows */}
      <div
        className="hidden md:block absolute w-[500px] h-[500px] rounded-full blur-[120px] -left-44 -bottom-36 z-0 pointer-events-none"
        style={{ background: "rgba(248,231,212,0.65)" }}
      />
      <div
        className="hidden md:block absolute w-[620px] h-[620px] rounded-full blur-[120px] -right-36 -top-44 z-0 pointer-events-none"
        style={{ background: "rgba(245,223,202,0.65)" }}
      />

      {/* Left copy — absolute on desktop, static/stacked on mobile */}
      <div
        className="relative md:absolute z-20 w-full md:w-[480px] px-6 md:px-0
                   md:left-[8%] md:top-1/2 md:-translate-y-1/2
                   text-center md:text-left pb-10 md:pb-0"
      >
        <p
          className="text-xs tracking-[0.28em] font-medium mb-4"
          style={{ color: COLORS.accent }}
        >
          CAPTURING EMOTIONS
        </p>

        <h1
          className="font-serif leading-[0.95]"
          style={{ color: COLORS.textDark }}
        >
          <span className="block text-5xl md:text-7xl tracking-wide font-medium">
            TIMELESS
          </span>
          <span
            className="block text-6xl md:text-8xl italic font-normal -my-1 md:-my-3"
            style={{ color: COLORS.rose }}
          >
            Wedding
          </span>
          <span className="block text-5xl md:text-7xl tracking-wide font-medium">
            STORIES
          </span>
        </h1>

        <p
          className="max-w-md mx-auto md:mx-0 mt-8 mb-8 text-base leading-loose"
          style={{ color: COLORS.textGray }}
        >
          Every wedding is filled with fleeting moments, heartfelt emotions, and
          unforgettable memories. We transform them into cinematic stories
          you'll relive forever.
        </p>

        <a
          href="/stories"
          className="inline-flex items-center justify-center px-9 py-4 text-xs tracking-[0.28em] border transition-colors duration-300"
          style={{ borderColor: COLORS.primary, color: COLORS.primary }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = COLORS.primary;
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = COLORS.primary;
          }}
        >
          VIEW OUR STORIES
        </a>

        <div className="flex items-center justify-center md:justify-start gap-3 mt-8">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: COLORS.primary }}
          />
          <span
            className="text-[11px] tracking-[0.35em]"
            style={{ color: COLORS.textGray }}
          >
            AVAILABLE WORLDWIDE
          </span>
        </div>
      </div>

      {/* Couple photo card - overlaps bottom-left of hero image, desktop only */}
      <div
        className="hidden md:block absolute z-[25] left-[7%] bottom-12 w-[170px] bg-white p-3.5 shadow-xl"
        style={{ border: "1px solid #e7ddd1" }}
      >
        <img
          src="/images/portfolio/couple-illustration.png"
          alt="Wedding illustration"
          className="w-full block"
        />
      </div>

      {/* Bride image - bleeds off right edge, desktop; stacked below copy on mobile */}
      <div className="relative md:absolute md:right-[3%] md:bottom-0 z-[5] w-full md:w-[560px] px-6 md:px-0">
        <img
          src="/images/portfolio/hero.jpg"
          alt="Bride portrait"
          className="w-full md:w-[560px] h-auto object-contain block"
          style={{ filter: "drop-shadow(0 35px 70px rgba(0,0,0,0.14))" }}
        />
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="hidden md:flex absolute left-1/2 bottom-7 -translate-x-1/2 flex-col items-center z-[15]">
        <span
          className="text-[10px] tracking-[0.35em] mb-2.5"
          style={{ color: COLORS.textGray }}
        >
          SCROLL
        </span>
        <div className="w-px h-14" style={{ backgroundColor: "#d6c8ba" }} />
      </div>
    </section>
  );
};

export default Hero;
