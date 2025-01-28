<template>
  <button
    @click="activeCondition ? action() : false"
    :class="{
      ' hover:bg-green-600 active:scale-90': activeCondition,
      'opacity-60 cursor-default': !activeCondition,
    }"
    class="flex bg-green-500 w-full h-[60px] rounded-xl transition-all duration-200 justify-center items-center text-white text-xl font-bold"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  activeCondition: boolean
  action: VoidFunction
}>()
</script>

<style scoped></style>
