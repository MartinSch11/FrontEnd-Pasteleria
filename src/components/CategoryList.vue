<!--src/components/CategoryList.vue-->
<template>
    <div class="flex flex-col justify-left font-notoSansJP m-2">
      <span class="lg:hidden">FILTRAR POR:</span>
      <h3 class="font-semibold">CATEGORÍAS</h3>
      <ul class="m-2">
        <li>Tortas</li>
        <li>Tartas</li>
        <li>Budines</li>
        <li>Alfajores</li>
        <li>Cookies</li>
        <li>¡Adorná tu postre!</li>
        <li>¡Armá tu desayuno!</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryList'
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>