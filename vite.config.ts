import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

const reactCompat = resolve(__dirname, 'node_modules/preact/compat');

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'react': reactCompat,
      'react-dom': reactCompat,
    },
  },
});
