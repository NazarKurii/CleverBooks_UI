<template>
  <button
    @click="addCartItem ? addCartItem(id) : false"
    class="flex bg-gray-300 active:scale-90 text-4xl w-[40px] text-gray-500 transition-all hover:bg-green-500 hover:text-white duration-200 h-[40px] items-center pb-[2px] rounded-xl justify-center"
  >
    +
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'

defineProps<{
  id: number
}>()

const addCartItem = inject<(id: number) => void>('addCartItem')
</script>

<style scoped></style>
