<!-- src/components/Header.vue -->
<template>
  <header>
    <NavBar />
    <MobileNavBar />
    <MobileMenu />
    <div class="hidden fixed inset-0 bg-black bg-opacity-50 z-40" id="overlay" @click="toggleMobileMenu"></div>
  </header>
</template>

<script>
import NavBar from './NavBar.vue';
import MobileNavBar from './MobileNavBar.vue';
import MobileMenu from './MobileMenu.vue';

export default {
  components: {
    NavBar,
    MobileNavBar,
    MobileMenu,
  },
  methods: {
    toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const overlay = document.getElementById('overlay');
      mobileMenu.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
    },
  },
};
</script>

<style>
/* Estilos específicos para el Header */
</style>