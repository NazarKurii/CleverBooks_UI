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
import type { CartItem } from './cart'
import MakeOrderButton from './MakeOrderButton.vue'

const props = defineProps<{
  items: CartItem[]
}>()

const totalPrice = computed(() => {
  let totalPrice = 0
  props.items.forEach((item) => {
    totalPrice += item.price * item.amount
  })
  return totalPrice
})
</script>

<style scoped></style>
