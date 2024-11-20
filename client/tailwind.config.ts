import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}", // Adjust to include .ts and .tsx files
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#023A8F',
        alertRed: '#ED2020',
        textWhite: '#FFFFFF',
        focusedBlue: '#CFE1FB',
        safeGreen: '#E7FAF5',
      },
    },
  },
  plugins: [],
}

export default config;