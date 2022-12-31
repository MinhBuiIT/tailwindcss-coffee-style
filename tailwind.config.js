/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': '1480px'
    },
    extend: {
      colors: {
        'light-coffee': '#c89f94'
      },
      spacing: {
        0.5: '0.125rem'
      }
    }
  },
  plugins: []
};
