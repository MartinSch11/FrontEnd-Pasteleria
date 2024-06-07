<!-- src/components/DropdownMenu.vue -->
<template>
    <transition name="fade-slide">
      <div v-if="isVisible" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-2">
        <ul>
          <template v-if="isLoggedIn">
            <li>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">Perfil</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">Configuraciones</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">Cerrar Sesión</a>
            </li>
          </template>
          <template v-else>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">Iniciar Sesión</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">Registrarse</a>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true
      },
      isLoggedIn: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  .fade-slide-enter, .fade-slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  </style>