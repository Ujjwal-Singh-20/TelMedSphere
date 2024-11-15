// import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import svgrPlugin from 'vite-plugin-svgr'

// // see all documentation here https://vitejs.dev/config/
// export default defineConfig({
//   // This changes the out put dir from dist to build change as your need
//   // comment this out if that isn't relevant for your project
//   plugins: [
//     reactRefresh(),
//     svgrPlugin({
//       svgrOptions: {
//         icon: true,
//         // ...svgr options (https://react-svgr.com/docs/options/)
//       },
//     }),
//   ],
//   server: {
//     port: 3000
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  build: {
    outDir: 'dist', // Ensure this matches your output directory on Vercel
  },
  server: {
    port: 3000,
  },
  base: '/', // Ensure this is correct for your deployment
});
