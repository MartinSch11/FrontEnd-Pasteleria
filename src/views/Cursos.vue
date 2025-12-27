<template>
    <div>
        <Header/>
        

        <CursosSection/>

        <Footer />
        
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import CursosSection from '../components/CursosSection.vue';
import Footer from '../components/Footer.vue';


export default {
    name: 'Cursos',
    components: {
        Header,
        CursosSection,
        Footer,
    }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>