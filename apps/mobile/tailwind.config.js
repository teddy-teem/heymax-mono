/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#12063A",
        primary: "#802DFF",
        secondary: "#FFF",
      },
    },
  },
  plugins: [],
};
