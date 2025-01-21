<template>
  <div
    class="flex h-[130px] justify-between items-center px-[30px] absolute bottom-0 left-0 rounded-b-xl w-full bg-gray-200"
  >
    <div class="flex flex-col">
      <span class="text-gray-500 font-bold">Total Price:</span>
      <div class="flex gap-[5px] items-end">
        <span class="text-4xl font-bold">{{ totalPrice }}</span>
        <span class="flex mb-[2px] text-gray-500 font-bold">UAH</span>
      </div>
    </div>

    <MakeOrderButton />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import MakeOrderButton from './MakeOrderButton.vue'
import type { Book } from '@/components/scripts/catalogue'

const props = defineProps<{
  items: Book[]
}>()

const totalPrice = computed(() => {
  let totalPrice = 0
  props.items.forEach((item) => {
    totalPrice += item.price * item.cart
  })
  return totalPrice.toFixed(2)
})
</script>

<style scoped></style>
