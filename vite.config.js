import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createVuePlugin } from 'vite-plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react(), createVuePlugin()],
  css: {
    order: {
      after: ['slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
