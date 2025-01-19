<template>
  <img class="flex h-1/2 cursor-pointer" :src="imageURL" alt="" />
</template>

<script setup lang="ts">
defineProps<{
  imageURL: string
}>()
</script>

<style scoped></style>
