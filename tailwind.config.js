/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      // maxWidth: {
      //   custom: '60rem',
      // },
      // spacing:{
      //   76: '19rem',
      // },
      // fontSize: {
      //   xxs:['0.624em', {lineHeight: '1rem'}],
      // },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('prettier-plugin-tailwindcss'),
    // require('eslint-plugin-tailwind'),
    require('daisyui'),
    require('preline/plugin'),
    // require(''),
  ],
}

