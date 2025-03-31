// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://brkunver.github.io/llm-toolbox-extension",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
})