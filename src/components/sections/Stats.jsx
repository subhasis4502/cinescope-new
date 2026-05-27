import React from 'react'
import { COLORS } from '../../config/theme'

const Stats = () => {
  const stats = [
    {
      number: '250+',
      label: 'Couples Celebrated',
    },
    {
      number: '45+',
      label: 'Countries Filmed',
    },
    {
      number: '15K+',
      label: 'Hours of Footage',
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f5e6d3]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3
                className="text-3xl md:text-4xl font-serif font-bold mb-3"
                style={{ color: COLORS.accent }}
              >
                {stat.number}
              </h3>
              <p
                className="text-sm md:text-base font-medium tracking-widest"
                style={{ color: COLORS.textGray }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
