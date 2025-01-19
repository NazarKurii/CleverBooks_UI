<template>
  <div class="flex flex-col">
    <span class="font-bold text-xl">{{ title }}</span>
    <span class="text-orange-500">{{ author }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  author: string
}>()
</script>

<style scoped></style>
