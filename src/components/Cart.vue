<!-- src/components/Cart.vue -->
<template>
  <div>
    <!-- Overlay oscuro de fondo -->
    <div
      v-if="isCartOpen"
      class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50"
      @click="closeCart"
    ></div>

    <!-- Panel del carrito -->
    <div
      :class="[
        'fixed top-0 right-0 h-screen w-80 bg-white shadow-lg z-50 overflow-y-auto transition-transform transform',
        { 'translate-x-0': isCartOpen, 'translate-x-full': !isCartOpen }
      ]"
    >
      <!-- Estado: carrito vacío -->
      <template v-if="items.length === 0">
        <div class="flex flex-col h-full">
          <!-- Barra superior con botón de cerrar -->
          <div class="p-2 bg-gray-100 relative">
            <h3 class="text-sm text-black font-notoSansJP font-medium text-center">MI COMPRA</h3>
            <button
              @click="closeCart"
              class="absolute top-2 right-3 text-gray-500 hover:text-black transition-colors"
              aria-label="Cerrar carrito"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Contenido vacío centrado -->
          <div class="flex flex-col items-center justify-center flex-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-16 h-16 mb-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p class="text-lg text-gray-600 text-center">Tu carrito está vacío</p>
          </div>
        </div>
      </template>

      <!-- Estado: con productos -->
      <template v-else>
        <div class="flex flex-col h-full">
          <!-- Barra superior con botón de cerrar -->
          <div class="p-2 text-center bg-gray-100 relative">
            <h3 class="text-sm text-black font-notoSansJP font-medium">MI CARRITO</h3>
            <button
              @click="closeCart"
              class="absolute top-2 right-3 text-gray-500 hover:text-black transition-colors"
              aria-label="Cerrar carrito"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Lista de productos -->
          <div class="p-2 flex-1 overflow-y-auto">
            <CartItem
              v-for="item in items"
              :key="item.id"
              :item="item"
              @update-quantity="updateQuantity"
              @remove-item="removeItemFromCart"
            />
          </div>

          <!-- Resumen de precios y botones -->
          <div id="price-section" class="mt-4 p-2">
            <button
              @click="toggleDetails"
              class="w-full text-left text-xs text-gray-400"
            >
              {{ showDetails ? 'Ver menos' : 'Ver detalle' }}
            </button>
            <div v-if="showDetails">
              <div class="flex justify-between mb-1 text-xs text-gray-700">
                <span>Subtotal</span>
                <span>${{ subtotal }}</span>
              </div>
              <div class="flex justify-between mb-1 text-xs text-gray-700">
                <span>Descuentos</span>
                <span>$0</span>
              </div>
            </div>
            <div class="flex justify-between mt-1 text-lg font-bold text-black">
              <span>Total</span>
              <span>${{ total }}</span>
            </div>
            <div class="text-center mt-3">
              <button
                @click="proceedToCheckout"
                class="w-full bg-black text-white py-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#CD1110] duration-300"
              >
                Finalizar Compra
              </button>
              <div class="flex justify-between items-center mt-2">
                <a @click="keepShopping" class="text-gray-400 text-sm cursor-pointer flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  <span class="ml-1">Seguir comprando</span>
                </a>
                <a @click="closeCart" class="text-gray-400 text-sm cursor-pointer flex items-center">
                  <span class="mr-1">Cerrar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name: 'Cart',
  props: {
    isCartOpen: {
      type: Boolean,
      required: true
    }
  },
  components: {
    CartItem
  },
  data() {
    return {
      showDetails: false
    };
  },
  computed: {
    ...mapState('cart', {
      items: state => state.items
    }),
    subtotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    total() {
      return this.subtotal;
    }
  },
  methods: {
    updateQuantity(payload) {
      this.$store.commit('cart/updateQuantity', payload);
    },
    removeItemFromCart(item) {
      this.$store.commit('cart/removeItem', item);
    },
    closeCart() {
      this.$emit('close');
    },
    proceedToCheckout() {
      // Lógica para proceder al checkout
      this.$router.push('/Checkout');
      console.log('Proceder al checkout');
    },
    keepShopping() {
      this.closeCart();
      // Opcional: redirigir a productos
      // this.$router.push('/Productos');
    },
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
};
</script>