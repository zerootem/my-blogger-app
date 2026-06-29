import react from '@vitejs/plugin-react';
import blogger from 'blogger-plugin/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    react(),
    blogger({
      proxyBlog: 'https://toolsmodweeb.blogspot.com',
      modules: ['src/main.tsx'],
      styles: ['src/index.css'],
      template: 'src/template.xml',
    }),
  ],
});
