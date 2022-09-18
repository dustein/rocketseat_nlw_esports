/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        universo: "url('/bg-universo.jpg')"
      }
    },
  },
  plugins: [],
}
