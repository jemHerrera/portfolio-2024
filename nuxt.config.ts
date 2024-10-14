export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/main.css"],
  app: {
    baseURL: "/portfolio-2024/",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "[name][extname]",
        },
      },
    },
  },
});
