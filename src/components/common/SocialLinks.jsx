import React from 'react'
import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiPieChart,
} from 'react-icons/fi'
import { COLORS, SOCIAL_LINKS } from '../../config/theme'

const SocialLinks = () => {
  const iconMap = {
    FiInstagram,
    FiFacebook,
    FiYoutube,
    FiPieChart,
  }

  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = iconMap[social.icon]
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
            aria-label={social.name}
            title={social.name}
          >
            <IconComponent
              size={18}
              style={{ color: COLORS.primary }}
            />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
