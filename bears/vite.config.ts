import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers: {
      // Cachea todo por 1 año, para no reptir la carga de imgs de la portada
      "Cache-Control": "public, max-age=31536000",
    },
  },
});
