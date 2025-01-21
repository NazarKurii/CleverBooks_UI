<template>
  <div
    class="flex w-full px-[20px] mb-[100px] pb-[20px] mt-[30px] overflow-y-scroll flex-col gap-[20px]"
  >
    <CartItem v-for="item in items" :key="item.id" :item="item" />
  </div>
  <CartFotter :items="items" />
</template>

<script setup lang="ts">
import CartItem from './CartItem.vue'
import CartFotter from './CartFotter.vue'
import type { Book } from '@/components/scripts/catalogue'

defineProps<{
  items: Book[]
}>()
</script>

<style scoped></style>
