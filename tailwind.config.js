/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f87171',
        dark: '#0f172a',
        second: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./dist/css/final.css --watch
