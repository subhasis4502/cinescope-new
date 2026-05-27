export const getRoute = () => window.location.pathname

export const getActiveNav = () => getActiveNavFromPath(window.location.pathname, window.location.hash)

export const getActiveNavFromPath = (pathname, hash) => {
  if (pathname.startsWith('/stories')) return 'STORIES'
  if (pathname === '/philosophy') return 'PHILOSOPHY'
  if (pathname === '/testimonials') return 'TESTIMONIALS'

  const sectionMap = {
    '#about': 'ABOUT',
    '#stories': 'STORIES',
    '#films': 'FILMS',
    '#experience': 'EXPERIENCE',
    '#journal': 'JOURNAL',
    '#contact': 'CONTACT',
  }

  return sectionMap[hash] || 'HOME'
}

export const handleInternalClick = (event, onNavigate) => {
  event.preventDefault()
  onNavigate(event.currentTarget.getAttribute('href'))
}
