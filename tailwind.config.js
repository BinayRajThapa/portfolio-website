/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        accent: 'var(--accent-color)',
        card: 'var(--card-bg)',
        border: 'var(--border-color)',
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
