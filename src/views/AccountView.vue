<template>
  <div>
    <button @click="page.singOut()">Log out</button>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
