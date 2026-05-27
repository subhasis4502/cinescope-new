// Centralized Theme Configuration
// Modify colors and fonts here for easy global changes

export const COLORS = {
  // Primary Colors - Warm Beige/Brown
  primary: '#c89d82',
  primaryLight: '#e8d4b8',
  primaryDark: '#7d5d44',
  
  // Accent Colors - Gold/Orange
  accent: '#e8883a',
  accentLight: '#f5b88a',
  accentDark: '#b86228',
  
  // Rose/Pink Accents
  rose: '#d68991',
  roseLight: '#e9b9bd',
  roseDark: '#a85765',
  
  // Neutral Colors
  background: '#fdf8f3',
  backgroundAlt: '#f5e6d3',
  textDark: '#2d2d2d',
  textGray: '#666666',
  textLight: '#999999',
  white: '#ffffff',
  black: '#000000',
  
  // Borders & Dividers
  border: '#e8e8e8',
  divider: '#ddd',
};

export const FONTS = {
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Poppins', system-ui, sans-serif",
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '5rem',
  '4xl': '6rem',
};

export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

export const TRANSITIONS = {
  fast: '0.2s ease-in-out',
  normal: '0.3s ease-in-out',
  slow: '0.5s ease-in-out',
};

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    icon: 'FiInstagram',
    url: 'https://instagram.com',
  },
  {
    name: 'Facebook',
    icon: 'FiFacebook',
    url: 'https://facebook.com',
  },
  {
    name: 'YouTube',
    icon: 'FiYoutube',
    url: 'https://youtube.com',
  },
  {
    name: 'Pinterest',
    icon: 'FiPieChart',
    url: 'https://pinterest.com',
  },
];

// Navigation Menu
export const NAVIGATION_MENU = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'STORIES', href: '#stories' },
  { label: 'FILMS', href: '#films' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'JOURNAL', href: '#journal' },
  { label: 'CONTACT', href: '#contact' },
];
