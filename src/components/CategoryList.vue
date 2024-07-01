<template>
  <div class="inline-block font-notoSansJP m-2 md:flex md:flex-wrap">
    <span class="lg:hidden text-lg font-bold mb-2">FILTRAR POR:</span>
    <div>
      <h3 class="font-semibold text-lg mb-3 hidden sm:block md:hidden">FILTROS</h3>
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
  methods: {}
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
</style>