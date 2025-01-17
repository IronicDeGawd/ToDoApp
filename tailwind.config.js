/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.5rem",
        xms: "0.6rem",
      },
      lineHeight: {
        xms: "1rem",
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        "9/10": "90%",
      },
      fontFamily: {
        primary: "Gloria",
      },
    },
  },
  plugins: [],
};
