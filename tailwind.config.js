/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor:"#E4DFDE",
        redPrimary: {
          100: "#F7B4BB",
          300: "#F46D74",
          500: "#BB0102",
        },
        grayPrimary: {
          100: "#E9E9E9",
          200: "#D4D4D4",
          300: "#9A9A9A",
          400: "#707070",
          500: "#454545",
          600: "#1A171B",
        },
      },
      fontFamily:{
        'sans':['"Roboto"',...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'auto-fit-100': 'repeat(auto-fit, minmax(260px, 1fr))',

      },
    },
  },
  plugins: [],
};
