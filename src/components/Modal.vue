<template>
    <div v-if="isVisible" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-700">&times;</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Aquí puedes añadir estilos adicionales si es necesario */
  </style>