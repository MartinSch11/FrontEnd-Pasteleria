<!-- src/views/Productos.vue -->
<template>
    <div>
      <Header />
      <ProductTitle />
      <MobileFilterSection />
      <ProductsSection />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ProductTitle from '../components/ProductTitle.vue';
  import MobileFilterSection from '../components/FilterSection.vue';
  import ProductSection from '../components/ProductsSection.vue';

  export default {
    name: 'Productos',
    components: {
      Header,
      ProductTitle,
      MobileFilterSection
    }
  }
  </script>
  
  <style scoped>
  /* Añade tus estilos aquí */
  </style>