/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      "main-color": "#ffac0e",
      "secondary-color": "#b61500",
    },
    extend: {},
  },
  plugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
