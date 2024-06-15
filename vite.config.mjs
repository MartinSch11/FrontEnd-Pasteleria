import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/FrontEnd-Pasteleria/' // Asegúrate de que este sea el nombre correcto de tu repositorio
});