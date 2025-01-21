<template>
  <button
    @click="
      () => {
        if (book) {
          page.addToCart(book)
        }
      }
    "
    :class="{
      'w-[70px]': !book?.cart,
      'w-[50px]': book?.cart,
      'active:scale-90': book?.cart,
    }"
    class="flex bg-green-200 text-4xl text-green-500 transition-all hover:bg-green-500 hover:text-white duration-200 h-[50px] items-center pb-[2px] rounded-xl justify-center"
  >
    +
  </button>
</template>

<script setup lang="ts">
import type { Book } from '@/components/scripts/catalogue'
import { usePageStore } from '@/stores/pageStore'

import { inject } from 'vue'

const book = inject<Book>('book')
const page = usePageStore()
</script>

<style scoped></style>
