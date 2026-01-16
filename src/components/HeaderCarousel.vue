<!-- src/components/HeaderCarousel.vue -->
<template>
  <section class="relative w-screen h-screen overflow-hidden">
    <!-- Carrusel de fondo (z-0) -->
    <swiper
      class="absolute inset-0 z-0 h-full w-full"
      :modules="[Autoplay, Pagination]"
      :loop="true"
      :autoplay="{ delay: 4500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(img, index) in images" :key="index">
        <div class="w-full h-full overflow-hidden">
          <img
            :src="img"
            :alt="`Postre ${index + 1}`"
            class="w-full h-full object-cover scale-110"
          />
        </div>
      </swiper-slide>
    </swiper>

    <!-- Capa oscura intensa SOBRE las imágenes, DEBAJO del texto -->
    <div class="absolute inset-0 z-5 bg-black/70"></div>

    <!-- Texto (z-10, encima de todo) -->
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
      <h1
        class="font-dynalight text-6xl md:text-8xl lg:text-9xl font-light text-yellow-300 drop-shadow-lg"
        style="font-family: 'Dynalight', cursive;"
      >
        Diseño de Sabores
      </h1>
      <h2 class="font-robotoSlab text-2xl md:text-3xl lg:text-4xl mt-4 text-white drop-shadow-md">
        Pastelería
      </h2>
      <h3 class="text-lg md:text-xl mt-4 max-w-2xl text-white drop-shadow-sm">
        ¡Haz tus momentos especiales aún más dulces!
      </h3>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
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
    const images = [
      new URL('../assets/imagen/DSC_0132(1).jpg', import.meta.url).href,
      new URL('../assets/imagen/DSC_0158.jpg', import.meta.url).href,
      new URL('../assets/imagen/DSC_0011.jpg', import.meta.url).href
    ];

    return {
      images,
      Autoplay,
      Pagination
    };
  }
};
</script>

<style scoped>
/* El contenedor ya usa h-screen, así que no necesitamos una clase extra */
.swiper-slide img {
  transition: transform 0.5s ease;
}
/* Opcional: zoom out suave para dar sensación de distancia */
.swiper-slide-active img {
  transform: scale(1.05);
}
</style>