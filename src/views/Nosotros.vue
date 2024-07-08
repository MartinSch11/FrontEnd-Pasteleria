<template>
    <div>
        <Header/>
        <AboutTitle/>
        <Footer />
        <!-- Resto de tu aplicación -->
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import AboutTitle from '../components/AboutTitle.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Nosotros',
    components: {
        Header,
        AboutTitle,
        Footer,
    }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>