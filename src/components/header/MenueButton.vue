<template>
  <div
    v-if="resolution.width < 1450"
    class="flex z-10 size-[60px] border rounded-[14px] justify-center > pt-[7px] pl-[2px] rotate-90 text-gray-500 text-3xl font-extrabold cursor-pointer active:scale-90 trnasition-all duration-200"
  >
    |||
  </div>
</template>

<script setup lang="ts">
import { useResolutionStore } from '@/stores/resolutionStore'

const resolution = useResolutionStore()
</script>

<style scoped></style>
