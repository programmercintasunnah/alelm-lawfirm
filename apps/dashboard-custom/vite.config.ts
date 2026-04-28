import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dashboard-custom/',
  build: {
    outDir: '../../dist/dashboard-custom'
  }
});