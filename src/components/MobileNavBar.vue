<!-- src/components/MobileNavbar.vue -->
<template>
  <header class="py-3 px-5 flex items-center fixed top-0 w-full z-50 bg-black bg-opacity-10 text-white sm:hidden" id="mobileNavbar">
    <div class="flex items-center space-x-4">
      <div class="modal-navbar cursor-pointer" @click="toggleMobileMenu">
        <img src="../assets/imagen/icons/menu.svg" alt="Menú">
      </div>
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <img class="rounded-full w-14 h-14" src="../assets/imagen/logo.ico" alt="Logoheader">
    </div>
    <div class="flex items-center space-x-4 ml-auto">
      <div class="relative">
        <div class="header__cart--notification absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</div>
        <img class="w-7 h-7 rounded-full" src="../assets/imagen/icons/shopping-bag-white.svg" alt="Shopping Bag">
      </div>
      <img class="w-7 h-7 rounded-full" src="../assets/imagen/icons/avatar.svg" alt="Avatar">
    </div>
  </header>
  <MobileMenu :menuOpen="menuOpen" @toggle-menu="toggleMobileMenu" />
  <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="toggleMobileMenu"></div>
</template>

<script>
import MobileMenu from './MobileMenu.vue';

export default {
  components: {
    MobileMenu
  },
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>