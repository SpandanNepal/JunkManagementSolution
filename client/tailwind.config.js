/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#0066FF', 
        alertRed: '#ED2020',
        textWhite: '#FFFFFF', 
        focusedBlue: '#CFE1FB',
        safeGreen: '#E7FAF5',
      },
    },
  },
  plugins: [],
}

