<template>
  <div id="app">
    <router-view></router-view>
    <WhatsAppFloat />
  </div>
</template>

<script>
import WhatsAppFloat from './components/WhatsAppFloat.vue';

export default {
  name: 'App',
  components: {
    WhatsAppFloat
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}
</style>