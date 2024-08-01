/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
        "playwrite": ["Playwrite HR Lijeva", "cursive"],
        "raleway": ["Raleway", "sans-serif"]
      },
      fontSize: {
        "lmd": "18px"
      }
    },
  },
  plugins: [],
}