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
import MobileFilterSection from '../components/FilterSection.vue'; // mantenerlo para móviles
import ProductsSection from '../components/ProductsSection.vue';

export default {
  name: 'Productos',
  components: {
    Header,
    ProductTitle,
    MobileFilterSection,
    ProductsSection
  }
}
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>