<!-- src/components/MobileFilterSection.vue -->
<template>
  <div class="mr-5 ml-5 mt-5">
    <div class="flex flex-col sm:flex-row sm:items-center">
      <div class="w-full sm:w-auto sm:flex-grow sm:mr-2 mb-2 sm:mb-0">
        <label for="sort" class="block text-left font-notoSansJP font-semibold">Ordenar por:</label>
        <select id="sort" class="js-sort-by sort-by form-control sm:w-2/3 font-notoSansJP rounded">
          <option value="price-ascending">Precio: Menor a Mayor</option>
          <option value="price-descending">Precio: Mayor a Menor</option>
          <option value="alpha-ascending">A - Z</option>
          <option value="alpha-descending">Z - A</option>
          <option value="best-selling">Más Vendidos</option>
          <option value="worst-selling">Menos Vendidos</option>
        </select>
        <button @click="toggleFilter" class="btn btn-primary flex items-center  mt-2 sm:mt-0 ml-4">
          <span class="font-notoSansJP font-black from-neutral-700">FILTRAR</span>
          <img src="../assets/imagen/icons/arrow-right.svg" alt="Filtrar" class="ml-2">
        </button>
      </div>
    </div>

    <div :class="['filter-modal', { open: isFilterOpen }]">
      <div class="filter-content">
        <!-- Aquí va el contenido del modal de filtrado -->
        <button @click="toggleFilter">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  width: 80%;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.5s ease;
  z-index: 60;
  /* Por encima del contenido principal */
  overflow-y: auto;
  /* Asegura que el contenido del filtro sea desplazable */
}

.filter-modal.open {
  right: 0;
}

.filter-content {
  padding: 20px;
  box-sizing: border-box;
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
</style>