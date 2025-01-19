<template>
  <span
    v-if="isNew"
    class="absolute flex bg-green-200 py-1 px-[10px] rounded-lg font-semibold top-[16px] left-[16px] text-green-600"
    >New</span
  >
</template>

<script setup lang="ts">
defineProps<{
  isNew: boolean
}>()
</script>

<style scoped></style>
