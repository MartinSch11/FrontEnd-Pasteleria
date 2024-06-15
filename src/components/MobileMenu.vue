<!-- src/components/MobileMenu.vue -->
<template>
  <transition name="fade">
    <nav :key="menuKey" v-if="menuOpen" class="fixed top-0 left-0 h-full w-2/3 bg-gray-900 bg-opacity-90 py-4 px-4 z-50" id="mobileMenu">
      <div class="flex justify-end">
        <img src="../assets/imagen/close-white.svg" alt="Cerrar" class="cursor-pointer" @click="toggleMobileMenu">
      </div>
      <ul class="flex flex-col text-lg space-y-4 mt-8">
        <li><router-link to="/Home" class="block py-2 px-4 text-white rounded hover:bg-gray-700 transition">Inicio</router-link></li>
        <li><router-link to="/Productos" class="block py-2 px-4 text-white rounded hover:bg-gray-700 transition">Productos</router-link></li>
        <li><router-link to="/nosotros" class="block py-2 px-4 text-white rounded hover:bg-gray-700 transition">Nosotros</router-link></li>
        <li><router-link to="/contacto" class="block py-2 px-4 text-white rounded hover:bg-gray-700 transition">Contacto</router-link></li>
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    menuOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      menuKey: this.menuOpen ? 1 : 0 // Clave única para forzar la reactividad falsa
    };
  },
  watch: {
    menuOpen(newVal) {
      // Actualizamos la clave cuando cambia menuOpen
      this.menuKey = newVal ? 1 : 0;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.$emit('toggle-menu');
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>