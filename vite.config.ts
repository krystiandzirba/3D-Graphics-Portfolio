import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3D-Graphics-Portfolio/",
  resolve: {
    alias: {
      "@/assets": "/src/assets",
    },
  },
});
