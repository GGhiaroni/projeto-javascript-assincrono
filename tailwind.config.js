module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        corBackground: "var(--background-color)",
        corTexto: "var(--text-color)",
        corPrimaria: "var(--primary-color)",
        corSecundaria: "var(--secondary-color)",
        corTag: "var(--tag-color)",
        corItensBackground: "var(--itens-background)"
      },
      fontFamily: {
        fonteTexto: "var(--font-family)",
      }
    },
  },
  plugins: [],
};
