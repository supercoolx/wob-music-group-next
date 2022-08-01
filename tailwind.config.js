/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['archivo']
      },
      animation: {
        color: 'color 2s linear infinite'
      },
      keyframes: {
        color: {
          '100%': { 'background-position': '-1000px' }
        }
      }
    },
  },
  plugins: [],
}
