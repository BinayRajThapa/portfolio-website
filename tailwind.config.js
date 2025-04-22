/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d1117',
        foreground: '#c9d1d9',
        terminalGreen: '#00FF00',
        terminalBlack: '#161b22',
      },
      fontFamily: {
        mono: ['Fira Code', 'Fira Mono', 'Courier New', 'monospace'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
