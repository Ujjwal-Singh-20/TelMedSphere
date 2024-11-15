import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base: '/',
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: './src/main.jsx', // Ensure the correct entry point
    },
  },
});
