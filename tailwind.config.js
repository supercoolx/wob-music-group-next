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
        color: 'color 2s linear infinite',
        'fade-in': 'fade-in 1s linear'
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
        }
      }
    },
  },
  plugins: [],
}
