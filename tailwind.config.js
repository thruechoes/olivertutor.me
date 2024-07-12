module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xs': '0.5rem',
        '2xs': '0.625rem',
      },
      colors: {
        customPurple: '#C5ABFF',
        customGreen: '#A7FFD5',
        customPink: '#FFC8FF',
        navbarWhite: '#F0F4F8',
        navbarGray: '#333',
        navbarHover: '#E0E0E0',
        customBtn: '#FFD749',
      },
      minHeight: {
        '400px': '400px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};

