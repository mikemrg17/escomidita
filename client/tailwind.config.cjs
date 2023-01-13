/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      "main-color": "#ffac0e",
      "secondary-color": "#b61500",
      "base-color": "#9CA3AF",
      white: "#FFFFFF",
      red: "#FF0000"
    },
    extend: {
      color: {
        sky: colors.sky,
        teal: colors.teal,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
