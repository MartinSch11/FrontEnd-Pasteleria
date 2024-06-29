<!-- src/components/MobileMenu.vue -->
<template>
  <div :class="['mobile-menu', { open: menuOpen }]" @click.self="toggleMenu">
    <div class="menu-content">
      <nav :key="menuKey" v-if="menuOpen" class="fixed top-0 left-0 h-full w-2/3 text-black bg-opacity-90 py-4 px-4 z-50" id="mobileMenu">
        <div class="flex justify-end">
        </div>
        <ul class="flex flex-col text-lg space-y-4 mt-8 font-notoSansJP">
          <li v-for="(item, index) in menuItems" :key="index" :class="['menu-item', { 'fade-in': menuOpen }]" :style="getStyle(index)">
            <router-link :to="item.link" class="block py-2 px-4">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
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
      menuItems: [
        { name: 'Inicio', link: '/Home' },
        { name: 'Productos', link: '/Productos' },
        { name: 'Nosotros', link: '/Nosotros' },
        { name: 'Contacto', link: '/Contacto' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    },
    getStyle(index) {
      const delay = 0.3 + index * 0.1;
      return {
        animationDelay: `${delay}s`
      };
    }
  }
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
  transition: left 0.4s ease;
  padding: 20px;
  box-sizing: border-box;
  z-index: 50;
  overflow-y: auto;
}

.mobile-menu.open {
  left: 0;
}

.menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.menu-item {
  opacity: 0;
}

.menu-item.fade-in {
  animation: fadeIn 1s ease forwards;
}
</style>