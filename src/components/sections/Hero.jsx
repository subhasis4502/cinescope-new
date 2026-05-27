import React from 'react'
import { COLORS } from '../../config/theme'

const Hero = () => {
  return (
    <section className="pt-20 md:pt-0 relative h-screen md:h-[700px] flex items-center">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/portfolio/hero.jpg"
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - White Overlay Box */}
            <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 md:p-12 rounded-sm">
              {/* Small Image */}
              <div className="mb-8 h-64 md:h-80 rounded-sm overflow-hidden">
                <img
                  src="/images/portfolio/story-1.jpg"
                  alt="Wedding moment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div>
                {/* Subtitle */}
                <p className="text-xs md:text-sm font-medium tracking-widest mb-4" style={{ color: COLORS.accent }}>
                  · WEDDING CINEMATOGRAPHY ·
                </p>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: COLORS.textDark }}>
                  Timeless
                </h1>

                {/* Wedding in italics - pink */}
                <h2 className="font-serif text-4xl md:text-5xl italic mb-2" style={{ color: COLORS.rose }}>
                  Wedding
                </h2>

                {/* Stories */}
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.textDark }}>
                  Stories
                </h2>

                {/* Description */}
                <p className="text-base mb-8" style={{ color: COLORS.textGray }}>
                  We capture real moments and turn them into timeless memories that will last forever.
                </p>

                {/* CTA Button */}
                <button
                  className="text-sm font-medium tracking-widest px-8 py-3 transition-all hover:translate-x-2"
                  style={{ 
                    color: COLORS.primary,
                    borderBottom: `2px solid ${COLORS.primary}`,
                    backgroundColor: 'transparent'
                  }}
                >
                  VIEW OUR STORIES →
                </button>
              </div>
            </div>

            {/* Right Side - Main Image (visible only on larger screens) */}
            <div className="hidden md:block relative h-full">
              {/* Decorative element */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
