<template>
  <div class="flex items-center justify-between w-full h-[50px]">
    <CardPrice :price="price" />
    <div class="flex gap-[10px]">
      <FavoriteButton :cart="cart" />
      <CartButton :cart="cart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import CardPrice from './CardPrice.vue'
import CartButton from './CartButton.vue'
import FavoriteButton from './FavoriteButton.vue'
import { usePageStore } from '@/stores/pageStore'

defineProps<{
  price: number
}>()

const page = usePageStore()

const id = inject<number>('id')

const cart = computed(() => {
  const item = page.cart.find((cartItem) => cartItem.id == id)
  if (item?.amount) {
    return item.amount
  }
  return 0
})
</script>

<style scoped></style>
