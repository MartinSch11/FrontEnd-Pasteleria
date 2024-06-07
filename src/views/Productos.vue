<!-- src/views/Productos.vue -->
<template>
    <div>
      <Header />
      <ProductTitle />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import ProductTitle from '../components/ProductTitle.vue';
  
  export default {
    name: 'Productos',
    components: {
      Header,
      ProductTitle
    }
  }
  </script>
  
  <style scoped>
  /* Añade tus estilos aquí */
  </style>