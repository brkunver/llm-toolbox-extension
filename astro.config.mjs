// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://brkunver.github.io",
  //base: "/llm-toolbox-extension",
  vite: {
    plugins: [tailwindcss()],
  },
})
