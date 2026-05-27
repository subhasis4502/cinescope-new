# Cinescope - Wedding Photography Website

A modern, responsive wedding photography portfolio website built with React, Vite, Tailwind CSS, and React Icons.

## Features

✨ **Modern Design**
- Elegant and professional wedding photography portfolio
- Mobile-first responsive design
- Smooth animations and transitions

🎨 **Design System**
- Centralized theme configuration for easy color and font changes
- Consistent color palette inspired by warm, elegant aesthetics
- Reusable components and utility classes

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly navigation and interactions

⚡ **Performance**
- Built with Vite for fast development and production builds
- Optimized images and lazy loading
- Minimal JavaScript bundle size

🎯 **Structure**
- Modular, reusable React components
- Organized folder structure for easy maintenance
- Separated concerns (styling, components, configuration)

## Project Structure

```
Cinescope/
├── public/
│   ├── images/
│   │   ├── portfolio/          # Wedding portfolio images
│   │   └── logos/              # Logo and brand assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/             # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── SocialLinks.jsx
│   │   └── sections/           # Page sections
│   │       ├── Hero.jsx
│   │       ├── FeaturedPortfolio.jsx
│   │       ├── Stats.jsx
│   │       └── CTASection.jsx
│   ├── config/
│   │   └── theme.js            # Centralized theme config
│   ├── styles/
│   │   └── global.css          # Global styles and utilities
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Cinescope
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will automatically open at `http://localhost:3000`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Colors and Fonts

All colors and fonts are centralized in `src/config/theme.js`. To modify:

1. Open `src/config/theme.js`
2. Update the `COLORS` object with your brand colors
3. Update the `FONTS` object with your preferred typefaces
4. All changes will automatically apply throughout the website

### Navigation Menu

Edit the navigation menu in `src/config/theme.js` by modifying the `NAVIGATION_MENU` array.

### Social Media Links

Update social media links in `src/config/theme.js` using the `SOCIAL_LINKS` array.

### Images

Replace images in:
- Hero section: Update the URL in `src/components/sections/Hero.jsx`
- Portfolio items: Update URLs in `src/components/sections/FeaturedPortfolio.jsx`
- Place your own images in `public/images/portfolio/`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Google Fonts** - Playfair Display & Poppins fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Optimization

The website is optimized for mobile with:
- Responsive grid layouts
- Mobile-first CSS approach
- Touch-friendly buttons and navigation
- Optimized images for different screen sizes
- Hamburger menu for mobile navigation

## Performance Tips

- Use optimized images from Unsplash or similar services
- Consider lazy loading for portfolio images
- Minify CSS/JS in production (automatically done by Vite)
- Use CDN for image hosting

## Future Enhancements

- [ ] Add individual portfolio pages
- [ ] Contact form with email integration
- [ ] Blog/Journal section
- [ ] Video showcase section
- [ ] Client testimonials
- [ ] Booking system integration
- [ ] Gallery lightbox feature

## License

© 2024 Cinescope. All rights reserved.

## Support

For questions or issues, please contact: hello@cinescope.com
