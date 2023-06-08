/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    options: {
      safelist: ['preserve-styles'], // Add the class name here
    },
  theme: {
    extend: {},
  },
  plugins: [],
}