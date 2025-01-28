<template>
  <h1
    @click="router.push({ name: 'home' })"
    class="text-5xl cursor-pointer font-extrabold text-green-700 flex"
  >
    {{ resolution.width < 900 ? 'CB' : 'Clever Books' }}
  </h1>
</template>

<script setup lang="ts">
import router from '@/router'
import { useResolutionStore } from '@/stores/resolutionStore'

const resolution = useResolutionStore()
</script>

<style scoped></style>
