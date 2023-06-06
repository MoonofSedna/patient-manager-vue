/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app-bg":
          "url('/images/app-bg.png')",
      },
      colors: {
        "card-bg":
          "rgba(255, 255, 255, 0.9)",
        "gray-150": "#f1f1f1",
      },
    },
  },
  plugins: [],
};
