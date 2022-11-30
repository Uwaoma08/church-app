/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: '#0B3FA8',
        lightBlue: "#006BCE",
        greyColor: "#64758F",
        greyBorder: "#C0CDE0",
        blueText: "#144979",
        menuColor: "#5F7CA8",
        offWhite: "#f4f7fb",
        navColor: "#162338",
        lightBlackBorderColor: "#476ebc",
        lightBlack: "#2E394B",
        darkBlue: "#062460"
      },
      backgroundImage:{
        'banner': "url(/images/base.jpg)"
      }
    },
  },
  plugins: [],
}