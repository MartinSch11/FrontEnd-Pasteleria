<template>
  <div data-store="banner-services" class="mt-5">
    <!-- Sección de servicios para escritorio -->
    <div class="hidden sm:block container mx-auto px-4 services">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
    <div class="block sm:hidden container mx-auto px-4 mt-5 overflow-hidden">
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