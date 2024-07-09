<template>
  <header class="py-3 px-5 flex items-center fixed top-0 w-full z-50 bg-black bg-opacity-10 text-white sm:hidden" id="mobileNavbar">
    <!-- Botón de menú móvil -->
    <div class="flex items-center space-x-4">
      <div class="modal-navbar cursor-pointer" @click="toggleMobileMenu">
        <img src="../assets/imagen/icons/menu.svg" alt="Menú">
      </div>
    </div>
    <!-- Logo -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <img class="rounded-full w-14 h-14" src="../assets/imagen/logo.ico" alt="Logoheader">
    </div>
    <!-- Elementos del lado derecho -->
    <div class="flex items-center space-x-4 ml-auto">
      <!-- Icono de carrito -->
      <div class="relative" @click="toggleCart">
        <div class="header__cart--notification absolute top-0 right-0 bg-[#951d1c] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{{ cartItems.length }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </div>
      <!-- Icono de menú desplegable -->
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="cursor-pointer w-9 h-9" @click="toggleDropdown">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <!-- Incluir DropdownMenu -->
        <DropdownMenu :isVisible="isDropdownVisible" :isLoggedIn="isLoggedIn" @update:isVisible="isDropdownVisible = $event" />
      </div>
    </div>
    <!-- Incluir Cart -->
    <Cart :isCartOpen="isCartOpen" :cartItems="cartItems" @close="toggleCart" />
    <!-- Modal, si es necesario -->
    <Modal :isVisible="isCartOpen" @close="toggleCart">
      <!-- Contenido del modal, si lo deseas -->
    </Modal>
  </header>
  <!-- Componente MobileMenu para el menú desplegable móvil -->
  <MobileMenu :menuOpen="menuOpen" @toggle-menu="toggleMobileMenu" />
  <!-- Fondo oscuro para cerrar menú móvil -->
  <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="toggleMobileMenu"></div>
</template>

<script>
import { mapState } from 'vuex';
import MobileMenu from './MobileMenu.vue';
import DropdownMenu from './DropdownMenu.vue';
import Cart from './Cart.vue';
import Modal from './Modal.vue';

export default {
  components: {
    MobileMenu,
    DropdownMenu,
    Cart,
    Modal
  },
  data() {
    return {
      menuOpen: false,
      isDropdownVisible: false,
      isLoggedIn: false,
      isCartOpen: false,
      cartItems: []
    };
  },
  computed: {
    ...mapState('cart', ['items']),
    cartItems() {
      return this.items;
    }
  },
  methods: {
    toggleMobileMenu() {
      // Cerrar el carrito si está abierto al abrir el menú móvil
      if (this.isCartOpen) {
        this.isCartOpen = false;
      }
      this.menuOpen = !this.menuOpen;
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    toggleCart() {
      // Cerrar el menú móvil si está abierto al abrir el carrito
      if (this.menuOpen) {
        this.menuOpen = false;
      }
      this.isCartOpen = !this.isCartOpen;
    }
  }
}
</script>

<style scoped>
/* Aquí puedes agregar estilos adicionales si es necesario */
</style>
