/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
        sourceSans: ['"Source Sans Pro"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

