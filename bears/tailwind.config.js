/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // importante si tienes Tailwind en html
    "./src/**/*.{js,ts,jsx,tsx}", // busca todas las clases en src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Ubuntu",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [],
};
