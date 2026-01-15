/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // importante si tienes Tailwind en html
    "./src/**/*.{js,ts,jsx,tsx}", // busca todas las clases en src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
