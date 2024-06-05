// vite.config.js
import { defineConfig } from "vite";
// Redirects requests from /api to the specified target aka the backend server at target: "https://localhost:5000"
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/v1"),
      },
    },
  },
});
