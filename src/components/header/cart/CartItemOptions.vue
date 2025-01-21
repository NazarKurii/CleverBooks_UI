<template>
  <div class="flex gap-[20px] items-center">
    <div class="flex size-fit items-end gap-[5px]">
      <span class="font-bold text-xl">{{ (book.price * book.cart).toFixed(2) }}</span>
      <span class="text-sm font-bold">$</span>
    </div>
    <div class="flex w-[130px] justify-between">
      <RemoveCartItemButon :id="book.id" />
      <span class="text-2xl my-auto font-semibold">{{ book.cart }}</span>
      <AddCartItemButton :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/components/scripts/catalogue'
import AddCartItemButton from './AddCartItemButton.vue'
import RemoveCartItemButon from './RemoveCartItemButon.vue'

defineProps<{
  book: Book
}>()
</script>

<style scoped></style>
