<template>
  <div
    @click="page.togleCart"
    :class="{
      'fixed-cart-button': isFixed,
      'border ': !isFixed && !page.cartOpen,
      'transition-cart-button': transtion,
      'bg-white hover:bg-gray-200': !page.cartOpen,
      'bg-orange-500 hover:bg-orange-600': page.cartOpen,
    }"
    class="cart-button-container"
  >
    <div class="cart-button">
      <span
        v-if="resolution.width > 850"
        :class="{
          'text-gray-500': !page.cartOpen,
          'text-white': page.cartOpen,
        }"
        class="cart-button-text"
        >Shopping cart</span
      >
      <img v-if="page.cartOpen" src="/public/whiteCart.png" class="size-[40px]" alt="" />
      <img
        v-if="!page.cartOpen"
        src="/public/blackCart.png"
        class="size-[40px] opacity-50"
        alt=""
      />

      <span
        v-if="cartItemsAmount"
        :class="{
          'border-2 border-white  min-w-[37px]': page.cartOpen,
          ' min-w-[34px]': !page.cartOpen,
        }"
        class="absolute top-[-28px] right-[-28px] bg-orange-500 rounded-full py-[5px] px-[7px] flex justify-center items-center text-white font-extrabold"
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
  border-radius: 14px;
  width: fit-content;
  padding: px;
  height: 60px;
  justify-content: center;
  align-items: center;
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

  text-wrap: nowrap;
  margin-top: 6px;
  font-weight: 600;
  font-size: 17px;
}
</style>
