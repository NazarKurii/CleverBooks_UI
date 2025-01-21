<template>
  <div
    @click="page.togleCart"
    :class="{
      'fixed-cart-button': isFixed,
      'border ': !isFixed,
      'transition-cart-button': transtion,
    }"
    class="cart-button"
  >
    <span v-if="resolution.width > 850" class="cart-button-text">Shopping cart</span>
    <img src="/public/cart.svg" class="size-[30px]" alt="" />
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import { isFixed } from '../scripts/cart'
import { transtion } from '../scripts/cart'
import { useResolutionStore } from '@/stores/resolutionStore'

const page = usePageStore()
const resolution = useResolutionStore()
</script>

<style scoped>
.fixed-cart-button {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  --tw-shadow-color: #9ca3af;
  --tw-shadow: var(--tw-shadow-colored);
}

.transition-cart-button {
  transition: all 0.3s ease;
}

.cart-button {
  display: flex;
  position: fixed;
  background-color: white;
  border-radius: 14px;
  width: fit-content;
  padding: 14px;
  gap: 10px;
  cursor: pointer;
}

.cart-button:active {
  scale: 90%;
}

.cart-button:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1)) /* #e5e7eb */;
}

.cart-button-text {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  text-wrap: nowrap;
  margin-top: 2px;
  font-weight: 600;
  font-size: 17px;
}
</style>
