import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import injectHTML from 'vite-plugin-html-inject';


export default defineConfig({
  publicDir: 'public',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
    injectHTML({
      tagName: "template",
      sourceAttr: "file"
    })
  ],
});
