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
      },
    },
  },
  safelist: [
    "flex",
    "bg-corSecundaria",
    "text-corBackground",
    "gap-2",
    "py-1",
    "px-2",
    "rounded-md",
    "hover:cursor-pointer",
  ],
  plugins: [
    // Plugin para criar variáveis CSS no Tailwind (opcional)
    function ({ addBase }) {
      addBase({
        ":root": {
          "--background-color": "#00090E",
          "--text-color": "#E1E1E1",
          "--primary-color": "#81FE88",
          "--secondary-color": "#888888",
          "--tag-color": "#171D1F",
          "--font-family": "'Prompt', sans-serif",
          "--itens-background": "#171D1F",
        },
      });
    },
  ],
};
