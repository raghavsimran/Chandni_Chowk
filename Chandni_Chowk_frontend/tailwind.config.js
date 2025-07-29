// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // ✅ matches your app directory
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{ },
      fontFamily: {
        'brittany': ['BrittanySignature', 'cursive'],
        'madi':['MsMadi-Regular', 'cursive'],
      },
    },
  },
  plugins: [],
};
