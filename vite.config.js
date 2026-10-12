import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For the simplest GitHub Pages setup, name the repository:
// YOUR_GITHUB_USERNAME.github.io
// That gives the site a root URL and lets base remain '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
