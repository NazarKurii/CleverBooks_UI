<template>
  <div class="flex gap-2">
    <span class="text-3xl font-bold"> {{ price.toFixed(2) }} </span>
    <span class="font-extrabold text-gray-400 mt-auto">USD</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  price: number
}>()
</script>

<style scoped></style>
