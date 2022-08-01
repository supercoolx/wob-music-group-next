/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['archivo'],
        upheaval: ['upheaval']
      },
      animation: {
        color: 'color 2s linear infinite',
        'fade-in': 'fade-in 1s linear',
        'zoom-in-out': 'zoom-in-out 1s linear infinite'
      },
      keyframes: {
        color: {
          '100%': { 'background-position': '-1000px' }
        },
        'fade-in': {
          '0%': {
            'opacity': '0',
            'transform': 'translateX(-50px)'
          }
        },
        'zoom-in-out': {
          '50%': { 'transform': 'scale(1.1,1.1)' }
        }
      }
    },
  },
  plugins: [],
}
