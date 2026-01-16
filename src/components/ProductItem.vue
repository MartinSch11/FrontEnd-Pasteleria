<template>
  <div>
    <div @click="openModal"
      class="product-item border p-3 bg-[#951d1c] rounded-2xl items-center cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#B10E0E] sm:max-w-36 sm:max-h-36 md:max-w-60 md:max-h-60 h-full flex flex-col justify-between">

      <img :src="imagenProcesada" alt="Imagen del producto"
        class="product-image rounded-lg mb-3 md:max-w-48 md:max-h-48 object-cover w-full h-32">

      <h3 class="font-bold font-notoSansJP text-white text-center mb-2 text-sm md:text-base">
        {{ product.nombre || product.name }}
      </h3>
      <p class="font-semibold text-white mb-3 text-center">
        $ {{ product.precio || product.price }}
      </p>
    </div>

    <transition name="modal-fade">
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
        @click.self="closeModal">

        <div
          class="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative details flex flex-col lg:flex-row transition-opacity duration-500 animate-fade-in max-h-[90vh] overflow-y-auto">

          <button @click="closeModal"
            class="absolute top-2 right-2 text-gray-600 text-2xl font-bold hover:text-red-700">&times;</button>

          <img :src="imagenProcesada" alt="Imagen del producto"
            class="rounded-lg mb-3 lg:w-1/2 md:max-w-96 md:max-h-96 md:mx-auto object-cover">

          <div class="lg:w-1/2 lg:pl-6 flex flex-col justify-center items-center md:text-center">
            <h2 class="text-[#951d1c] uppercase text-sm tracking-wide mb-3">Diseño de Sabores</h2>

            <h2 class="text-2xl mb-4 font-bold">{{ product.nombre || product.name }}</h2>

            <p class="text-sm text-gray-600 leading-6 mb-6 text-center">
              {{ product.descripcion || product.description || 'Sin descripción disponible.' }}
            </p>

            <div class="flex mb-6 items-center justify-center gap-4">
              <p class="text-3xl font-bold text-green-700">
                ${{ product.precio || product.price }}
              </p>
              <p v-if="product.oldPrice" class="text-gray-500 line-through font-semibold">
                {{ product.oldPrice }}
              </p>
            </div>

            <div class="flex justify-center mb-6">
              <div class="flex items-center border rounded-full px-2 py-1">
                <button @click="decreaseQuantity"
                  class="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition font-bold text-xl">-</button>
                <input class="text-center w-12 mx-2 font-bold outline-none" type="text" v-model="quantity" readonly>
                <button @click="increaseQuantity"
                  class="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition font-bold text-xl">+</button>
              </div>
            </div>

            <button @click="addToCart"
              class="details__button w-full bg-[#951d1c] text-white py-3 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 flex justify-center items-center gap-2 font-bold shadow-md">
              <img class="w-6 h-6" src="../assets/imagen/icons/shopping-bag-white.svg" alt="Carrito">
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
      quantity: 1
    };
  },
  computed: {
    imagenProcesada() {
      if (this.product.imagen) {
        // CAMBIO AQUÍ: de 'png' a 'jpeg'
        return `data:image/jpeg;base64,${this.product.imagen}`;
      }
      return this.product.image || 'https://via.placeholder.com/300?text=Sin+Imagen';
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.quantity = 1;
    },
    addToCart() {
      // CAMBIO CLAVE: En lugar de llamar al store, le avisamos al padre
      // Enviamos el producto y la cantidad seleccionada
      this.$emit('add-to-cart', {
        ...this.product,
        cantidad: this.quantity, // Normalizamos a 'cantidad' para tu lógica nueva
        // Aseguramos mapeo de campos por si vienen distintos
        id: this.product.id,
        nombre: this.product.nombre || this.product.name,
        precio: this.product.precio || this.product.price
      });

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
.product-image {
  object-fit: cover;
}

/* Animaciones del Modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>