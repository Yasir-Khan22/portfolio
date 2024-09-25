import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://yasir-sh.netlify.app/",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "houston",
      langs: [
        "tsx",
        "javascript",
        "typescript",
        "jsx",
        "json",
        "css",
        "html",
        "markdown",
        "yaml",
        "python",
      ],
      wrap: true,
      lineNumbers: true,
      transformers: [],
    },
  },
});
