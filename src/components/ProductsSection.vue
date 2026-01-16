<template>
  <div class="container mx-auto p-5 relative">
    
    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
      
      <div class="hidden lg:block">
        <CategoryList @filter-category="filtrarPorCategoria" />
      </div>

      <div class="col-span-1 sm:col-span-2 lg:col-span-4">
        
        <div v-if="loading" class="text-center py-10 text-xl font-bold text-gray-500">
          Cargando delicias... 🧁
        </div>

        <div v-else class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div v-if="productosFiltrados.length === 0" class="col-span-full text-center py-10 text-gray-500">
            No encontramos productos en esta categoría 🥲
          </div>

          <ProductItem 
            v-for="product in productosFiltrados" 
            :key="product.id" 
            :product="product" 
            @add-to-cart="agregarAlCarrito" 
          />
        </div>
      </div>
    </div>

    <div v-if="carrito.length > 0" 
         class="fixed bottom-5 right-5 bg-red-700 text-white p-4 rounded-full shadow-lg cursor-pointer z-50 flex items-center gap-2 hover:scale-105 transition"
         @click="mostrarCarrito = true">
      <span>🛒</span>
      <span class="font-bold">{{ cantidadItemsCarrito }} items</span>
    </div>

    <div v-if="mostrarCarrito" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div class="bg-white w-full max-w-md h-full p-6 shadow-xl overflow-y-auto flex flex-col animate-slide-in">
        
        <div class="flex justify-between items-center mb-6 border-b pb-2">
          <h2 class="text-2xl font-bold text-red-800">Tu Pedido</h2>
          <button @click="mostrarCarrito = false" class="text-2xl font-bold">&times;</button>
        </div>

        <div class="flex-1 overflow-y-auto">
          <div v-if="carrito.length === 0" class="text-center text-gray-500">El carrito está vacío.</div>
          <div v-for="(item, index) in carrito" :key="index" class="flex justify-between items-center mb-4 border-b pb-2">
            <div>
              <p class="font-bold">{{ item.nombre }}</p>
              <p class="text-sm text-gray-500">{{ item.cantidad }} x ${{ item.precio }}</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-bold text-green-700">${{ item.cantidad * item.precio }}</span>
              <button @click="eliminarDelCarrito(index)" class="text-red-500 font-bold hover:text-red-700 px-2">X</button>
            </div>
          </div>
        </div>

        <div class="mt-4 border-t pt-4">
          <div class="flex justify-between text-xl font-bold mb-4">
            <span>Total:</span>
            <span>${{ totalPedido }}</span>
          </div>

          <div class="space-y-3">
            <input v-model="clienteDni" type="text" placeholder="Tu DNI (Ej: 99)" class="w-full border p-2 rounded">
            <select v-model="formaEntrega" class="w-full border p-2 rounded">
              <option value="DELIVERY">Envío a Domicilio</option>
              <option value="TAKE_AWAY">Retiro en Local</option>
            </select>
            
            <button 
              @click="enviarPedido" 
              class="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition disabled:opacity-50"
              :disabled="carrito.length === 0">
              CONFIRMAR COMPRA ✅
            </button>
          </div>
        </div>

      </div>
    </div>

    <div :class="['filter-modal', { open: isFilterOpen }]">
      <div class="filter-content bg-white h-full shadow-lg relative">
        <button @click="toggleFilter" class="absolute top-4 right-4 text-2xl font-bold text-gray-600">✕</button>
        
        <h3 class="text-xl font-bold mb-4 p-4 border-b">Filtros</h3>
        <CategoryList @filter-category="filtrarPorCategoria" />
      </div>
    </div>

  </div>
</template>

<script>
import CategoryList from './CategoryList.vue';
import ProductItem from './ProductItem.vue';
import api from '../services/api';

// Importar imágenes
import brownieImage from '../assets/imagen/brownie.jpg';
import rogelImage from '../assets/imagen/rogel.jpg';
import cookiesImage from '../assets/imagen/DSC_0132(1).jpg';
import roscaImage from '../assets/imagen/rosca.jpg';

