<template>
  <div
    v-if="condition"
    @click="action"
    :style="{
      zIndex: zIndex,
    }"
    class="flex size-full inset-0 bg-black opacity-40 absolute"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  condition: boolean
  action: VoidFunction
  zIndex: number
}>()
</script>

<style scoped></style>
