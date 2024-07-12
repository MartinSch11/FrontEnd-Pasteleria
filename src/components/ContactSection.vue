<template>
    <div class="mr-5 ml-5" id="container">

        <div class="flex items-center justify-center pt-20">
            <div>
                <a href="/FrontEnd-Pasteleria/Home" class="text-sm font-notoSansJP">Inicio</a><span> > </span><span
                    class="text-sm font-medium font-notoSansJP">Contacto</span>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center pt-4">
            <h1 class="text-[#951d1c] font-notoSansJP font-bold relative text-3xl sm">
                <span>CONTACTO</span>
            </h1>
        </div>
    </div>

    <section class="shadow-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-black mt-6 mx-4 font-notoSansJP">
        <div class="w-full h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.501075049317!2d-55.90205982468789!3d-27.391292976365182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be564c586045%3A0x374687711580b99d!2sMonteagudo%201969%2C%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1718606067035!5m2!1ses!2sar"
                class="w-full h-full border-0" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="flex justify-center">
            <div class="m-auto">
                <h2 class="pb-4 text-center text-lg">¡Contactate con nosotros!</h2>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <a
                            class="w-10 h-10  hover:bg-[#951d1c] duration-700  flex items-center justify-center rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </a>
                        <label class="text-base">¡Te esperamos de Lunes a Sábado de 8hs a 20hs!</label>
                    </div>
                    <div class="flex items-center">
                        <a href="#"
                            class="w-10 h-10  hover:bg-[#951d1c] duration-700  flex items-center justify-center rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                        <label class="text-base">disenodesabores@gmail.com</label>
                    </div>
                    <div class="flex items-center">
                        <a href="https://wa.me/+5493764508619"
                            class="w-10 h-10  hover:bg-[#951d1c] duration-700  flex items-center justify-center rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                                class="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5">
                                <path
                                    d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z">
                                </path>
                            </svg>
                        </a>
                        <label class="text-base">3764 - 508619</label>
                    </div>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <a href="https://www.instagram.com/disenosabores.posadas/"
                                class="w-10 h-10 cursor-pointer hover:bg-[#951d1c] duration-700  flex items-center justify-center rounded-full transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                                    class="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5">
                                    <path
                                        d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z">
                                    </path>
                                </svg>
                            </a>
                            <label class="text-base">disenosabores.posadas</label>
                        </div>
                        <div class="flex items-center">
                            <a href="https://www.facebook.com/Dsabores/?locale=es_LA"
                                class="w-10 h-10  hover:bg-[#951d1c] duration-700  flex items-center justify-center rounded-full transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"
                                    class="lg:w-6 lg:h-6 w-4 h-4 md:w-5 md:h-5">
                                    <path
                                        d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z">
                                    </path>
                                </svg>
                            </a>
                            <label class="text-base">Diseño De Sabores Pasteleria</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="p-6 rounded-lg lg:max-w-lg md:max-w-md max-w-xs mx-auto mt-12 shadow-lg">
        <h2 class="text-3xl text-[#951d1c] mb-6">¡Envíe su consulta!
        </h2>
        <form action="https://formsubmit.co/lopezzsofia19@gmail.com" method="POST" class="space-y-6">
            <div>
                <label for="name" class="block text-base mb-2">Nombre</label>
                <input type="text" name="name" id="name"
                    class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c] ">
            </div>
            <div>
                <label for="email" class="block text-base mb-2">Correo electrónico</label>
                <input type="email" name="email" id="email"
                    class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c] ">
            </div>
            <div>
                <label for="subject" class="block text-base mb-2">Asunto</label>
                <input type="text" name="subject" id="subject"
                    class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c] ">
            </div>
            <div>
                <label for="question" class="block text-base mb-2">Consulta</label>
                <textarea name="question" id="question" cols="30" rows="5"
                    class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c]"></textarea>
            </div>
            <div class="flex justify-end">
                <input type="hidden" name="_next" value="http://localhost/prototipo/contact.php">
                <input type="hidden" name="_captcha" value="false">
                <input type="submit" value="Enviar"
                    class="bg-[#951d1c] text-white w-40 py-3 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 hover:bg-white hover:text-[#951d1c] hover:border-[#951d1c] border-2 border-transparent">

            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactSection',
};
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