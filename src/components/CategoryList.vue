<!--src/components/CategoryList.vue-->
<template>
  <div class="flex flex-col justify-left font-notoSansJP m-2">
    <span class="lg:hidden text-lg font-bold mb-2">FILTRAR POR:</span>
    <h3 class="font-semibold text-xl mb-3">CATEGORÍAS</h3>
    <ul class="m-2 cursor-pointer list-disc pl-5 space-y-2">
      <li class="hover:text-[#CD1110] transition duration-200">Tortas</li>
      <li class="hover:text-[#CD1110] transition duration-200">Tartas</li>
      <li class="hover:text-[#CD1110] transition duration-200">Budines</li>
      <li class="hover:text-[#CD1110] transition duration-200">Alfajores</li>
      <li class="hover:text-[#CD1110] transition duration-200">Cookies</li>
      <li class="hover:text-[#CD1110] transition duration-200">¡Adorná tu postre!</li>
      <li class="hover:text-[#CD1110] transition duration-200">¡Armá tu desayuno!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryList'
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>