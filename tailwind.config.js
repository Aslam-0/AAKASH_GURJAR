/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          bg: '#090909',
          surface: '#121212',
          card: '#161616',
          cardHover: '#1c1c1c',
          border: '#262626',
          borderLight: '#383838',
          red: '#FF3030',
          redHover: '#FF4A4A',
          redDark: '#C91818',
          muted: '#8A8A8E',
          subtext: '#A3A3A8',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -3px rgba(255, 48, 48, 0.45)',
        'glow-red-lg': '0 0 50px -5px rgba(255, 48, 48, 0.4)',
        'glow-red-sm': '0 0 12px 0px rgba(255, 48, 48, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
