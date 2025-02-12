/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./features/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
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
