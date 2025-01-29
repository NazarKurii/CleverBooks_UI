<template>
  <button
    @click="page.logout"
    class="flex gap-[8px] h-[60px] rounded-xl bg-gray-1 bg-gray-100 transition-all duration-200 hover:bg-slate-200 justify-center items-center"
  >
    <img src="/public/logutIcon.png" class="flex size-[24px]" alt="" />
    <span class="text-orange-500 text-xl font-bold">Log out</span>
  </button>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
