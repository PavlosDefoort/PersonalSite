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
  googleFonts: {
    families: {
      "Bodoni+Moda": [400, 700], // Include Bodoni Moda with specific weights
      Lato: [100, 400, 700],
    },
    display: "swap", // Optional: Font display strategy
  },
  css: ["~/assets/css/tailwind.css"],
});
