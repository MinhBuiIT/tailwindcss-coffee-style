/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1480px'
    },
    extend: {
      colors: {
        'light-coffee': '#c89f94',
        'light-coffee-bold': '#a25f4b',
        'dark-theme': '#1d1f2e'
      },
      spacing: {
        0.5: '0.125rem'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      backgroundImage: {
        banner: 'url("./images/slider-bg.jpeg")'
      }
    }
  },
  plugins: []
};
