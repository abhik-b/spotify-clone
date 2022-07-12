/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat": ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {

    themes: [
      {
        mytheme: {
          "primary": "#111f27",
          "secondary": "#146aff",
          "accent": "#86efac",
          "neutral": "#9ca3af",
          "base-100": "#FFFFFF",
          "info": "#fef08a",
          "success": "#36D399",
          "warning": "#fb923c",
          "error": "#F87272",
        },
      },
    ],

    darkTheme: "dark",
  },
}
