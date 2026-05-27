import { useState } from 'react'
import { FiFacebook, FiInstagram, FiMenu, FiX, FiYoutube } from 'react-icons/fi'

const Header = ({ activeNav = 'HOME', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = [
    ['HOME', '/'],
    ['ABOUT', '/#about'],
    ['STORIES', '/stories'],
    ['FILMS', '/#films'],
    ['PHILOSOPHY', '/philosophy'],
    ['TESTIMONIALS', '/testimonials'],
    ['EXPERIENCE', '/#experience'],
    ['JOURNAL', '/#journal'],
    ['CONTACT', '/#contact'],
  ]
  const handleClick = (event) => {
    event.preventDefault()
    setMobileMenuOpen(false)
    onNavigate?.(event.currentTarget.getAttribute('href'))
  }

  return (
    <header className="demo-header">
      <div className="demo-header-inner">
        <a href="/" className="demo-logo" aria-label="Cinescope Studio home" onClick={handleClick}>
          <span>Cinescope</span>
          <small>STUDIO</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([item, href]) => (
            <a href={href} className={activeNav === item ? 'active' : ''} key={item} onClick={handleClick}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-socials" aria-label="Social links">
          <a href="https://instagram.com" aria-label="Instagram"><FiInstagram /></a>
          <a href="https://facebook.com" aria-label="Facebook"><FiFacebook /></a>
          <a href="https://youtube.com" aria-label="YouTube"><FiYoutube /></a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([item, href]) => (
            <a
              href={href}
              className={activeNav === item ? 'active' : ''}
              key={item}
              onClick={handleClick}
            >
              {item}
            </a>
          ))}
          <div>
            <a href="https://instagram.com" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FiFacebook /></a>
            <a href="https://youtube.com" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
