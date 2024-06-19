<!--src/components/Cart.vue-->
<template>
  <div :class="['cart', { open: isCartOpen }]" @click.self="closeCart">
    <div class="cart-content">
      <template v-if="cartItems.length === 0">
        <div class="empty-cart flex flex-col items-center justify-center h-full">
          <img src="../assets/imagen/icons/shopping-bag-black.svg" alt="Empty Cart" class="empty-cart-image w-24 h-auto mb-4">
          <p class="text-black text-lg font-notoSansJP">Tu carrito está vacío</p>
        </div>
      </template>
      <template v-else>
        <!-- Aquí iría la lógica para mostrar los productos en el carrito -->
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCartOpen: {
      type: Boolean,
      required: true
    },
    cartItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    closeCart() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  transition: right 0.4s ease; /* Cambia la duración de 0.3s a 0.5s */
  padding: 20px;
  box-sizing: border-box;
  z-index: 50; /* Por encima del modal */
  overflow-y: auto; /* Asegura que el contenido del carrito sea desplazable */
}

.cart.open {
  right: 0;
}

.cart-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.empty-cart {
  text-align: center;
}

.empty-cart-image {
  width: 50px;
  height: auto;
  margin-bottom: 20px;
}
</style>