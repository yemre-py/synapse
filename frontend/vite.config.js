import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    include: ["@emotion/react", "@emotion/styled"],
  },
  esbuild: {
    charset: "utf8",
  },
});
