<template>
  <div
    @click="page.togleCart"
    :class="{
      'fixed-cart-button': isFixed,
      'border ': !isFixed,
      'transition-cart-button': transtion,
    }"
    class="cart-button-container"
  >
    <div class="cart-button">
      <span v-if="resolution.width > 850" class="cart-button-text">Shopping cart</span>
      <img src="/public/cart.svg" class="size-[30px]" alt="" />
      <span
        v-if="cartItemsAmount"
        class="absolute top-[-28px] right-[-28px] min-w-[34px] bg-orange-600 rounded-full py-[5px] px-[7px] flex justify-center items-center text-white font-extrabold"
        >{{ cartItemsAmount }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import { isFixed } from '../scripts/cart'
import { transtion } from '../scripts/cart'
import { useResolutionStore } from '@/stores/resolutionStore'
import { computed } from 'vue'

const page = usePageStore()
const resolution = useResolutionStore()

const cartItemsAmount = computed(() => {
  let amount: number = 0

  page.cart.forEach((item) => {
    amount += item.cart
  })
  return amount
})
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

.cart-button-container {
  margin-right: 15px;
  z-index: 110;
  top: 25px;
  display: flex;
  position: fixed;
  background-color: white;
  border-radius: 14px;
  width: fit-content;
  padding: 14px;
  gap: 10px;
  cursor: pointer;
}

.cart-button {
  display: flex;
  gap: 7px;
  position: relative;
}

@media (max-width: 1450px) {
  .cart-button-container {
    margin-right: 85px;
  }
}

.cart-button-container:active {
  scale: 90%;
  transition: all 0.2s ease;
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
