<template>
  <div
    class="flex pl-[20px] relative justify-between h-[120px] p-[10px] rounded-xl w-full background"
  >
    <DeleteCartItemButton :id="item.id" />
    <div class="flex gap-[20px]">
      <CartItemImage :url="item.imageURL" />
      <CartItemDescription :title="item.title" :author="item.author" />
    </div>
    <CartItemOptions :book="item" />
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/components/scripts/catalogue'
import CartItemOptions from './CartItemOptions.vue'
import CartItemDescription from './CartItemDescription.vue'
import CartItemImage from './CartItemImage.vue'
import DeleteCartItemButton from './DeleteCartItemButton.vue'

defineProps<{
  item: Book
}>()
</script>

<style scoped>
.background {
  background-color: rgba(169, 172, 171, 0.212);
}
</style>
