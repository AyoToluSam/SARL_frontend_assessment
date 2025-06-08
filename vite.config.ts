import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      hooks: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      store: fileURLToPath(new URL("./src/store", import.meta.url)),
      utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/variables" as *;`,
        api: "modern-compiler",
      },
    },
  },
  preview: {
    port: 3009,
    strictPort: true,
    host: true,
    allowedHosts: true,
  },
});