export default {
  name: 'ProductsSection',
  components: {
    CategoryList,
    ProductItem,
  },
  data() {
    return {
      loading: true,
      isFilterOpen: false,
      mostrarCarrito: false,
      
      // Estado de Datos
      products: [],        // Todos los productos (Raw Data)
      categoriaActiva: null, // ID de la categoría seleccionada (null = todas)
      
      carrito: [],
      
      // Formulario Checkout
      clienteDni: '99',
      formaEntrega: 'DELIVERY'
    };
  },
  computed: {
    // LÓGICA DE FILTRADO
    productosFiltrados() {
      if (!this.categoriaActiva) {
        return this.products; // Si no hay filtro, devolvemos todo
      }
      // Filtramos por ID de categoría (que debe venir de Java)
      return this.products.filter(p => p.idCategoria === this.categoriaActiva);
    },
    
    // Totales del carrito
    totalPedido() {
      return this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    },
    cantidadItemsCarrito() {
      return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
    }
  },
  async mounted() {
    try {
      const response = await api.getProductos();
      // Filtramos solo productos vendibles (con precio > 0)
      this.products = response.data.filter(p => p.precio && p.precio > 0);
    } catch (error) {
      console.error("Error API:", error);
      alert("No se pudo conectar con el servidor 😢");
    } finally {
      this.loading = false;
    }
  },
  methods: {
    // --- LÓGICA DE FILTROS ---
    filtrarPorCategoria(idCategoria) {
      console.log("Filtrando por categoría ID:", idCategoria);
      this.categoriaActiva = idCategoria;
      this.isFilterOpen = false; // Cerramos el menú móvil si estaba abierto
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    },

    // --- LÓGICA DE CARRITO ---
    agregarAlCarrito(producto) {
      // Buscamos si ya existe por ID
      const existente = this.carrito.find(item => item.id === producto.id);
      
      // Obtenemos la cantidad que viene del evento (o 1 por defecto)
      const cantidadAAgregar = producto.cantidad || 1;

      if (existente) {
        existente.cantidad += cantidadAAgregar;
      } else {
        // Guardamos una copia limpia del producto
        this.carrito.push({ 
          id: producto.id,
          nombre: producto.nombre || producto.name,
          precio: producto.precio || producto.price,
          cantidad: cantidadAAgregar
        });
      }
      // Opcional: Feedback visual (Toast o abrir carrito)
      // this.mostrarCarrito = true; 
    },
    eliminarDelCarrito(index) {
      this.carrito.splice(index, 1);
    },

    // --- ENVIAR A JAVA ---
    async enviarPedido() {
      if (!this.clienteDni) {
        alert("Por favor ingresá tu DNI");
        return;
      }

      const pedidoPayload = {
        cliente: { dni: this.clienteDni },
        empleadoAsignado: null,
        formaEntrega: this.formaEntrega,
        fechaEntrega: new Date().toISOString().split('T')[0],
        estadoPedido: "PENDIENTE_WEB",
        totalPedido: this.totalPedido,
        pedidoProductos: this.carrito.map(item => ({
          producto: { id: item.id },
          cantidad: item.cantidad
        }))
      };

      try {
        const res = await api.crearPedido(pedidoPayload);
        alert(`¡Pedido Enviado con Éxito! 🎉\nN° de Orden: ${res.data.numeroPedido}`);
        this.carrito = [];
        this.mostrarCarrito = false;
      } catch (error) {
        console.error(error);
        alert("Hubo un error al procesar el pedido. Verificá la conexión.");
      }
    }
  }
}
</script>

<style scoped>
/* Estilos para el modal móvil */
.filter-modal {
  position: fixed; top: 0; right: -100%; width: 80%; height: 100%;
  background-color: white; box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out; z-index: 60;
}
.filter-modal.open { right: 0; }

/* Animación simple para el carrito */
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}
.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}
</style>