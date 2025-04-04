import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/crazy-math-game/',
  plugins: [react()],
  build: {
    outDir: 'docs',  // Change the output folder from 'dist' to 'docs'
  }
});

