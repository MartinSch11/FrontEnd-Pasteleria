<!-- src/components/Cart.vue -->
<template>
  <div>
    <div v-if="isCartOpen" class="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50" @click="closeCart">
    </div>
    <div
      :class="[' fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto transition-transform transform', { 'translate-x-0': isCartOpen, 'translate-x-full': !isCartOpen }]">
      <template v-if="items.length === 0">
        <div class="flex flex-col items-center justify-center h-full">
          <img src="../assets/imagen/icons/shopping-bag-black.svg" alt="Empty Cart" class="w-12 h-auto mb-4">
          <p class="text-lg text-gray-600">Tu carrito está vacío</p>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col h-full">
          <div class="p-2 text-center bg-gray-100">
            <h3 class="text-sm text-black font-notoSansJP font-medium">MI COMPRA</h3>
          </div>
          <div class="p-2 flex-1 overflow-y-auto">
            <CartItem v-for="item in items" :key="item.id" :item="item" @update-quantity="updateQuantity"
              @remove-item="removeItemFromCart" />
          </div>
          <div id="price-section" class="mt-4 p-2">
            <button @click="toggleDetails" class="w-full text-left text-xs text-gray-400">
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
            <div class="text-center">
              <button @click="proceedToCheckout"
                class="w-full bg-black text-white py-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#CD1110] duration-300">
                Finalizar Compra
              </button>
              <div class="flex justify-between items-center mt-2">
                <a @click="keepShopping" class="text-gray-400 text-sm cursor-pointer flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  <span class="ml-1">Seguir comprando</span>
                </a>
                <a @click="closeCart" class="text-gray-400 text-sm cursor-pointer flex items-center">
                  <span class="mr-1">Ver carrito</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
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
      return this.subtotal; // Puedes añadir lógica adicional aquí para calcular el total con descuentos, impuestos, etc.
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
    },
    keepShopping() {
      // Lógica para seguir comprando
    },
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
};
</script>
