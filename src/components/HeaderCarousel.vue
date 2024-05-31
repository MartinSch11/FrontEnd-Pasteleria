<template>
  <section class="relative w-screen text-center overflow-hidden text-white fixed-height">
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center">
      <h1 class="font-windSong text-7xl">Diseño de Sabores</h1>
      <h2 class="font-robotoSlab text-4xl">Pastelería</h2>
      <h3 class="text-xl">¡Haz tus momentos especiales aún más dulces!</h3>
    </div>
    <swiper
      class="swiper-container absolute inset-0 z-0"
      :modules="[Autoplay, Pagination]"
      :loop="true"
      :autoplay="{ delay: 4500, disableOnInteraction: false }"
      pagination
    >
      <swiper-slide>
        <img src="../assets/imagen/postre.jpg" alt="Postre 1" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/imagen/presentacion.jpg" alt="Postre 2" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/imagen/pandulce.jpg" alt="Postre 3" />
      </swiper-slide>
      </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const swiper = useSwiper();
    return {
      swiper,
      Autoplay,
      Pagination
    };
  }
};
</script>

<style scoped>
.fixed-height {
  height: 500px; /* Ajusta esta altura a tus necesidades */
  position: relative;
}

.swiper-container {
  height: 100%;
  overflow: hidden; /* Oculta cualquier contenido que se desborde del contenedor */
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>