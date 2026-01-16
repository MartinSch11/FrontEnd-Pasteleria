<template>
  <header
  class="py-1 px-5 flex items-center fixed top-0 w-full justify-between z-50 text-black bg-white/80 backdrop-blur-sm hidden sm:flex"
  id="navbar">
    <div class="flex flex-grow basis-0">
      <img class="rounded-full w-14" src="../assets/imagen/logo.ico" alt="Logoheader">
    </div>
    <nav>
      <ul class="flex text-lg space-x-12">
        <li>
          <router-link to="/Home" class="link-container">Inicio</router-link>
        </li>
        <li>
          <router-link to="/Productos" class="link-container">Productos</router-link>
        </li>
        <li>
          <router-link to="/Nosotros" class="link-container">Nosotros</router-link>
        </li>
        <li>
          <router-link to="/Cursos" class="link-container">Cursos</router-link>
        </li>
        <li>
          <router-link to="/Contacto" class="link-container">Contacto</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex flex-grow basis-0 justify-end items-center space-x-12">
      <div class="relative">
        <!-- Botón de carrito -->
        <div class="header__cart--notification absolute top-0 right-0 bg-[#951d1c] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {{ cartItems ? cartItems.length : 0 }}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-8 h-8 cursor-pointer transition-transform duration-200 ease-in-out hover:-translate-y-0.5" @click="toggleCart">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </div>
      <div class="relative">
        <!-- Botón de menú desplegable -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="cursor-pointer w-8 h-8 transition-transform duration-200 ease-in-out hover:-translate-y-0.5" @click="toggleDropdown">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <!-- Incluir DropdownMenu -->
        <DropdownMenu :isVisible="isDropdownVisible" :isLoggedIn="isLoggedIn" @update:isVisible="isDropdownVisible = $event" />
      </div>
    </div>

    <!-- Incluir Cart -->
    <Cart :isCartOpen="isCartOpen" @close="toggleCart" />
  </header>
</template>

<script>
import { mapState } from 'vuex';
import DropdownMenu from './DropdownMenu.vue';
import Cart from './Cart.vue';

export default {
  components: {
    DropdownMenu,
    Cart
  },
  data() {
    return {
      isDropdownVisible: false,
      isLoggedIn: false, // Estado para verificar si el usuario ha iniciado sesión
      isCartOpen: false
    };
  },
  computed: {
    ...mapState('cart', ['items']),
    cartItems() {
      return this.items;
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    }
  }
};
</script>

<style scoped>
/* Estilos de hover para los enlaces del menú */
.link-container {
  position: relative;
  color: black; /* white;*/
  text-decoration: none;
  font-weight: 500;
}

.link-container::before {
  content: "";
  position: absolute;
  bottom: 0;
  /* Ajusta la posición de la línea en la parte inferior */
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #951d1c; /* #FFD700; */ 
  transition: width 0.5s ease;
}

.link-container:hover::before {
  width: 100%;
}

.header__cart--notification {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #951d1c;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
</style>
