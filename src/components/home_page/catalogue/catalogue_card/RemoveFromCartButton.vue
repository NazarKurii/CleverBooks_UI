<template>
  <button
    v-if="book?.cart"
    @click="
      () => {
        if (book) {
          page.removeFromCart(book.id)
        }
      }
    "
    class="flex bg-green-200 text-4xl text-green-500 w-[50px] hover:bg-green-500 hover:text-white active:scale-90 transition-all duration-200 h-[50px] items-center pb-[8px] rounded-xl justify-center"
  >
    -
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
