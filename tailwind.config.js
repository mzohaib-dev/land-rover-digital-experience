/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Organetto",
        secondary: "Mandatory",
        Kajiro: "Kajiro",
        Crotah:"Crotah",
      },
    },
  },
  plugins: [],
}

