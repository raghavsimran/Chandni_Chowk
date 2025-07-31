// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // ✅ matches your app directory
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{ 
        'form-border': '#EBCEB5',
        'text-link': '#C9AB6B',
      },
      fontFamily: {
        'brittany': ['BrittanySignature'],
        'madi': ['MsMadi-Regular'],
        'sukar-black': ['Sukar Black'],
        'sukar-bold': ['Sukar Bold'],
        'sukar-regular': ['Sukar Regular'],
      },
    },
  },
  plugins: [],
};
