<template>
  <div class="fixed mt-[65px]">
    <div
      v-if="page.cartOpen"
      class="flex flex-col w-[600px] p-[30px] h-[80vh] bg-white mt-[30px] right-[-18px] rounded-xl"
    >
      <div class="flex relative w-full justify-between">
        <span class="text-3xl font-bold">Your order:</span>
        <CloseCartButton />
      </div>
      <CartList v-if="user.cart.length" />
      <EmptyCart v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import CloseCartButton from './CloseCartButton.vue'
import CartList from './CartList.vue'
import { useUserStorage } from '@/stores/userStore'
import EmptyCart from './EmptyCart.vue'

const page = usePageStore()
const user = useUserStorage()
</script>

<style scoped></style>
