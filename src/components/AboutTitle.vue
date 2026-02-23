<template>
    <div class="mr-5 ml-5" id="container">

        <!-- Breadcrumb -->
        <div class="flex items-center justify-center pt-20">
            <div class="flex items-center gap-2">
                <a href="/FrontEnd-Pasteleria/Home" class="text-sm font-notoSansJP text-gray-600 hover:text-[#951d1c] transition-colors">
                    Inicio
                </a>
                <span class="text-gray-400">/</span>
                <span class="text-sm font-medium font-notoSansJP text-[#951d1c]">
                    Nosotros
                </span>
            </div>
        </div>

        <!-- Título principal -->
        <div class="flex flex-col items-center justify-center pt-4">
            <h1 class="text-[#951d1c] font-notoSansJP font-bold relative text-3xl sm:text-4xl">
                <span>NOSOTROS</span>
            </h1>
        </div>

        <!-- Sección Historia -->
    
        <div class="w-full ">
            <div class="bg-white rounded-2xl  p-8 md:p-12 mx-4 sm:mx-8 lg:mx-16 xl:mx-24">
                <div class="flex flex-col md:flex-row gap-8 items-center">
                    <div class="md:w-1/2">
                        <img 
                            src="../assets/imagen/rosca.jpg" 
                            alt="Nuestra Historia"
                            class="rounded-xl shadow-md w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div class="md:w-1/2">
                        <h2 class="text-[#951d1c] font-notoSansJP font-bold text-2xl md:text-3xl mb-4">
                            Nuestra Historia
                        </h2>
                        <p class="font-notoSansJP text-gray-700 text-base md:text-lg leading-relaxed">
                            Con ocho años de experiencia, nuestra pastelería es un oasis para los amantes de los dulces. 
                            Desde deliciosos pasteles hasta tentadores postres, cada producto es una obra maestra de sabor artesanal.
                        </p>
                        <p class="font-notoSansJP text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                            Nuestro ambiente acogedor invita a todos a disfrutar de momentos de indulgencia y placer. 
                            ¡Ven y déjate seducir por nuestra dulce oferta!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    
       <!-- Valores y Compromisos -->
        <div class="bg-gradient-to-br from-[#951d1c]/10 to-[#c42a29]/5 w-full px-4 md:px-8 py-8 md:py-12 mb-16">
            <div class="max-w-7xl mx-auto">
                <h3 class="text-[#951d1c] font-notoSansJP font-bold text-2xl md:text-3xl text-center mb-10">
                    Lo que nos define
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="(value, index) in values" :key="index" 
                        class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                        <div class="w-16 h-16 bg-[#951d1c] rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.icon"></path>
                            </svg>
                        </div>
                        <h4 class="text-[#951d1c] font-notoSansJP font-bold text-lg text-center mb-2">
                            {{ value.title }}
                        </h4>
                        <p class="font-notoSansJP text-gray-700 text-center">
                            {{ value.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tarjetas de Servicio Mejoradas -->
        <div class="max-w-6xl mx-auto mb-16">
            <h3 class="text-[#951d1c] font-notoSansJP font-bold text-2xl md:text-3xl text-center mb-10">
                Nuestros Servicios
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(service, index) in services" :key="index"
                    class="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#951d1c]">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-[#951d1c] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
                            </svg>
                        </div>
                        <div>
                            <h4 class="text-[#951d1c] font-notoSansJP font-bold text-lg mb-2">
                                {{ service.title }}
                            </h4>
                            <p class="font-notoSansJP text-gray-700">
                                {{ service.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
</template>

<script>
export default {
    name: 'AboutTitle',
    data() {
        return {
            galleryImages: [
                {
                    src: '../assets/imagen/rosca.jpg',
                    alt: 'Rosca Artesanal',
                    title: 'Rosca Artesanal',
                    description: 'Hecha con ingredientes premium'
                },
                {
                    src: '../assets/imagen/evento.jpg',
                    alt: 'Eventos Especiales',
                    title: 'Eventos Especiales',
                    description: 'Pasteles para ocasiones únicas'
                },
                {
                    src: '../assets/imagen/postre2.jpg',
                    alt: 'Postres Gourmet',
                    title: 'Postres Gourmet',
                    description: 'Creaciones exclusivas'
                },
                {
                    src: '../assets/imagen/postre.jpg',
                    alt: 'Delicias Variadas',
                    title: 'Delicias Variadas',
                    description: 'Para todos los gustos'
                },
                {
                    src: '../assets/imagen/cookies.jpg',
                    alt: 'Cookies Caseras',
                    title: 'Cookies Caseras',
                    description: 'Recién horneadas diariamente'
                },
                {
                    src: '../assets/imagen/rosca.jpg',
                    alt: 'Más Creaciones',
                    title: 'Más Creaciones',
                    description: 'Descúbrelas todas'
                }
            ],
            values: [
                {
                    title: 'Calidad Artesanal',
                    description: 'Utilizamos solo ingredientes frescos y de primera calidad en todas nuestras preparaciones.',
                    icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6'
                },
                {
                    title: 'Atención Personalizada',
                    description: 'Cada cliente es único y merece una atención especial y dedicada.',
                    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                },
                {
                    title: 'Tradición con Innovación',
                    description: 'Respetamos las recetas tradicionales mientras innovamos con nuevos sabores.',
                    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
                }
            ],
            services: [
                {
                    title: 'Atención al Cliente',
                    description: 'Contamos con una excelente atención al cliente, siempre dispuestos a ayudarte con tu elección perfecta.',
                    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                },
                {
                    title: 'Múltiples Formas de Pago',
                    description: 'Aceptamos Mercado Pago, Tarjetas de Crédito y Débito para tu comodidad.',
                    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                },
                {
                    title: 'Compra Inmediata',
                    description: '¡Productos disponibles en el local para compra inmediata! También hacemos pedidos personalizados.',
                    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                }
            ]
        };
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
    border-bottom: 2px solid #951d1c;
    line-height: 0.1em;
    margin: 10px 0 20px;
    width: 100%;
    position: relative;
}

h1::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: #951d1c;
    border-radius: 2px;
}

h1 span {
    background-color: #fff;
    padding: 0 15px;
    position: relative;
    z-index: 1;
}

/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Hover effects */
.shadow-lg {
    transition: box-shadow 0.3s ease;
}

.shadow-lg:hover {
    box-shadow: 0 20px 40px rgba(149, 29, 28, 0.2);
}
</style>