/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx,js,jsx}", "./src/components/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'primary': ['var(--poppins-font)', ...fontFamily.sans],
        'unbounded': ['var(--unbounded-font)', ...fontFamily.sans],
      },
      colors: {
        white: "#fefefe",
        black: "#0a0a0a"
      }
    },
  },
  plugins: [],
}
