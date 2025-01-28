<template>
  <span class="text-red-500 text-xl" v-if="error">Wrong password</span>
</template>

<script setup lang="ts">
defineProps<{
  error: boolean
}>()
</script>

<style scoped></style>
