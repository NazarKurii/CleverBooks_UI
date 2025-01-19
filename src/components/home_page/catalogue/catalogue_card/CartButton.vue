<template>
  <div
    :class="{
      'w-[150px]': cart > 0,
    }"
    class="flex justify-between"
  >
    <RemoveFromCartButton :is-cart-empty="cart == 0" />
    <span v-if="cart > 0" class="text-2xl my-auto font-semibold">{{ cart }}</span>
    <AddToCartButton :small="cart != 0" />
  </div>
</template>

<script setup lang="ts">
import AddToCartButton from './AddToCartButton.vue'
import RemoveFromCartButton from './RemoveFromCartButton.vue'

defineProps<{
  cart: number
}>()
</script>

<style scoped></style>
