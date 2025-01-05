// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/google-fonts", "@nuxt/ui", "@nuxtjs/tailwindcss"],

  googleFonts: {
    families: {
      "Bodoni+Moda": [400, 700], // Include Bodoni Moda with specific weights
      Inter: [100, 400, 500, 700],
    },
    display: "swap", // Optional: Font display strategy
  },
  compatibilityDate: "2024-12-26",
  css: ["~/assets/css/tailwind.css"],
});
