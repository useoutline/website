// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
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
        {
          name: "msapplication-Config",
          content: "/favicons/browserconfig.xml",
        },
        {
          name: "title",
          content:
            "Outline Analytics - Uncover Insights with Privacy-Focused and Cookie-Free Analytics",
        },
        {
          name: "description",
          content:
            "Outline Analytics is privacy-focused, open-source analytics tool for tracking user behavior without cookies. Gain insights, track events, and manage sessions effortlessly while ensuring user privacy.",
        },
        // Open Graph
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://useoutline.xyz",
        },
        {
          property: "og:title",
          content:
            "Outline Analytics - Uncover Insights with Privacy-Focused and Cookie-Free Analytics",
        },
        {
          property: "og:description",
          content:
            "Outline Analytics is privacy-focused, open-source analytics tool for tracking user behavior without cookies. Gain insights, track events, and manage sessions effortlessly while ensuring user privacy.",
        },
        {
          property: "og:image",
          content: "/meta.png",
        },
        // Twitter
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:url",
          content: "https://useoutline.xyz",
        },
        {
          property: "twitter:title",
          content:
            "Outline Analytics - Uncover Insights with Privacy-Focused and Cookie-Free Analytics",
        },
        {
          property: "twitter:description",
          content:
            "Outline Analytics is privacy-focused, open-source analytics tool for tracking user behavior without cookies. Gain insights, track events, and manage sessions effortlessly while ensuring user privacy.",
        },
        {
          property: "twitter:image",
          content: "/meta.png",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/favicons/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "/favicons/safari-pinned-tab.svg",
          color: "#4685ff",
        },
        {
          rel: "shortcut icon",
          href: "/favicons/favicon.ico",
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
    },
    "~/components",
  ],
  routeRules: {
    "/**": {
      headers: {
        "X-Frame-Options": "DENY",
        "Content-Security-Policy": `frame-ancestors 'none'; script-src 'self' 'unsafe-inline' *.useoutline.xyz; style-src 'self' 'unsafe-inline' *.useoutline.xyz *.gstatic.com *.googleapis.com; img-src 'self' *.useoutline.xyz; font-src 'self' data: *.useoutline.xyz *.gstatic.com *.googleapis.com;`,
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "origin",
      },
    },
  },
  runtimeConfig: {
    public: {
      outlineAnalyticsId: "", // can be overridden by NUXT_PUBLIC_OUTLINE_ANALYTICS_ID environment variable
    },
  },
});
