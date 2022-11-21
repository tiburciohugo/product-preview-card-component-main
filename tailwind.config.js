/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        link: "hsl(228, 45%, 44%)",
        white: "hsl(0, 0%, 100%)",
      },
      screens: {
        "c-sm": "334px",
        "c-md": "426px",
        "c-lg": "1440px",
      },
      backgroundImage: {
        mobile: "url('../public/images/image-product-mobile.jpg')",
        desktop: "url('../public/images/image-product-desktop.jpg')",
      },
      fontFamily: {
       alfa: ["Alfa Slab One", "cursive"],
       roboto: ["Roboto", "sans-serif"],
			 'roboto-slab': ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
