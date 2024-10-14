import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {
        red: "#f50e43",
        teal: "#00ffee",
        purple: "#2200fd",
        grey: {
          50: "#0C0B13",
          100: "#11101A",
          200: "#292734",
          300: "#5D5B6B",
          400: "#9189C7",
          500: "#b7b5c4",
          600: "#ffffff",
        },
      },
      css: ["~/assets/main.css"],
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "Arial", "serif"],
      },
    },
  },
};
