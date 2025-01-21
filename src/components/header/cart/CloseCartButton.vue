<template>
  <button
    @click="page.togleCart"
    class="absolute right-[0px] top-[0px] hover:bg-gray-300 bg-gray-200 rounded-xl pl-[11px] pb-[1px] pr-[8px]"
  >
    <span class="flex text-3xl rotate-45">+</span>
  </button>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
