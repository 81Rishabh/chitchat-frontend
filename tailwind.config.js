/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'spin': 'spin 1s ease-in-out infinite',
       'translate' : 'translate .5s ease-in'
    },
  },
  plugins: [],
}