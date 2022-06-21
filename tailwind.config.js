/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        navbarsignin: "#0B132A",
        navbarsignout: "#F53855",
        navbar: "#4F5665",
        buttonred: "#F53838",
        shadowred: "rgba(245, 56, 56, 0.35)",
        bgGray: "#F6F6F6",
      },
      dropShadow: {
        "2xl": "0 15px 15px  rgba(245, 56, 56, 0.35)",
        "3xl": "0 35px 35px rgba(245, 56, 56, 0.35)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
