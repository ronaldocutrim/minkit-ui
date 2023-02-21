import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Minimal Design System',
      formats: ['es', 'umd'],
      fileName: (format) => `minimal.${format}.js`,
    },
  },
});
