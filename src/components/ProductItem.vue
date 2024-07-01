<template>
  <div>
    <!-- Producto individual -->
    <div @click="openModal(product)"
      class="product-item border p-3 bg-[#CD1110] rounded-2xl items-center cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#B10E0E] sm:max-w-36 sm:max-h-36 md:max-w-60 md:max-h-60">
      <img :src="product.image" alt="Imagen del producto" class="product-image rounded-lg mb-3 md:max-w-48 md:max-h-48">
      <h3 class="font-bold font-notoSansJP text-white text-center mb-2">{{ product.name }}</h3>
      <p class="font-semibold text-white mb-3 text-center">${{ product.price }}</p>
    </div>

    <!-- Modal -->
    <transition name="modal-fade">
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
       @click.self="closeModal">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative details flex flex-col lg:flex-row transition-opacity duration-500 animate-fade-in">
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-600">✕</button>
      <img :src="selectedProduct.image" alt="Imagen del producto"
           class="rounded-lg mb-3 lg:w-1/2 md:max-w-96 md:max-h-96 md:mx-auto">
      <div class="lg:w-1/2 lg:pl-6 flex flex-col justify-center items-center md:text-center">
        <h2 class="text-[#CD1110] uppercase text-m tracking-wide mb-3">Diseño de Sabores</h2>
        <h2 class="text-2xl mb-4">{{ selectedProduct.name }}</h2>
        <p class="text-sm text-gray-600 leading-6 mb-6">{{ selectedProduct.description }}</p>
        <div class="flex mb-6 items-center justify-center">
          <p class="text-xl font-bold flex items-center gap-4">
            ${{ selectedProduct.price }}
          </p>
          <p class="text-gray-500 line-through font-semibold">{{ selectedProduct.oldPrice }}</p>
        </div>
        <div class="flex justify-center mb-4">
          <div class="flex items-center">
            <img @click="decreaseQuantity" class="bg-gray-200 p-2 rounded-full cursor-pointer"
                 src="../assets/imagen/icons/minus.svg" alt="minus">
            <input class="text-center w-12 mx-2" type="text" v-model="quantity">
            <img @click="increaseQuantity" class="bg-gray-200 p-2 rounded-full cursor-pointer"
                 src="../assets/imagen/icons/plus.svg" alt="plus">
          </div>
        </div>
        <button @click="addToCart(selectedProduct, quantity)"
                class="details__button w-full bg-[#CD1110] text-white py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center gap-2 md:max-w-72 md:max-h-72">
          <img class="normal-state w-6 h-6" src="../assets/imagen/icons/shopping-bag-white.svg"
               alt="Carrito de compras">
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isModalOpen: false,
      selectedProduct: null,
      quantity: 1
    };
  },
  methods: {
    openModal(product) {
      this.selectedProduct = product;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProduct = null;
      this.quantity = 1;
    },
    addToCart(product, quantity) {
      this.$store.dispatch('cart/addToCart', { ...product, quantity });
      this.closeModal();
    },
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  }
};
</script>

<style scoped>
.product-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image {
  width: 100%;
  height: 150px;
  /* Ajuste de la altura */
  object-fit: cover;
  border-radius: 8px;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}
</style>
