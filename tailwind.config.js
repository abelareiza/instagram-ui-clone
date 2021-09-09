module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
     },
    extend: {
      colors: {
        'gris': '#DBDBDB',
        'gris2': '#FAFAFA',
        'gris3': '#262626',
        'gris4': '#8E8E8E',
        'azul': '#00376b',
      },
      animation: {
        tilt: 'tilt 5s infinite linear'
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          }
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
