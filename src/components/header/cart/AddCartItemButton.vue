<template>
  <button
    @click="page.addToCart(book)"
    class="flex bg-gray-300 active:scale-90 text-4xl w-[40px] text-gray-500 transition-all hover:bg-green-500 hover:text-white duration-200 h-[40px] items-center pb-[2px] rounded-xl justify-center"
  >
    +
  </button>
</template>

<script setup lang="ts">
import type { Book } from '@/components/scripts/catalogue'
import { usePageStore } from '@/stores/pageStore'

defineProps<{
  book: Book
}>()

const page = usePageStore()
</script>

<style scoped></style>
