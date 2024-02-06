/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    screens: {
      "mb390": "390px"
    },
    colors: {
      "orange": "#ff6600",
      "black": "#000000"
    },
    extend: {}
  },
  plugins: [],
}

