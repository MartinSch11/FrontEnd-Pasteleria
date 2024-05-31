<template>
  <header class="py-1 px-5 flex items-center fixed top-0 w-full justify-between z-50 bg-black bg-opacity-50 text-white hidden sm:flex" id="navbar">
    <div class="flex flex-grow basis-0">
      <img class="rounded-full w-14" src="../assets/imagen/logo.ico" alt="Logoheader">
    </div>
    <nav>
      <ul class="flex text-lg space-x-12">
        <li>
          <router-link to="/" class="link-container">Inicio</router-link>
        </li>
        <li>
          <router-link to="/productos" class="link-container">Productos</router-link>
        </li>
        <li>
          <router-link to="/nosotros" class="link-container">Nosotros</router-link>
        </li>
        <li>
          <router-link to="/contacto" class="link-container">Contacto</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex flex-grow basis-0 justify-end items-center space-x-12">
      <div class="relative">
        <div class="header__cart--notification absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</div>
        <img src="../assets/imagen/shopping_bag_icon-white.svg" alt="Shopping Bag">
      </div>
      <div class="relative">
        <img src="../assets/imagen/icons/avatar.svg" alt="Avatar" class="cursor-pointer" @click="toggleDropdown">
        <DropdownMenu :isVisible="isDropdownVisible" :isLoggedIn="isLoggedIn" />
      </div>
    </div>
    <!-- Línea de hover en la parte inferior del header -->
    <div class="line"></div>
  </header>
</template>

<script>
import DropdownMenu from '../components/DropdownMenu.vue';

export default {
  components: {
    DropdownMenu
  },
  data() {
    return {
      isDropdownVisible: false,
      isLoggedIn: false // Estado para verificar si el usuario ha iniciado sesión
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  }
}
</script>

<style scoped>
/* Estilos de hover para los enlaces del menú */
.link-container {
  position: relative;
  color: white;
  text-decoration: none;
}

.link-container::before {
  content: "";
  position: absolute;
  bottom: 0; /* Ajusta la posición de la línea en la parte inferior */
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #FFD700;
  transition: width 0.3s ease;
}

.link-container:hover::before {
  width: 100%;
}

/* Estilos para la transición del menú desplegable */
.line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #FFD700;
}
</style>