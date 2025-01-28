<template>
  <img
    @click="page.togleFavorites"
    src="/public/favorite.svg"
    class="flex cursor-pointer z-20 hover:bg-gray-200 transition-all duration-[250ms] rounded-[13px] active:scale-90 p-[13px] border size-[60px]"
    alt=""
  />
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
