import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import Header from './components/Header.vue'
import MobileMenu from './components/MobileMenu.vue'
import 'swiper/swiper-bundle.css';

// Crea la aplicación
const app = createApp(App);

// Registra los componentes globales
app.component('Header', Header);
app.component('MobileMenu', MobileMenu);

// Monta la aplicación en el elemento con el ID 'app'
app.mount('#app');