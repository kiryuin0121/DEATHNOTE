import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        news: path.resolve(__dirname, "news.html"),
        special: path.resolve(__dirname, "special.html"),
        about: path.resolve(__dirname, "about.html"),
      },
    },
  },
});
