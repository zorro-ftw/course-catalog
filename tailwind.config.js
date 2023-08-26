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
        "cc-blue-100": "#F0F9FF",
        "cc-blue-200": "#74C1ED",
        "cc-blue-300": "#F0F9FF",
        "cc-gray-100": "#E5E5E5",
        "cc-gray-200": "#CDCDCD",
        "cc-gray-300": "#6C6C6C",
        "cc-gray-400": "#C4C4C4",
        "cc-orange-100": "#F8D442",
        "cc-orange-200": "#FEAF00",
        "cc-orange-300": "#F6C762",
        "cc-orange-400": "#FEFBEC",
        "cc-pink-100": "#EE95C5",
        "cc-pink-200": "#FEF6FB",
        "cc-pink-300": "#F2EAE1",
        "cc-white-100": "#FDFDFD",
      },
      backgroundImage: {
        "grad-49": "linear-gradient(49deg, var(--tw-gradient-stops));",
        "grad-134": "linear-gradient(134deg, var(--tw-gradient-stops));",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        32: "32px",
        22: "22px",
        17: "17px",
      },
      screens: {
        xs: "375px",
        "sc-477": "477px",
      },
    },
  },
  plugins: [],
};
