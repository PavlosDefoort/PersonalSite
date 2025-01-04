// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-particles",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    disableHMR: true,
  },

  googleFonts: {
    families: {
      "Bodoni+Moda": [400, 700], // Include Bodoni Moda with specific weights
      Inter: [100, 400, 500, 700],
    },
    display: "swap", // Optional: Font display strategy
  },

  css: ["~/assets/css/tailwind.css"],
  compatibilityDate: "2024-12-26",
});
