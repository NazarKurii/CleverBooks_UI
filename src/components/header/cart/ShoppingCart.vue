<template>
  <div class="cart-container">
    <div v-if="page.cartOpen" class="cart">
      <div class="flex relative w-full justify-between">
        <span class="text-3xl font-bold">Your order:</span>
        <CloseCartButton />
      </div>
      <CartList :items="page.cart" v-if="page.cart.length" />
      <EmptyCart v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import EmptyCart from './EmptyCart.vue'
import CartList from './CartList.vue'
import CloseCartButton from './CloseCartButton.vue'

const page = usePageStore()
</script>

<style scoped>
.cart-container {
  display: flex;
  position: relative;
  justify-content: end;
}

.cart {
  display: flex;
  z-index: 110;
  top: 110px;
  position: fixed;
  flex-direction: column;
  width: 600px;
  height: 80vh;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
}
</style>
