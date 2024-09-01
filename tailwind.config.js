/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  content: ["./src/**/*.{html,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
};
