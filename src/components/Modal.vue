<template>
  <div v-if="isVisible" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-60" @click.self="closeModal">
      <slot></slot>
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