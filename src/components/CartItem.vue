<!-- src/components/CartItem.vue -->
<template>
  <div class="cart-item flex justify-between items-center py-2 border-2 rounded">
    <img :src="item.image" alt="Product Image" class="cart-item-image w-16 h-16 object-cover rounded">
    <div class="cart-item-info flex-1 mx-2">
      <h3 class="font-bold text-black">{{ item.name }}</h3>
      <p class="text-sm text-gray-600">{{ item.price }}</p>
    </div>
    <div class="cart-item-quantity flex items-center">
      <button @click="decreaseQuantity" class="text-gray-600">-</button>
      <span class="mx-2 text-black">{{ item.quantity }}</span>
      <button @click="increaseQuantity" class="text-gray-600">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    increaseQuantity() {
      this.$emit('update-quantity', { item: this.item, quantity: this.item.quantity + 1 });
    },
    decreaseQuantity() {
      if (this.item.quantity > 1) {
        this.$emit('update-quantity', { item: this.item, quantity: this.item.quantity - 1 });
      }
    }
  }
};
</script>

<style scoped>
.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}
</style>