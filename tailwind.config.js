/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'electric-blue': '#4A8BDF',
      'regal-blue':'#243c5a',
      'eggplant': '#A0006D'
    }
    },
  },
  plugins: [],
}