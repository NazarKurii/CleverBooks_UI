<template>
  <div class="flex gap-[20px] items-center">
    <div class="flex size-fit items-end gap-[5px]">
      <span class="font-bold text-xl">{{ price * amount }}</span>
      <span class="text-sm font-bold">{{ currency }}</span>
    </div>
    <div class="flex w-[130px] justify-between">
      <RemoveCartItemButon :id="id" />
      <span class="text-2xl my-auto font-semibold">{{ amount }}</span>
      <AddCartItemButton :id="id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AddCartItemButton from './AddCartItemButton.vue'
import RemoveCartItemButon from './RemoveCartItemButon.vue'

defineProps<{
  amount: number
  price: number
  currency: string
  id: number
}>()
</script>

<style scoped></style>
