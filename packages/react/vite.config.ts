import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
