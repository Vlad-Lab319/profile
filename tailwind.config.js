/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Define custom column counts, e.g., 16 columns
        18: "repeat(18, minmax(0, 1fr))",
        boxscore: "repeat(18, 32px)",
        23: "repeat(23, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
