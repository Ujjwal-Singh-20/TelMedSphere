/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#222",
          2: "#1d1f2c",
        },
        white: "#f5f5f5",
        blue: {
          1: "#d4ddf1",
          2: "#b0bbd8",
          3: "#7584ae",
          4: "#6575a5",
          5: "#515e84",
          6: "#3d4663",
          7: "#282f42",
          8: "#06075a",
          9: "#4a4cb2",
        },
        yellow: {
          1: "#f5f5dc",
          2: "#f0e68c",
          3: "#ffcc00",
          4: "#ffd700",
          5: "#eaa938",
          6: "#af9500",
        },
        orange: {
          1: "#FF8400",
          2: "#af5b00",
        },
        grey: {
          1: "#a9afc3",
          2: "#b3b8d0",
          3: "#6c757d",
        },
        social: {
          fb: "#4a71c3",
          fbHover: "#37528d",
          google: "#a61c00",
          googleHover: "#721300",
          twitter: "#1da1f2",
          twitterHover: "#1771a9",
          instagram: "#DD2A7B",
          instagramHover: "#a5215d",
          whatsapp: "#25D366",
          whatsappHover: "#1b9447",
        },
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        2.5: "0.625rem",
        5: "1.25rem",
      },
      boxShadow: {
        text: "1px 1px 2px rgba(255, 215, 0, 0.8)",
      },
      screens: {
        xl: "1400px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
        xxs: "400px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};