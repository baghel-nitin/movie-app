/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        y9: "540px",
      },
    },
    fontFamily: {
      display: ["Titillium Web", "sans-serif"],
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
};
