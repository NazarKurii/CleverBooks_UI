<template>
  <img
    @click="page.togleProfile"
    src="/public/profile.svg"
    class="flex cursor-pointer z-20 active:scale-90 hover:bg-gray-200 transition-all duration-[250ms] size-[60px] border rounded-[13px] p-[13px]"
    alt=""
  />
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
