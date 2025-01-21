<template>
  <button
    @click="page.removeFromCart(id)"
    class="flex bg-gray-300 text-4xl text-gray-500 w-[40px] hover:bg-green-500 hover:text-white active:scale-90 transition-all duration-200 h-[40px] items-center pb-[8px] rounded-xl justify-center"
  >
    -
  </button>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

defineProps<{
  id: number
}>()

const page = usePageStore()
</script>

<style scoped></style>
