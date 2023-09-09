/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': 'Space Grotesk'
      },
      colors: {
        'blue': '#0BE0FD'
      }
    },
  },
  plugins: [],
}
