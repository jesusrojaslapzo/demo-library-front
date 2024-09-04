import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: false,
    commonjsOptions: {
      sourceMap: false,
    },
    minify: true,
    //ollupOptions: {
    // output: {
    //   manualChunks: {
    //     '@liderlyadmin/mkp_talento_library': [
    //       '@liderlyadmin/mkp_talento_library',
    //     ],
    //   },
    // },
    //,
    chunkSizeWarningLimit: 1048576,
  },
});

