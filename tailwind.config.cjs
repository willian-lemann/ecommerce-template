/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },

      colors: {
        primary: "rgb(79, 70, 229)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

module.exports = config;
