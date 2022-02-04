module.exports = {
  purge: [],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        red: {
          brand: "#FD4370",
          "brand-lighter": "#ff5d8a"
        },
        "app-dark": "#141628"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
