<template>
  <div class="inline-block font-notoSansJP m-2">
    <span class="lg:hidden text-lg font-bold mb-2">FILTRAR POR:</span>
    <div>
      <h3 class="font-semibold text-lg mb-3 hidden sm:block md:block">FILTROS</h3>
      <div class="flex flex-wrap items-center mb-4">
        <h4 class="font-semibold text-m mb-3 mr-2">Categorias</h4>
        <ul class="m-2 flex flex-wrap">
          <li
            class="category-item-desktop transition ease-in-out delay-150 hover:scale-110 hover:border-black duration-300 border-t-2 border-r-2 border-b-4 border-l-2 cursor-pointer m-2"
            v-for="(category, index) in categories" :key="index">
            {{ category }}
          </li>
        </ul>
      </div>

      <form @submit.prevent="applyPriceFilter">
        <div class="font-medium mb-2">Precio</div>

        <div class="flex mb-2">
          <div class="filter-input-price-container">
            <label class="form-label">Desde</label>
            <input type="number" v-model.number="minPrice" class="form-control filter-input-price" placeholder="Min">
          </div>

          <div class="filter-input-price-container ml-2">
            <label class="form-label">Hasta</label>
            <input type="number" v-model.number="maxPrice" class="form-control filter-input-price" placeholder="Max">
          </div>
        </div>

        <button type="submit" :disabled="!isValidPriceRange" class="btn btn-secondary btn-circle btn-small btn-icon chevron" :class="{ 'disabled': !isValidPriceRange }">Aplicar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [
        'Tortas', 'Tartas', 'Budines', 'Alfajores',
        'Cookies', '¡Adorná tu postre!', '¡Armá tu desayuno!'
      ],
      minPrice: null,
      maxPrice: null
    };
  },
  computed: {
    isValidPriceRange() {
      return (this.minPrice !== null && this.maxPrice !== null && this.minPrice <= this.maxPrice);
    }
  },
  methods: {
    applyPriceFilter() {
      // Aquí puedes agregar la lógica específica para aplicar el filtro por precio
      // Por ejemplo, podrías emitir un evento para que el componente padre maneje el filtro
      if (this.isValidPriceRange) {
        this.$emit('apply-price-filter', { minPrice: this.minPrice, maxPrice: this.maxPrice });
        // También podrías realizar alguna otra acción aquí, como actualizar una lista filtrada, etc.
        console.log('Filtrando por precio', this.minPrice, this.maxPrice);
      }
    }
  }
};
</script>

<style scoped>
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

.filter-input-price {
  padding: 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 80px; /* Ajusta el ancho según sea necesario */
}

.btn {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.btn.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media (min-width: 640px) {
  .category-item-desktop {
    min-width: auto;
    /* Ajusta el ancho mínimo según sea necesario */
  }
}
</style>