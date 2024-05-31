<template>
    <div>
        <Header/>
        <HeaderCarousel />
        <ServicesSection />
        <!-- Resto de tu aplicación -->
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import HeaderCarousel from '../components/HeaderCarousel.vue';
import ServicesSection from '../components/ServicesSection.vue';

export default {
    name: 'Home',
    components: {
        Header,
        HeaderCarousel,
        ServicesSection
    }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>