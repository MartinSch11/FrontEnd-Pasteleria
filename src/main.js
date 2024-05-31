import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';
import Header from './components/Header.vue';
import MobileMenu from './components/MobileMenu.vue';
import 'swiper/swiper-bundle.css';

const app = createApp(App);

// Registra los componentes globales
app.component('Header', Header);
app.component('MobileMenu', MobileMenu);

// Usa el router
app.use(router);

// Monta la aplicación en el elemento con el ID 'app'
app.mount('#app');