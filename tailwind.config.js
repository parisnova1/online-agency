module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: { 100: "#e0c0e0" },
        gray: { 500: "#a3afa2", 600: "#737b6a" },
        blue_gray: { 200: "#9ec6c2" },
        light_green: { 100: "#dbf9c8" },
        red: { 300: "#cc6984" },
        deep_purple: { 700: "#4d09c2" },
        green: { A100: "#cafdc6" },
        orange: { 50: "#fff4e5" },
        teal: { 900: "#013e39", "900_02": "#0f403c", "900_01": "#003e39" },
        white: { A700: "#ffffff" },
        pink: { 200: "#ec92af" },
      },
      fontFamily: { inter: "Inter", aeonik: "Aeonik" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#e0c0e0,#ffffff,#ffffff,#ffffff)",
        gradient1: "linear-gradient(141deg ,#0f403c,#cc6984)",
        gradient2: "linear-gradient(143deg ,#0f403c,#cc6984)",
        gradient3: "linear-gradient(150deg ,#0f403c,#cc6984)",
        gradient4: "linear-gradient(149deg ,#0f403c,#cc6984)",
        gradient5: "linear-gradient(90deg ,#003e39,#ec92af)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
