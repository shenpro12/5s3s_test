/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header: "rgb(0, 90, 96)",
        bars: "rgb(0, 178, 180)",
        logout: "rgb(198, 83, 56)",
        category: "rgb(234, 234, 234)",
      },
      borderColor: {
        search: "rgb(0, 90, 96)",
      },
      margin: {
        0.5: "1.5px",
      },
    },
  },
  plugins: [],
};
