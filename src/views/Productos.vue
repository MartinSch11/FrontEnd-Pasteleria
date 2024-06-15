<!-- src/views/Productos.vue -->
<template>
    <div>
      <Header />
      <ProductTitle />
      <MobileFilterSection />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ProductTitle from '../components/ProductTitle.vue';
  import MobileFilterSection from '../components/MobileFilterSection.vue';

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