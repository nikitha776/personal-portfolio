/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C87B3B", // Darker, richer warm aesthetic color
        nature: {
          green: "#5A6E46", // Darker moss green
          brown: "#8B5E34", // Darker earthy brown
          beige: "#DED6C4", // Deeper beige
          cream: "#E8E2C8", // Richer cream
          darkWood: "#3A281E" // Very dark wood for high contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'wood-pattern': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
      }
    },
  },
  plugins: [],
}