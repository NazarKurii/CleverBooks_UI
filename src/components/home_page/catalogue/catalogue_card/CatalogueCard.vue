<template>
  <div class="flex flex-col bg-white relative w-[390px] items-center h-[500px] rounded-xl p-7">
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

import type { Book } from '@/components/scripts/testCatalogue.ts'

const props = defineProps<{
  book: Book
}>()

provide('id', props.book.id)
</script>

<style scoped></style>
