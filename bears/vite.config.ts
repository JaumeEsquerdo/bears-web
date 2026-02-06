import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost", // fuerza bind a localhost
    port: 5175, // puerto fijo
    strictPort: true, // falla si el puerto está ocupado
    hmr: {
      protocol: "ws", // fuerza websocket
      host: "localhost",
      port: 5175,
    },

    // headers: {
    //   "Cache-Control": "public, max-age=31536000", // cache imágenes
    // },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
});
