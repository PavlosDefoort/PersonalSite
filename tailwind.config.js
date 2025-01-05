/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 10s ease infinite", // Define the animation
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "50% 0%",
          },
          "50%": {
            backgroundPosition: "50% 100%",
          },
        },
      },
      backgroundImage: {
        gradient1: "linear-gradient(to bottom, #2A242C, #BC24FE, #2A242C )",
        gradient2: "linear-gradient(to bottom, #2A242C, #2C24FE, #2A242C )",
        gradient3: "linear-gradient(to bottom, #2A242C, #FF2B20, #2A242C )",
        gradient4: "linear-gradient(to bottom, #2A242C, #1DB954, #2A242C )",
      },
      fontFamily: {
        bodoni: ["Bodoni Moda", "serif"], // Add Bodoni Moda to Tailwind
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};
