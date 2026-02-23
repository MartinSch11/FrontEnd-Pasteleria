<template>
  <div class="inline-block font-notoSansJP m-2 md:flex md:flex-wrap">
    <span class="lg:hidden text-lg font-bold mb-2">FILTRAR POR:</span>
    <div>
      <h3 class="font-semibold text-lg mb-3 hidden sm:block md:hidden">FILTROS</h3>
      
      <div class="flex flex-wrap items-center mb-4">
        <h4 class="font-semibold text-m mb-3 mr-2">Categorias</h4>
        
        <div v-if="loading" class="text-sm text-gray-500 m-2">Cargando...</div>

        <ul v-else class="m-2 flex flex-wrap">
          <li class="category-item-desktop cursor-pointer m-2 border-2 hover:bg-gray-100"
              @click="seleccionarCategoria(null)">
             Todas
          </li>

          <li
            class="category-item-desktop transition ease-in-out delay-150 hover:scale-110 hover:border-black duration-300 border-t-2 border-r-2 border-b-4 border-l-2 cursor-pointer m-2"
            v-for="category in categories" 
            :key="category.id"
            @click="seleccionarCategoria(category)">
            
            {{ category.nombre }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'; // Importamos el servicio

export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [], // Empieza vacío
      loading: true,
      minPrice: null,
      maxPrice: null
    };
  },
  async mounted() {
    try {
      // Pedimos las categorías a Java
      const response = await api.getCategorias();
      this.categories = response.data;
    } catch (error) {
      console.error("Error cargando categorías:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    seleccionarCategoria(categoria) {
      // Acá a futuro emitimos al padre para filtrar los productos
      console.log("Categoría seleccionada:", categoria ? categoria.nombre : 'Todas');
      this.$emit('filter-category', categoria ? categoria.id : null);
    }
  }
};
</script>

<style scoped>
/* Tus estilos se mantienen igual */
.category-item-desktop {
  position: relative;
  display: inline-block;
  min-width: 40px;
  padding: 8px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  outline: 0;
  border-radius: 6px;
  transition: all 0.4s ease;
}
</style>