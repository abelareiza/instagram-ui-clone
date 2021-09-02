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
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
