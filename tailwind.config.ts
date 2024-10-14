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
        ribbon: {
          "50": "#fff0f1",
          "100": "#ffe1e4",
          "200": "#ffc8d0",
          "300": "#ff9baa",
          "400": "#ff647e",
          "500": "#ff2e55",
          "600": "#f50e43",
          "700": "#cf0136",
          "800": "#ad0435",
          "900": "#930834",
          "950": "#530017",
        },
        turqoise: {
          "50": "#edfffd",
          "100": "#c0fffc",
          "200": "#81fffa",
          "300": "#3afff9",
          "400": "#00ffee",
          "500": "#00e2d4",
          "600": "#00b7b0",
          "700": "#00918d",
          "800": "#007271",
          "900": "#045d5c",
          "950": "#00383a",
        },
        purple: {
          "50": "#f0f1ff",
          "100": "#e4e5ff",
          "200": "#cdd0ff",
          "300": "#a6a8ff",
          "400": "#7773ff",
          "500": "#4c3bff",
          "600": "#3614ff",
          "700": "#2200fd",
          "800": "#1e01d6",
          "900": "#1a03af",
          "950": "#0b0077",
        },
        grey: {
          50: "#0a0622",
          100: "#11101A",
          200: "#292734",
          300: "#5f5b7e",
          400: "#9189C7",
          500: "#b7b5c4",
          600: "#ffffff",
        },
      },
      css: ["~/assets/main.css"],
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        sans: ["Roboto Mono", "Arial", "serif"],
      },
    },
  },
};
