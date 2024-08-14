import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    react(),
    topLevelAwait()
  ],
  build: {
    target: 'esnext'
  }
});

vite.config.js