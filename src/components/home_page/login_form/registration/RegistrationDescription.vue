<template>
  <div class="flex flex-col items-center gap-[10px]">
    <span class="text-4xl font-bold">Almost done</span>
    <span class="text-[23px] font-bold text-gray-500">{{ email }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  email: string
}>()
</script>

<style scoped></style>
