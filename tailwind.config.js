/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    fontFamily: {
      inter: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
