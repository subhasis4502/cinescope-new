import React from 'react'
import { COLORS, NAVIGATION_MENU, SOCIAL_LINKS } from '../../config/theme'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-serif font-bold mb-2" style={{ color: COLORS.primary }}>
              Cinescope
            </div>
            <p className="text-xs text-gray-400 tracking-widest mb-4">WEDDING FILMS</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Creating cinematic stories that celebrate the love, joy, and beauty of your special day.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium tracking-widest mb-4 text-sm">NAVIGATION</h3>
            <ul className="space-y-3">
              {NAVIGATION_MENU.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium tracking-widest mb-4 text-sm">SERVICES</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Cinematic Films</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Highlight Reels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Same-Day Edits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Drone Footage</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-medium tracking-widest mb-4 text-sm">CONNECT</h3>
            <p className="text-sm text-gray-400 mb-4">hello@cinescope.com</p>
            <div className="mb-6">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Cinescope. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
