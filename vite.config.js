import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/crazy-math-game/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs',  // Change the output folder from 'dist' to 'docs'
  }
});

