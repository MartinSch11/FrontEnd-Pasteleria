import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
plugins: [vue()],
base: '/FrontEnd-Pasteleria/', // El nombre de tu repositorio en GitHub
});
