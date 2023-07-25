/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#ff6900',
      hoverPrimary: '#b34900',
      bgLightGrey: '#e0e0e0',
      bgDarkGrey: '#5b5b5b',
      footerDarkGrey: '#313131',
      fontGrey: '#a3a3a3',
      white: '#fff',
      darkBlue: '#0a6bf2',
      lightBlue: '#83b6dd',
      green: '#1cc286',
      flexThemeBlue: '#00a6b5',
      black: '#000',
    },
    extend: {},
  },
  plugins: [],
}
