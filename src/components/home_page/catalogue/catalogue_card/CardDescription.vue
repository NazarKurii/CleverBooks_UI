<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold w-full h-[33px] overflow-clip">{{ title }}</h1>
    <h2 class="text-lg text-orange-600 h-[25px] overflow-clip">{{ author }}</h2>
  </div>
  <div class="flex h-1/4 gap-[10px]">
    <img v-if="accessebility.book" class="border rounded-xl" src="/public/book.jpg" alt="" />
    <img v-if="accessebility.eBook" class="border rounded-xl" src="/public/eBook.jpg" alt="" />
    <img
      v-if="accessebility.audioBook"
      class="border rounded-xl"
      src="/public/audioBook.jpg"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  author: string
  accessebility: {
    eBook: boolean
    book: boolean
    audioBook: boolean
  }
}>()
</script>

<style scoped></style>
