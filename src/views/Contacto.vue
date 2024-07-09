<template>
    <div>
        <Header/>
        <Contact/>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/ContactSection.vue';


export default {
    name: 'Contacto',
    components: {
        Contact,
        Footer
    }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>