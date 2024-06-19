<!--src/components/ProductsSection.vue-->
<template>
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-5">
      <CategoryList class="hidden lg:block col-span-1" />
      <div class="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Aquí irían los productos -->
        <div v-for="product in products" :key="product.id" class="product-item">
          <!-- Contenido del producto -->
          <div class="border p-4">
            <h3 class="font-bold">{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="font-semibold">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CategoryList from './CategoryList.vue';
  
  export default {
    components: {
      CategoryList,
    },
    data() {
      return {
        products: [
          // Tu array de productos
          { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: '$10' },
          { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: '$20' },
          // Agrega más productos según sea necesario
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-item {
    /* Estilos para cada producto */
  }
  </style>