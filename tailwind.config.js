/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4ca1af",
          secondary: "#c4e0e5",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "primary-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
