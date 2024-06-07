<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Añade tus estilos globales aquí */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Evita el desbordamiento horizontal */
  width: 100%; /* Asegura que el ancho del body y html no cause desbordamiento */
}
</style>