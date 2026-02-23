<!-- src/components/ServiceSection.vue -->
<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Call to Action -->
    <div class="relative bg-gradient-to-r from-[#951d1c] to-[#c42a29] rounded-2xl shadow-2xl overflow-hidden mb-16 mt-8">
      <div class="absolute inset-0 bg-cover bg-center opacity-20" 
          style="background-image: url('../assets/imagen/postre.jpg');">
      </div>
      
      <div class="relative max-w-4xl mx-auto px-6 py-12 text-center">
          <h3 class="text-2xl md:text-3xl font-notoSansJP font-bold text-white mb-4">
              ¿Listo para endulzar tu día?
          </h3>
          <p class="text-lg font-notoSansJP text-white/90 mb-6">
              Visítanos y descubre por qué somos la pastelería favorita de la ciudad
          </p>
          <button class="bg-yellow-400 hover:bg-yellow-500 text-[#951d1c] font-notoSansJP font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg">
              Visítanos Hoy
          </button>
      </div>
    </div>

    <div data-store="banner-services" class="mb-16">
      <!-- Sección de servicios para escritorio -->
      <div class="hidden sm:block">
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ServiceItem
            :imgSrc="moneyIcon"
            title="Descuento por Pago en efectivo"
            description="Todos los días 10% de descuento por pago en efectivo en el local."
          />
          <ServiceItem
            :imgSrc="creditCardIcon"
            title="Pagá como quieras"
            description="Aceptamos Mercadopago, Tarjetas de Crédito y Efectivo"
          />
          <ServiceItem
            :imgSrc="whatsappIcon"
            title="Servicio al cliente"
            description="Comunicación directa vía Whatsapp"
          />
        </div>
      </div>

      <!-- Sección de servicios para dispositivos móviles -->
      <div class="block sm:hidden px-4">
        <Swiper :loop="true" :autoplay="{ delay: 4500, disableOnInteraction: false }" pagination>
          <SwiperSlide>
            <ServiceItem
              :imgSrc="moneyIcon"
              title="Descuento por Pago en efectivo"
              description="Todos los días 10% de descuento por pago en efectivo en el local."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              :imgSrc="creditCardIcon"
              title="Pagá como quieras"
              description="Aceptamos Mercadopago, Tarjetas de Crédito y Efectivo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              :imgSrc="whatsappIcon"
              title="Servicio al cliente"
              description="Comunicación directa vía Whatsapp"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import ServiceItem from './ServiceItem.vue';

import moneyIcon from '../assets/imagen/icons/money.svg';
import creditCardIcon from '../assets/imagen/icons/credit-card.svg';
import whatsappIcon from '../assets/imagen/icons/whatsapp.svg';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceItem
  },
  data() {
    return {
      moneyIcon,
      creditCardIcon,
      whatsappIcon
    };
  }
};
</script>

<style scoped>
/* Estilos para Swiper en móviles */
:deep(.swiper-pagination) {
  position: relative !important;
  margin-top: 1rem;
}

:deep(.swiper-pagination-bullet) {
  background-color: #951d1c !important;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #c42a29 !important;
}
</style>