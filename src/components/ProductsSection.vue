<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 p-5">
    <!-- Mostrar CategoryList solo en escritorio -->
    <div class="hidden lg:block">
      <CategoryList />
    </div>
    <div class="col-span-1 sm:col-span-2 lg:col-span-4 md:grid-cols-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <!-- Aquí irían los productos -->
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>

    <!-- Modal para filtros en móvil y tablet -->
    <div :class="['filter-modal', { open: isFilterOpen }]">
      <div class="filter-content">
        <button @click="toggleFilter"><img src="../assets/imagen/icons/arrow-right.svg" alt="Filtrar"></button>
        <CategoryList />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue';
import ProductItem from './ProductItem.vue';

// Importar imágenes
import brownieImage from '../assets/imagen/brownie.jpg';
import cookiesImage from '../assets/imagen/cookies.jpg';

export default {
  components: {
    CategoryList,
    ProductItem,
  },
  data() {
    return {
      isFilterOpen: false,
      products: [
        { id: 1, image: brownieImage, name: 'Brownie', description: 'De chocolate', price: '10' },
        { id: 2, image: cookiesImage, name: 'Cookies', description: 'De chocolate. Se venden en bolsita de 5 unidades', price: '20' },
        { id: 3, image: brownieImage, name: 'Producto 3', description: 'Descripción del producto 3', price: '30' },
        { id: 4, image: brownieImage, name: 'Producto 4', description: 'Descripción del producto 4', price: '40' },
        { id: 5, image: brownieImage, name: 'Producto 5', description: 'Descripción del producto 5', price: '50' },
        { id: 6, image: brownieImage, name: 'Producto 6', description: 'Descripción del producto 6', price: '60' },
        { id: 7, image: brownieImage, name: 'Producto 7', description: 'Descripción del producto 7', price: '70' },
        { id: 8, image: brownieImage, name: 'Producto 8', description: 'Descripción del producto 8', price: '80' },
      ],
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    }
  }
}
</script>

<style scoped>
/* Reducir el padding en dispositivos móviles */
@media (max-width: 640px) {
  .product-item {
    padding: 0.5rem; /* Ajustar el padding a 0.5rem */
  }
}

/* Estilo existente */
.filter-modal {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.5s ease;
  z-index: 60;
  overflow-y: auto;
}
.filter-modal.open {
  right: 0;
}
.filter-content {
  padding: 20px;
  box-sizing: border-box;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn img {
  width: 16px;
  height: auto;
}
</style>
