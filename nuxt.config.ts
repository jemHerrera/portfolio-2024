export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/main.css"],
  router: {
    base: "/portfolio-2024/",
  },
  target: "static",
});
