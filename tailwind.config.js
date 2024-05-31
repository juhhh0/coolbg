/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : 'rgb(10, 10, 12)',
        'dark-grey': 'rgb(14, 14, 18)',
        'grey': 'rgb(26, 26, 30)',
        'white': 'rgb(255, 255, 255)'
      }
    },
  },
  plugins: [],
}

