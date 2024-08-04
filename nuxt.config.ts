// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
  head: {
      link: [{ rel: "preconnect", href: "https://fonts.googleapis.com" },
              { rel: "preconnect", href: "https://fonts.gstatic.com" },
              { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inika&display=swap" }
      ],
    },
  },

  css: [
    '/assets/style/reset.css',
    '/assets/style/common.css'
  ],

  modules: ["@nuxt/ui"]
})