<template>
    <div class="m-10 flex justify-center items-center">
        <swiper class="swiper-container relative z-10 w-full" :modules="[Autoplay, Pagination]" :loop="true"
            :autoplay="{ delay: 6000, disableOnInteraction: false }">
            <swiper-slide class="flex justify-center items-center">
                <img src="../assets/imagen/HommeBanner.png" alt="Banner 1" class="w-full lg:w-2/3 lg:h-auto  ">
            </swiper-slide>
            <swiper-slide class="flex justify-center items-center">
                <img src="../assets/imagen/HommeBanner2.png" alt="Banner 2" class="w-full lg:w-2/3 lg:h-auto">
            </swiper-slide>
        </swiper>
    </div>

    <div class="flex justify-center items-center lg:space-x-16 space-x-2 mt-20 mb-20">
        <div>
            <img src="../assets/imagen/tarteletafrutossecos.jpg" alt="Tarteleta de Frutos Secos"
                class="lg:w-52 lg:h-52 object-cover w-24 h-24 md:w-44 md:h-44">
        </div>
        <div>
            <img src="../assets/imagen/brownie.jpg" alt="Brownie" class="lg:w-52 lg:h-52 object-cover w-24 h-24 md:w-44 md:h-44">
        </div>
        <div>
            <img src="../assets/imagen/postre2.jpg" alt="Postre" class="lg:w-52 lg:h-52 object-cover w-24 h-24 md:w-44 md:h-44">
        </div>
        <div>
            <img src="../assets/imagen/cookies.jpg" alt="Cookies" class="lg:w-52 lg:h-52 object-cover w-24 h-24 md:w-44 md:h-44">
        </div>
    </div>

    <div class="bg-[#951d1c] text-center items-center lg:m-40 lg:p-10 m-10 p-5">
        <p class="text-[#FAF298] font-notoSansJP lg:text-3xl text-lg font-semibold">NUESTROS PRODUCTOS SON <br>DE ELABORACIÓN PROPIA</p>
    </div>

    <div class="mt-40">
        <img src="../assets/imagen/HommeBanner3.png" alt="Banner 3" class="w-full">
    </div>
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

<style>
/* Ajustes adicionales para el diseño */
</style>
