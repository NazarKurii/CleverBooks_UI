<template>
  <div class="flex items-center mt-auto justify-between w-full h-[50px]">
    <CardPrice :price="price" />
    <div class="flex gap-[10px]">
      <FavoriteButton />
      <CartButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardPrice from './CardPrice.vue'
import CartButton from './CartButton.vue'
import FavoriteButton from './FavoriteButton.vue'

defineProps<{
  price: number
}>()
</script>

<style scoped></style>
