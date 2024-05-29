<template>
  <div id="app">
    <Header />
    <HeaderCarousel />
    <ServicesSection />
    <!-- Resto de tu aplicación -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import HeaderCarousel from './components/HeaderCarousel.vue';
import ServicesSection from './components/ServicesSection.vue';

export default {
  components: {
    Header,
    HeaderCarousel,
    ServicesSection
  }
};
</script>

<style>
/* Estilos globales de la aplicación */
</style>