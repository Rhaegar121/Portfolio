import { defineConfig } from 'vite'; // eslint-disable-line
import react from '@vitejs/plugin-react'; // eslint-disable-line

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
          return null;
        },
      },
    },
  },
});
