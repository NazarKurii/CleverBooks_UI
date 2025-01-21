<template>
  <img class="rounded-xl" :src="url" alt="" />
</template>

<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<style scoped></style>
