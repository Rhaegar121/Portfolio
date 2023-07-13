/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#030b25',
        // navy: '#26517d',
        cyan: '#22abfa',
        white: '#e6f1ff',
        grey: '#b1bcdc',
        light_grey: '#1b243f',
        dark_blue: '#02091d',
      },
    },
  },
  plugins: [],
};
