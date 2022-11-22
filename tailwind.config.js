/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/index.js', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'regal-grey': '#D6D6D6',
      },
      fontSize: {
        smm: '4px',
      },
    },
  },
  plugins: [],
}