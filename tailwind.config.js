/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#071026',
        'deep-blue': '#0b1b3a',
        'cosmic-1': '#1e2a6a',
        'cosmic-2': '#6b2eff',
        accent: '#5fd6ff'
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, rgba(34,24,64,0.65), rgba(4,10,30,0.85))'
      }
    }
  },
  plugins: [],
}
