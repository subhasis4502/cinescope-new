/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: '#fdf8f3',
          100: '#f5e6d3',
          200: '#e8d4b8',
          300: '#dcc2a0',
          400: '#d4b896',
          500: '#c89d82',
          600: '#b88968',
          700: '#9d7454',
          800: '#7d5d44',
          900: '#5d4630',
        },
        // Accent Colors
        accent: {
          50: '#fef9f5',
          100: '#fde8dc',
          200: '#f9cfb3',
          300: '#f5b88a',
          400: '#f0a261',
          500: '#e8883a',
          600: '#d97a2e',
          700: '#b86228',
          800: '#8f4a1f',
          900: '#6d3816',
        },
        // Rose/Pink Accents
        rose: {
          50: '#fdf6f6',
          100: '#f8e8e9',
          200: '#f1d1d3',
          300: '#e9b9bd',
          400: '#e0a1a7',
          500: '#d68991',
          600: '#c96f7b',
          700: '#a85765',
          800: '#873f4d',
          900: '#662735',
        },
        // Neutral Colors
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716b',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
        'gradient-overlay-light': 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
      },
    },
  },
  plugins: [],
}
