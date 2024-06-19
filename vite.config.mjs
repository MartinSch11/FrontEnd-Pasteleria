import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/FrontEnd-Pasteleria/', // Ajusta esto según la estructura de tu repositorio
  build: {
    outDir: 'dist', // Carpeta de salida donde se generan los archivos optimizados
  },
});
