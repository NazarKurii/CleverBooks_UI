<template>
  <button
    @click="page.deleteFromCart(id)"
    class="absolute top-[40px] left-[-20px] h-fit hover:bg-red-500 hover:text-white transition-all duration-200 bg-gray-200 rounded-xl pl-[11px] pb-[1px] pr-[8px]"
  >
    <span class="flex text-3xl rotate-45">+</span>
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
