<template>
  <div
    :class="{
      'w-[150px]': book?.cart,
    }"
    class="flex justify-between"
  >
    <RemoveFromCartButton />
    <span v-if="book ? book.cart > 0 : false" class="text-2xl my-auto font-semibold">{{
      book?.cart
    }}</span>
    <AddToCartButton />
  </div>
</template>

<script setup lang="ts">
import type { Book } from '@/components/scripts/catalogue'
import AddToCartButton from './AddToCartButton.vue'
import RemoveFromCartButton from './RemoveFromCartButton.vue'

import { inject } from 'vue'

const book = inject<Book>('book')
</script>

<style scoped></style>
