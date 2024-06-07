<!-- src/components/MobileFilterSection.vue -->

<template>
<div class="row category-controls m-bottom-xs p-bottom-half-xs">
      <div class="col-xs-8 col-sm-7 text-right text-left-xs sort-by-container">
        <label for="sort">Ordenar por:</label>
        <select id="sort" class="js-sort-by sort-by form-control full-width-xs">
          <option value="price-ascending">Precio: Menor a Mayor</option>
          <option value="price-descending">Precio: Mayor a Menor</option>
          <option value="alpha-ascending">A - Z</option>
          <option value="alpha-descending">Z - A</option>
          <option value="best-selling" selected>Más Vendidos</option>
          <option value="worst-selling" selected>Menos Vendidos</option>
        </select>
      </div>
      <a href="#"
        class="js-toggle-mobile-filters js-fullscreen-modal-open visible-xs col-xs-4 m-top p-top-half p-left-none text-right btn-link-secondary"
        data-modal-url="modal-fullscreen-filters" data-component="filter-button">
        <span>Filtrar <img src="../assets/imagen/icons/arrow-right.svg" alt="" srcset=""></span>
      </a>
    </div>
</template>

<script>
</script>

<style>
</style>