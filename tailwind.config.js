/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        Light: {
          primary: "#570DF8",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
        darkie: {
          primary: "#6b7280",

          secondary: "#F000B8",

          accent: "#F000B8",

          neutral: "#3D4451",

          "base-100": "#374151",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },

      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
