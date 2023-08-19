/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-gray-100": "#E5E5E5",
        "cc-gray-200": "#CDCDCD",
        "cc-gray-300": "#6C6C6C",
        "cc-orange-100": "#F8D442",
        "cc-orange-200": "#FEAF00",
      },
      backgroundImage: {
        "grad-49": "linear-gradient(49deg, var(--tw-gradient-stops));",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        32: "32px",
        22: "22px",
      },
      screens: {
        xs: "375px",
        "sc-477": "477px",
      },
    },
  },
  plugins: [],
};
