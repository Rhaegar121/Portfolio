/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#030b25',
        cyan: '#22d3ee',
        // cyan: '#00aaff',
      },
    },
  },
  plugins: [],
};

