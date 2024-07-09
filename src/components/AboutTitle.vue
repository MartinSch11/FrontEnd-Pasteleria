<template>
    <div class="mr-5 ml-5" id="container">

<div class="flex items-center justify-center pt-20">
    <div>
        <a href="/FrontEnd-Pasteleria/Home" class="text-sm font-notoSansJP">Inicio</a><span> > </span><span
            class="text-sm font-medium font-notoSansJP">Nosotros</span>
    </div>
</div>

<div class="flex flex-col items-center justify-center pt-4">
    <h1 class="text-[#951d1c] font-notoSansJP font-bold relative text-3xl sm">
        <span>NOSOTROS</span>
    </h1>
</div>
</div>

    <div class="mt-4 mx-4 lg:mt-10 lg:mx-20 md:mt-10 md:mx-20 text-justify text-xl">
        <h2 class="font-notoSansJP text-center">
            Con cinco años de experiencia, nuestra pastelería es un oasis para los amantes de los dulces. Desde
            deliciosos pasteles hasta tentadores postres, cada producto es una obra maestra de sabor artesanal. Nuestro
            ambiente acogedor invita a todos a disfrutar de momentos de indulgencia y placer.
        </h2>
        <h2 class="font-notoSansJP text-center">
            ¡Ven y déjate seducir por nuestra dulce oferta!
        </h2>
    </div>

    <div class="flex justify-center gap-4 mt-10 mb-5">
        <div id="image-container" class="grid grid-cols-3 grid-rows-2 gap-4 w-5/6 max-w-2xl max-h-96 mx-auto">
            <div class="flex items-center justify-center col-span-1 row-span-1">
                <img src="../assets/imagen/rosca.jpg" alt="Rosca" class="object-cover w-full h-full">
            </div>
            <div class="flex items-center justify-center col-span-1 row-span-2">
                <img src="../assets/imagen/evento.jpg" alt="Evento" class="object-cover w-full h-full">
            </div>
            <div class="flex items-center justify-center col-span-1 row-span-1">
                <img src="../assets/imagen/postre2.jpg" alt="Postre2" class="object-cover w-full h-full">
            </div>
            <div class="flex items-center justify-center col-span-1 row-span-1">
                <img src="../assets/imagen/postre.jpg" alt="Postre" class="object-cover w-full h-full">
            </div>
            <div class="flex items-center justify-center col-span-1 row-span-1">
                <img src="../assets/imagen/cookies.jpg" alt="Cookies" class="object-cover w-full h-full">
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-10 mb-10">
        <div class="flex flex-wrap justify-center text-center">
            <div class="bg-[#951d1c] text-white p-4 mx-2 mb-2 max-w-xs md:max-w-none md:mx-4 md:mb-4 w-40">
                <p>Contamos con una excelente atención al cliente</p>
            </div>
            <div class="bg-[#951d1c] text-white p-4 mx-2 mb-2 max-w-xs md:max-w-none md:mx-4 md:mb-4 w-40">
                <p>Aceptamos Mercado Pago, Tarjetas de Crédito y Débito</p>
            </div>
            <div class="bg-[#951d1c] text-white p-4 mx-2 mb-2 max-w-xs md:max-w-none md:mx-4 md:mb-4 w-40">
                <p>¡Productos disponibles en el local para compra inmediata!</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'AboutTitle',
}
</script>

<style scoped>
h1 {
    text-align: center;
    border-bottom: 1px solid #951d1c;
    line-height: 0.1em;
    margin: 10px 0 20px;
    width: 100%;
}

h1 span {
    background-color: #fff;
    padding: 0 10px;
}
</style>