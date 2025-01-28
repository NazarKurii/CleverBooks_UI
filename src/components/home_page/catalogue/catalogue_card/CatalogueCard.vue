<template>
  <div
    class="flex flex-col bg-white relative card-container max-w-[450px] items-center h-[530px] rounded-xl p-7"
  >
    <IsNew :is-new="book.isNew" />
    <CardPhoto :image-u-r-l="book.imageURL" />
    <div class="flex w-full h-1/2 pt-[25px] flex-col gap-4">
      <CardDescription
        :author="book.author"
        :title="book.title"
        :accessebility="{
          eBook: book.eBook,
          audioBook: book.audioBook,
          book: book.book,
        }"
      />
      <CardOptions :price="book.price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import CardDescription from './CardDescription.vue'
import CardOptions from './CardOptions.vue'
import CardPhoto from './CardPhoto.vue'
import IsNew from './IsNew.vue'

import type { Book } from '@/components/scripts/catalogue'

const props = defineProps<{
  book: Book
}>()

provide('book', props.book)
</script>

<style scoped>
.card-container {
  width: 390px;
}

@media (max-width: 1261px) {
  .card-container {
    width: 100%;
  }
}
</style>
