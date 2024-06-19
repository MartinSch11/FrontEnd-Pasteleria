<!-- ProductTitle.vue -->

<template>
  <div class="mr-5 ml-5" id="container">

    <div class="flex items-center justify-center pt-20">
      <div>
        <router-link to="/Home" class="text-sm font-notoSansJP">Inicio<span> > </span><span
          class="text-sm font-medium font-notoSansJP">Productos</span></router-link>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center pt-4">
      <h1 class="text-[#CD1110] font-notoSansJP font-bold relative text-3xl sm">
        <span>PRODUCTOS</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTitle'
}
</script>

<style scoped>
h1 {
  text-align: center;
  border-bottom: 1px solid #CD1110;
  line-height: 0.1em;
  margin: 10px 0 20px;
  width: 100%;
}

h1 span {
  background-color: #fff;
  padding: 0 10px;
}
</style>