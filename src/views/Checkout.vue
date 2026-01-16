<template>
    <div>
        <Header/>
        

        <CheckoutSection/>

        <Footer />
        
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import CheckoutSection from '../components/CheckoutSection.vue';
import Footer from '../components/Footer.vue';


export default {
    name: 'Checkout',
    components: {
        Header,
        CheckoutSection,
        Footer,
    }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>