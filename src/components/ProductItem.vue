<template>
    <div class="product-item border p-3 bg-[#CD1110] rounded-2xl items-center cursor-pointer">
        <img :src="product.image" alt="Imagen del producto" class="product-image">
        <h3 class="font-bold font-notoSansJP text-white text-center">{{ product.name }}</h3>
        <p class="font-semibold text-white mb-2 text-center">{{ product.price }}</p>
        <div class="details__product-quantity">
            <div class="input flex justify-center mb-2">
                <img class="input__minus bg-white" src="../assets/imagen/icons/minus.svg" alt="minus">
                <input class="input__number text-center w-6 font-notoSansJP" type="text" value="0">
                <img class="input__plus bg-white" src="../assets/imagen/icons/plus.svg" alt="plus">
            </div>
            <button class="details__button flex items-center justify-center gap-1 rounded bg-white p-1">
                <img class="w-5 h-5" src="../assets/imagen/icons/shopping-bag-black.svg" alt="Carrito de compras">
                Añadir al carrito
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.product-item {
    /* Estilos para cada producto */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}
</style>