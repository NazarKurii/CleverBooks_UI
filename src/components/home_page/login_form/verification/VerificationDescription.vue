<template>
  <div class="flex flex-col items-center gap-[10px]">
    <span class="text-4xl font-bold">Registration</span>
    <span class="text-[20px] text-gray-600">Enter a six-digit code sent to your email adress </span>
    <span class="text-[23px] font-bold">{{ email }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  email: string
}>()
</script>

<style scoped></style>
