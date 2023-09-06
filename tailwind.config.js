/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bodyBg': '#232931',
        'AccentBlue': '#3498DB',
        'ButtonColor': '#27AE60',
        'SubText': '#A3A3A3',
        'LightGray': '#D9D9D9'
      }
    },
  },
  plugins: [],
}

