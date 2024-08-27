/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    "./public/**/*.html"
  ],
  theme: {
    fontFamily:{
      'primary': ["Roboto", 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'yt-black':'#0f0f0f',
        'yt-light-black':'#272727',
        'yt-white': '#f1f1f1',
        'yt-light-white':'#aaaaaa'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}