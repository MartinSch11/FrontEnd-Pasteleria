<template>
  <div>
    <Header />
    <ProductTitle />
    <MobileFilterSection />
    <ProductsSection />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductTitle from '../components/ProductTitle.vue';
import MobileFilterSection from '../components/FilterSection.vue'; // mantenerlo para móviles
import ProductsSection from '../components/ProductsSection.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Productos',
  components: {
    Header,
    ProductTitle,
    MobileFilterSection,
    ProductsSection,
    Footer,
  }
}
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>