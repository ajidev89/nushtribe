module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily:{
        mont: ['Montserrat']
      },
      width: {
        '768': '768px',
        '300': '300px',
        '500': '500px'
      },
      height: {
        '768': '768px',
        '300': '200px',
        '400': '400px',
        '500': '500px'
      },
      zIndex: {
        '-10': -10,
      },
      colors: {
        'brand': '#c0d800',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
