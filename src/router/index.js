// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Productos from '../views/Productos.vue';

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: Productos
  },
  // Añade más rutas según tus necesidades
];

const router = createRouter({
  history: createWebHistory('/FrontEnd-Pasteleria/'), // Ajusta esto según el nombre de tu repositorio
  routes
});

export default router;