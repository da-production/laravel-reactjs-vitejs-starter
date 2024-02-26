/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  darkMode: 'class',
  content: [
    "./index.html",
    "./resources/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}