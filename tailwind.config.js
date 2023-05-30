/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      ip: "391px", // Iphone
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      mac: "1512px", //Mac Book
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      fullHD: "1920px", //24-Zoll
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      ultrawide: "3440px", //Ultra Wide
    },
  },
  plugins: [],
};
