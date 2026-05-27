import React from 'react'
import { COLORS } from '../../config/theme'

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#fdf8f3]">
      <div className="container-custom">
        <div
          className="relative overflow-hidden rounded-lg p-12 md:p-20 text-center"
          style={{ backgroundColor: COLORS.primary }}
        >
          <h2 className="font-serif font-bold text-white mb-6">
            Ready to Tell Your Love Story?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Let us capture the most important moments of your life. Get in touch to discuss your vision and wedding date.
          </p>
          <button
            className="btn-accent"
            style={{ 
              backgroundColor: COLORS.accent,
              borderColor: COLORS.accent,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.accentDark
              e.currentTarget.style.borderColor = COLORS.accentDark
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.accent
              e.currentTarget.style.borderColor = COLORS.accent
            }}
          >
            BOOK A CONSULTATION
          </button>
        </div>

        {/* Contact Info Below CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: COLORS.accent }}>
              PHONE
            </p>
            <p className="text-lg font-serif" style={{ color: COLORS.textDark }}>
              +1 (555) 123-4567
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: COLORS.accent }}>
              EMAIL
            </p>
            <p className="text-lg font-serif" style={{ color: COLORS.textDark }}>
              hello@cinescope.com
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest mb-2" style={{ color: COLORS.accent }}>
              LOCATION
            </p>
            <p className="text-lg font-serif" style={{ color: COLORS.textDark }}>
              New York, USA
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
