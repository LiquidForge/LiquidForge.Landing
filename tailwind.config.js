/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      data: {
        loaded: "loaded=true",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
        },
        center: true,
      },
      backgroundImage: {
        "footer-img": `url(img/demo/footer-bg.webp)`,
        "intro-img": `url(img/demo/large-name-full.png)`,
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.23, 0.65, 0.74, 1.09)",
      },
      transitionProperty: {
        visibility: 'visibility'
      },
      keyframes: {
        "item-opacity": {
          "0%, 35%": {
            opacity: 1,
          },
          "60%, 100%": {
            opacity: 0,
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "block-move": {
          "0%": {
            transform: "translateY(102%)",
          },
          "35%, 55%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-102%)",
          },
        },
        "slide-in-up": {
          "0%": {
            transform: "translate3d(0, 10px, 0)",
            opacity: 0,
            visibility: "visible",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}
