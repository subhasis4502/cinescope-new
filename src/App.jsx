import { useEffect, useState } from 'react'
import HomePage from './pages/Home'
import PhilosophyPage from './pages/Philosophy'
import StoriesPage from './pages/Stories'
import StoryDetailPage from './pages/StoryDetail'
import TestimonialsPage from './pages/Testimonials'
import { getStoryBySlug } from './data/stories'
import { getActiveNav, getActiveNavFromPath, getRoute } from './utils/navigation'

function App() {
  const [route, setRoute] = useState(() => getRoute())
  const [activeNav, setActiveNav] = useState(() => getActiveNav())

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRoute())
      setActiveNav(getActiveNav())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (href) => {
    const url = new URL(href, window.location.origin)

    window.history.pushState({}, '', `${url.pathname}${url.hash}`)
    setRoute(url.pathname)
    setActiveNav(getActiveNavFromPath(url.pathname, url.hash))

    window.setTimeout(() => {
      if (url.pathname.startsWith('/stories') || !url.hash || url.hash === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 40)
  }

  if (route === '/stories') {
    return <StoriesPage activeNav={activeNav} onNavigate={navigate} />
  }

  if (route.startsWith('/stories/')) {
    const slug = route.split('/').filter(Boolean).at(-1)
    return <StoryDetailPage story={getStoryBySlug(slug)} activeNav={activeNav} onNavigate={navigate} />
  }

  if (route === '/philosophy') {
    return <PhilosophyPage activeNav={activeNav} onNavigate={navigate} />
  }

  if (route === '/testimonials') {
    return <TestimonialsPage activeNav={activeNav} onNavigate={navigate} />
  }

  return <HomePage activeNav={activeNav} onNavigate={navigate} />
}

export default App
