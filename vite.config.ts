import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@cards': path.resolve(__dirname,'./src/cards'),
      '@services': path.resolve(__dirname,'./src/services'),
      '@types': path.resolve(__dirname, './src/types')
    }
  },
  plugins: [react()],
});
