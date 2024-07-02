// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Productos from '../views/Productos.vue';
import Nosotros from '../views/Nosotros.vue';
import Contacto from '../views/Contacto.vue';

const routes = [
  {
    path: '/',
    redirect: '/Home' // Redirige la ruta raíz a '/Home'
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
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  }
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory('/FrontEnd-Pasteleria/'), // Ajusta esto según el nombre de tu repositorio
  routes
});

export default router;
