import React from 'react'
import { COLORS } from '../../config/theme'

const FeaturedPortfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Ananya & Rohit',
      subtitle: 'Kerala Wedding',
      image: '/images/portfolio/story-1.jpg',
    },
    {
      id: 2,
      title: 'Sneha & Arjun',
      subtitle: 'Udaipur Celebration',
      image: '/images/portfolio/story-2.jpg',
    },
    {
      id: 3,
      title: 'Meghna & Vikram',
      subtitle: 'Goa Wedding',
      image: '/images/portfolio/story-4.jpg',
    },
    {
      id: 4,
      title: 'Priya & Aditya',
      subtitle: 'Mumbai Reception',
      image: '/images/portfolio/story-5.jpg',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#fdf8f3]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base font-medium tracking-widest mb-4" style={{ color: COLORS.accent }}>
            FEATURED WORK
          </p>
          <h2 className="font-serif font-bold mb-6" style={{ color: COLORS.textDark }}>
            Our Latest Cinematic Stories
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: COLORS.textGray }}>
            Every wedding has a unique story. Here are some of our most recent and beloved pieces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden aspect-square md:aspect-[4/5] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6 md:p-8"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <div className="text-white">
                  <p className="text-sm md:text-base font-medium tracking-widest mb-2" style={{ color: COLORS.accent }}>
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <button
            className="btn-primary"
            style={{ 
              backgroundColor: COLORS.primary,
              borderColor: COLORS.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primaryDark
              e.currentTarget.style.borderColor = COLORS.primaryDark
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary
              e.currentTarget.style.borderColor = COLORS.primary
            }}
          >
            VIEW ALL STORIES
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPortfolio
