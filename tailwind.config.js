/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px', //small
      md: '768px', //medium
      lg: '976px', //large
      xl: '1140px' //extra-large
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%)',
        brightRedSupLight: 'hsl(12,88%,95%)',
        darkBlue: 'hsl(228,39%,23%)',
        veryDarkBlue: 'hsl(223,12%,13%)',
        veryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray:'hsl(0,0%,98%)',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        
      }
    },
  },
  plugins: [],
}
