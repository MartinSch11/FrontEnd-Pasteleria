<template>
    <div class="mr-5 ml-5" id="container">

        <div class="flex items-center justify-center pt-20">
            <div>
                <a href="/FrontEnd-Pasteleria/Home" class="text-sm font-notoSansJP">Inicio</a><span> > </span><span
                    class="text-sm font-medium font-notoSansJP">Checkout</span>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center pt-4">
            <h1 class="text-[#951d1c] font-notoSansJP font-bold relative text-3xl sm">
                <span>CHECKOUT</span>
            </h1>
        </div>
    </div>

  <div class="p-6 max-w-6xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Columna izquierda: Formulario -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl text-[#951d1c] mb-6 font-notoSansJP">Información de contacto</h2>

        <form
          action="https://formsubmit.co/lopezzsofia19@gmail.com"
          method="POST"
          class="space-y-6"
        >
          <!-- Nombre -->
          <div>
            <label for="name" class="block text-base mb-2">Nombre completo <span class="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c]"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-base mb-2">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c]"
            />
          </div>

          <!-- Teléfono -->
          <div>
            <label for="phone" class="block text-base mb-2">Teléfono <span class="text-red-500">*</span></label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c]"
              required
            />
          </div>

          <!-- DNI -->
          <div>
            <label for="dni" class="block text-base mb-2">DNI <span class="text-red-500">*</span></label>
            <input
              type="text"
              name="dni"
              id="dni"
              class="w-full p-4 bg-[#FBF5F5] text-[#951d1c] rounded shadow-md focus:outline-none focus:ring-2 focus:ring-[#951d1c]"
              required
            />
          </div>

          <!-- Entrega -->
          <h2 class="text-2xl text-[#951d1c] mt-8 mb-4 font-notoSansJP">Entrega</h2>
          <input type="hidden" name="tipo_entrega" id="tipo_entrega" :value="entregaSeleccionada" />

          <div class="mt-2">
            <div class="flex flex-wrap gap-3">
              <button
                type="button"
                @click="seleccionarEntrega('Retiro en local')"
                :class="{
                  'bg-[#951d1c] text-white': entregaSeleccionada === 'Retiro en local',
                  'bg-white text-[#951d1c] border-2 border-[#951d1c]': entregaSeleccionada !== 'Retiro en local'
                }"
                class="px-5 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#951d1c] hover:text-white"
              >
                Retiro
              </button>

              <button
                type="button"
                @click="seleccionarEntrega('Envío a cargo del cliente')"
                :class="{
                  'bg-[#951d1c] text-white': entregaSeleccionada === 'Envío a cargo del cliente',
                  'bg-white text-[#951d1c] border-2 border-[#951d1c]': entregaSeleccionada !== 'Envío a cargo del cliente'
                }"
                class="px-5 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#951d1c] hover:text-white"
              >
                Envío a cargo del cliente
              </button>
            </div>
          </div>

          <!-- Pago -->
          <h2 class="text-2xl text-[#951d1c] mt-8 mb-4 font-notoSansJP">Opciones de pago</h2>
          <div class="space-y-3">
            <div class="flex items-center">
              <input
                type="radio"
                id="pago_efectivo"
                name="metodo_pago"
                value="Efectivo"
                class="h-5 w-5 text-[#951d1c] focus:ring-[#951d1c]"
                required
              />
              <label for="pago_efectivo" class="ml-2 text-base">Efectivo</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                id="pago_tarjeta"
                name="metodo_pago"
                value="Tarjeta"
                class="h-5 w-5 text-[#951d1c] focus:ring-[#951d1c]"
              />
              <label for="pago_tarjeta" class="ml-2 text-base">Tarjeta de crédito/débito</label>
            </div>
            <div class="flex items-center">
              <input
                type="radio"
                id="pago_mp"
                name="metodo_pago"
                value="Mercado Pago"
                class="h-5 w-5 text-[#951d1c] focus:ring-[#951d1c]"
              />
              <label for="pago_mp" class="ml-2 text-base">Mercado Pago</label>
            </div>
          </div>

          <!-- Resumen del pedido (enviado por email) -->
          <input type="hidden" name="detalle_pedido" :value="detallePedidoEmail" />

          <!-- FormSubmit config -->
          <input type="hidden" name="_next" value="http://localhost/prototipo/contact.php" />
          <input type="hidden" name="_captcha" value="false" />

          <!-- Botón de envío -->
          <div class="flex justify-end mt-8">
            <button
              type="submit"
              :disabled="!entregaSeleccionada"
              class="bg-[#951d1c] text-white w-40 py-3 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <!-- Columna derecha: Detalle del pedido (dinámico) -->
      <div class="bg-[#FBF5F5] p-6 rounded-lg shadow-lg h-fit">
        <h2 class="text-2xl text-[#951d1c] mb-6 font-notoSansJP">Detalle del pedido</h2>

        <div v-if="items.length === 0" class="text-center text-gray-500 py-8">
          <p>No hay productos en tu carrito.</p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex justify-between border-b pb-3"
          >
            <div>
              <h3 class="font-medium text-sm">{{ item.name }}</h3>
              <p class="text-xs text-gray-600">Cantidad: {{ item.quantity }}</p>
            </div>
            <span class="font-semibold text-sm">${{ formatPrice(item.price * item.quantity) }}</span>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-300">
            <div class="flex justify-between text-lg font-bold text-[#951d1c]">
              <span>Total:</span>
              <span>${{ formatPrice(total) }}</span>
            </div>
          </div>
        </div>

        <p class="mt-4 text-xs text-gray-600">
          * El pedido se confirmará una vez recibamos tu pago.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CheckoutSection',
  data() {
    return {
      entregaSeleccionada: null
    };
  },
  computed: {
    ...mapState('cart', ['items']),
    total() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    detallePedidoEmail() {
      if (this.items.length === 0) return 'Carrito vacío';
      return this.items
        .map(item => `${item.name} x${item.quantity} - $${item.price * item.quantity}`)
        .join('\n');
    }
  },
  methods: {
    seleccionarEntrega(opcion) {
      this.entregaSeleccionada = opcion;
    },
    formatPrice(value) {
      return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00', '');
    }
  }
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