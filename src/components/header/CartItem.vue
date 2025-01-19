<template>
  <div
    class="flex pl-[20px] relative justify-between h-[120px] p-[10px] rounded-xl w-full background"
  >
    <DeleteCartItemButton :id="item.id" />
    <div class="flex gap-[20px]">
      <CartItemImage :url="item.imageUrl" />
      <CartItemDescription :title="item.title" :author="item.author" />
    </div>
    <CartItemOptions
      :id="item.id"
      :price="item.price"
      :currency="item.currency"
      :amount="item.amount"
    />
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from './cart'
import CartItemDescription from './CartItemDescription.vue'
import CartItemImage from './CartItemImage.vue'
import CartItemOptions from './CartItemOptions.vue'
import DeleteCartItemButton from './DeleteCartItemButton.vue'

defineProps<{
  item: CartItem
}>()
</script>

<style scoped>
.background {
  background-color: rgba(169, 172, 171, 0.212);
}
</style>
