<!-- src/components/CartItem.vue -->
<template>
  <div class="cart-item flex justify-between items-center py-4 border-b border-gray-300">
    <img :src="item.image" alt="Product Image" class="cart-item-image w-16 h-16 object-cover rounded-lg">
    <div class="cart-item-info flex-1 mx-4">
      <h3 class="font-bold text-black text-sm">{{ item.name }}</h3>
      <p class="text-gray-600 text-xs"> Sabor: {{ item.flavor }}</p>
      <div class="cart-item-quantity flex items-center mt-2">
        <button @click="decreaseQuantity" class="quantity-button p-2 border-l border-b border-t hover:bg-gray-200 custom-decrease-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        </button>
        <span class="pt-1 pb-1 pr-2 pl-2 text-black border-t border-b text-base">{{ item.quantity }}</span>
        <button @click="increaseQuantity" class="quantity-button p-2 border-r border-b border-t hover:bg-gray-200 custom-increase-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
    <div class="cart-item-actions text-right">
      <button @click="removeItemFromCart"
        class="remove-button bg-transparent border-none text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
      <p class="text-base font-bold text-black mt-2">${{ item.price }}</p>
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
    },
    removeItemFromCart() {
      this.$emit('remove-item', this.item.id); // Emitir el evento 'remove-item' con el id del item
    }
  }
};
</script>

<style scoped>
.custom-decrease-button {
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;

}

.custom-increase-button {

border-top-right-radius: 20px;
border-bottom-right-radius: 20px;

}
</style>
