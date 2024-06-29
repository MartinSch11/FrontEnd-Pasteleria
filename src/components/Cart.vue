<template>
  <div>
    <div v-if="isCartOpen" class="cart-overlay" @click="closeCart"></div>
    <div :class="['cart', { open: isCartOpen }]" @click.self="closeCart">
      <div class="cart-content">
        <template v-if="items.length === 0">
          <div class="empty-cart flex flex-col items-center justify-center h-full">
            <img src="../assets/imagen/icons/shopping-bag-black.svg" alt="Empty Cart" class="empty-cart-image w-24 h-auto mb-4">
            <p class="text-black text-lg font-notoSansJP">Tu carrito está vacío</p>
          </div>
        </template>
        <template v-else>
          <CartItem v-for="item in items" :key="item.id" :item="item" @update-quantity="updateQuantity" />
          <button @click="clearCart" class="clear-cart-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Vaciar carrito</button>
        </template>
      </div>
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
  computed: {
    ...mapState('cart', {
      items: state => state.items
    })
  },
  methods: {
    updateQuantity(payload) {
      this.$store.commit('cart/updateQuantity', payload);
    },
    clearCart() {
      this.$store.commit('cart/clearCart');
    },
    closeCart() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 49;
}

.cart {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  transition: right 0.4s ease;
  padding: 20px;
  box-sizing: border-box;
  z-index: 50;
  overflow-y: auto;
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

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 60px;
  height: auto;
  border-radius: 10px;
}

.cart-item-details {
  flex: 1;
  margin-left: 10px;
}

.cart-item-actions {
  display: flex;
  align-items: center;
}

.clear-cart-button {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
</style>
