import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/FrontEnd-Pasteleria/', // Ajusta esto según el nombre de tu repositorio en GitHub
});