/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        universo: "url('/bg-universo.jpg')",
        'nlw-gradient': 'linear-gradient(red, green)',
        'game-gradient': 'linear-gradient(blue, grey'
      }
    },
  },
  plugins: [],
}
