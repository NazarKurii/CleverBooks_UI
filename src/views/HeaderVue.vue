<template>
  <div
    v-if="page.cartOpen"
    @click="page.togleCart"
    class="flex size-full bg-black z-20 opacity-40 absolute"
  ></div>
  <div class="flex justify-center mb-[20px]">
    <NavBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/header/NavBar.vue'
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
