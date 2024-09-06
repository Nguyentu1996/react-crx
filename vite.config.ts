import path from 'path';
import { defineConfig } from 'vite';
import reactConfig from './vite.config.react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...reactConfig.plugins!,
  ],
  css: {
    ...reactConfig.css
  },
  build: {
    ...reactConfig.build,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        background: path.resolve(__dirname, 'extension/background.ts'),
        contentscript: path.resolve(__dirname, 'extension/contentscript.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
