<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50" @click="handleBackgroundClick">
    <div class="bg-white text-black border border-gray-300 rounded shadow-lg w-96 font-notoSansJP" @click.stop>
      <div v-if="!isLoggedIn">
        <div class="flex justify-end p-2">
          <svg @click="closeMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="px-6 py-3">
          <h3 class="text-3xl font-bold mb-2 font-windSong text-[#951d1c] text-center">Diseño de Sabores</h3>
          <p class="mb-4">Iniciá sesión o registrate (es gratis)</p>
          <div class="flex justify-around mb-4">
            <button type="button" class="bg-gray-200 p-2 rounded-full">
              <svg class="w-6 h-6 text-black" aria-hidden="true">
                <use xlink:href="#appleIcon"></use>
                <title>AppleIcon</title>
              </svg>
            </button>
            <button type="button" class="bg-gray-200 p-2 rounded-full">
              <svg class="w-6 h-6 text-black" aria-hidden="true">
                <use xlink:href="#facebook"></use>
                <title>Facebook</title>
              </svg>
            </button>
            <button type="button" class="bg-gray-200 p-2 rounded-full">
              <svg class="w-6 h-6 text-black" aria-hidden="true">
                <use xlink:href="#google"></use>
                <title>Google</title>
              </svg>
            </button>
          </div>
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div class="relative">
              <input id="email" name="email" aria-invalid="true" aria-required="true" required
                class="block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Correo" type="email" autocomplete="email" aria-label="CORREO ELECTRÓNICO" v-model="email">
              <label for="email" class="absolute left-3 top-2 text-gray-500"><span class="text-red-500"></span></label>
              <span aria-hidden="true" class="absolute right-3 top-2 text-red-500">
                <svg class="w-4 h-4" aria-hidden="true">
                  <use xlink:href="#cross-small"></use>
                  <title>Cross small</title>
                </svg>
              </span>
            </div>
            <div v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</div>
            <div class="flex items-center">
              <input type="checkbox" id="keepLoggedIn" name="persistentLogin" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" v-model="keepLoggedIn">
              <label for="keepLoggedIn" class="ml-2 block text-sm text-gray-900">Mantener sesión iniciada. Aplicable a todas las opciones.</label>
            </div>
            <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">CONTINUAR</button>
          </form>
        </div>
      </div>
      <ul v-else class="space-y-2 p-6">
        <li>
          <router-link to="/profile" class="block px-4 py-2 hover:bg-gray-100">Perfil</router-link>
        </li>
        <li>
          <router-link to="/settings" class="block px-4 py-2 hover:bg-gray-100">Configuración</router-link>
        </li>
        <li>
          <router-link to="/logout" class="block px-4 py-2 hover:bg-gray-100">Cerrar Sesión</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    isLoggedIn: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      email: '',
      keepLoggedIn: false,
      emailError: ''
    };
  },
  methods: {
    handleSubmit() {
      if (!this.validateEmail(this.email)) {
        this.emailError = 'Escribí una dirección de email válida';
      } else {
        this.emailError = '';
        // Lógica para manejar el login
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    handleBackgroundClick() {
      this.closeMenu();
    },
    closeMenu() {
      this.$emit('update:isVisible', false);
    },
  }
};
</script>

<style scoped></style>
