/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
        windSong: ['WindSong', 'cursive'],
        notoSansJP: ['Noto Sans JP', 'sans-serif'],
    }
  }
  },
  plugins: [],
}