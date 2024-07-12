<template>
    <div>
        <Header/>
        <HeaderCarousel />
        <ServicesSection />
        <HomeBanner />
        <!-- Resto de tu aplicación -->
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import HeaderCarousel from '../components/HeaderCarousel.vue';
import ServicesSection from '../components/ServicesSection.vue';
import HomeBanner from '../components/HomeBanner.vue'
import Footer from '../components/Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        HeaderCarousel,
        ServicesSection,
        HomeBanner,
        Footer,
    }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>