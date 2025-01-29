<template>
  <div @click="close" class="flex inset-0 bg-black opacity-30 flex-1 fixed z-[150]">
    <div @click.stop></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  close: VoidFunction
}>()
</script>

<style scoped></style>
