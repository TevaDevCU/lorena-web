// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://TevaDevCU.github.io',
  base: '/lorena-web',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});