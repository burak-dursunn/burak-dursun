/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#8CC84B', // Node.js style green
        'brand-dark': '#68A063',
        'dark': '#1a1a1a',
        'light': '#f4f5f7'
      },
      fontFamily: {
        'heading': ['"Space Grotesk"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
