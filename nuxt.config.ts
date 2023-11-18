// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@vueuse/motion/nuxt"],
  content: {},
  app: {
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#ffffff",
        },
        {
          name: "msapplication-TileColor",
          content: "#2d89ef",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#4685ff",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=block",
        },
        // {
        //   rel: "preconnect",
        //   href: "https://console.useoutline.xyz",
        // },
      ],
    },
  },
  css: ["~/assets/css/tokens.css", "~/assets/css/main.css"],
  components: [
    {
      path: "~/components/LandingPage",
      pathPrefix: false,
      enabled: true,
    },
  ],
});
