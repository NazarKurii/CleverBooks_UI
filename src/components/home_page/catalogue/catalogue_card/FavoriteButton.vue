<template>
  <button v-if="!book?.cart" class="flex size-[50px] active:scale-90 transition-all duration-200">
    <img
      @click="
        () => {
          if (!page.userRegistered) {
            page.togleLoginForm()
          } else if (book) {
            page.togleFavorite(book)
          }
        }
      "
      v-if="!book?.favorite"
      src="/public/like-1.svg"
      alt=""
    />
    <img
      @click="
        () => {
          if (!page.userRegistered) {
            page.togleLoginForm()
          } else if (book) {
            page.togleFavorite(book)
          }
        }
      "
      v-if="book?.favorite"
      src="/public/like-2.svg"
      alt=""
    />
  </button>
</template>

<script setup lang="ts">
import { type Book } from '@/components/scripts/catalogue'

import { usePageStore } from '@/stores/pageStore'
import { inject } from 'vue'
const book = inject<Book>('book')

const page = usePageStore()
</script>

<style scoped></style>
