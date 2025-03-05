import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/foodlist": "http://localhost:3000/",
      "/signup": "http://localhost:3000/",
      "/login": "http://localhost:3000/",
      "/admin-login": "http://localhost:3000/",
      // "/addfood" : "http://localhost:3000/"
    },
  },
  plugins: [react(), tailwindcss()],
});
