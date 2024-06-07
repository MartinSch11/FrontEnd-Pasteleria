<!-- src/components/ServiceItem.vue -->
<template>
  <div class="service-item-container text-center p-4 border rounded-lg">
    <div class="service-item flex items-center justify-center">
      <div class="text-center">
        <div class="flex items-center justify-center">
          <span class="mr-1">
            <img :src="imgSrc" :alt="title">
          </span>
          <h3 class="service-title text-base font-semibold uppercase tracking-wide mr-2">
            {{ title }}
          </h3>
        </div>
        <p class="service-text text-sm mt-2">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>