<template>
  <div class="mr-5 ml-5 mt-5 relative">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center">
      <div class="w-full sm:w-auto sm:flex-grow mb-2 sm:mb-0 sm:flex sm:justify-center items-center">
        <label for="sort" class="block text-left font-notoSansJP font-semibold sm:mr-2">Ordenar por:</label>
        <div class="flex items-center w-full sm:w-auto">
          <select id="sort"
                  class="js-sort-by sort-by form-control sm:w-2/3 lg:w-full border-2 border-gray-200 px-2 py-1 font-notoSansJP font-normal text-slate-600">
            <option value="price-ascending">Precio: Menor a Mayor</option>
            <option value="price-descending">Precio: Mayor a Menor</option>
            <option value="alpha-ascending">A - Z</option>
            <option value="alpha-descending">Z - A</option>
            <option value="best-selling">Más Vendidos</option>
            <option value="worst-selling">Menos Vendidos</option>
          </select>
          <div class="ml-2 lg:hidden">
            <button @click="toggleFilter" class="btn btn-primary flex items-center ml-2">
              <span class="font-notoSansJP font-black text-neutral-700">FILTRAR</span>
              <img src="../assets/imagen/icons/arrow-right.svg" alt="Filtrar" class="ml-2">
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Overlay para oscurecer el fondo -->
    <div class="filter-overlay" @click="toggleFilter" v-show="isFilterOpen"></div>
    <!-- Modal de filtros -->
    <div :class="['filter-modal', { open: isFilterOpen }]">
      <div class="filter-content">
        <button @click="toggleFilter"><img src="../assets/imagen/icons/arrow-right.svg" alt="" srcset=""></button>
        <!-- Contenido de los filtros -->
        <CategoryList />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryList from './CategoryList.vue';

export default {
  components: {
    CategoryList
  },
  data() {
    return {
      isFilterOpen: false
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen;
    }
  }
}
</script>

<style scoped>
.filter-modal {
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 60;
  overflow-y: auto;
  transition: right 0.5s ease;
}

.filter-modal.open {
  right: 0;
}

.filter-content {
  padding: 20px;
  box-sizing: border-box;
}

.filter-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 55;
  display: block;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn img {
  width: 16px;
  height: auto;
}

@media (min-width: 768px) {
  .filter-modal {
    width: 45%; /* 1/3 del ancho */
  }
}

@media (max-width: 767px) {
  .filter-modal {
    width: 65%; /* 1/3 del ancho */
  }
}
</style>
