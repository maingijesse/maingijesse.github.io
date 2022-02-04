export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "jessemaingi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A self-taught front-end developer from Nairobi, Kenya. Loves working with Vue.js and TailwindCss."
      },
      { itemprop: "name", content: "Jesse Mukonza Maingi" },
      {
        itemprop: "description",
        content:
          "A self-taught front-end developer from Nairobi, Kenya. Loves working with Vue.js and TailwindCss."
      },
      { itemprop: "image", content: "https://maingijesse.github.io/jesse.jpg" },
      { property: "og:title", content: "Jesse Maingi" },
      {
        property: "og:description",
        content:
          "A self-taught front-end developer from Nairobi, Kenya. Loves working with Vue.js and TailwindCss."
      },
      {
        property: "og:image",
        content: "https://maingijesse.github.io/jesse.jpg"
      },
      { property: "og:url", content: "https://maingijesse.github.io" },
      { property: "og:site_name", content: "Jesse Maingi Portfolio" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:title", content: "Jesse Maingi" },
      {
        property: "twitter:description",
        content:
          "A self-taught front-end developer from Nairobi, Kenya. Loves working with Vue.js and TailwindCss."
      },
      {
        property: "twitter:img:src",
        content: "https://maingijesse.github.io/jesse.jpg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/google-analytics"
  ],

  build: {
    html: {
      minify: {
        decodeEntities: false
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "nuxt-protected-mailto"
  ],
  googleFonts: {
    families: {
      "Source+Sans+Pro": true
      // "Alfa+Slab+One": true
    }
  },
  // google analytics

  googleAnalytics: {
    id: "G-HBDS1VHYBH"
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
