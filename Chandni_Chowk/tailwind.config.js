// tailwind.config.js
/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app//*.{js,jsx,ts,tsx}", // ✅ matches your app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
