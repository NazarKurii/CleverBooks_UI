<template>
  <div
    class="flex w-full px-[20px] mb-[100px] pb-[20px] mt-[30px] overflow-y-scroll flex-col gap-[20px]"
  >
    <CartItem v-for="item in items" :key="item.id" :item="item" />
  </div>
  <CartFotter :items="items" />
</template>

<script setup lang="ts">
import { useUserStorage } from '@/stores/userStore'
import CartItem from './CartItem.vue'
import { provide, ref } from 'vue'
import { findInedxById } from '../scripts/utils'
import CartFotter from './CartFotter.vue'

const user = useUserStorage()
const items = ref(user.getUserCartItems())

provide('removeCartItem', (id: number) => {
  const index = findInedxById(items.value, id)
  console.log(index, items.value)
  items.value[index].amount--

  if (!items.value[index].amount) {
    items.value.splice(index, 1)
  }

  user.removeFromCart(id)
})
provide('addCartItem', (id: number) => {
  const index = findInedxById(items.value, id)
  items.value[index].amount++
  user.addToCart(id)
})
provide('deleteCartItem', (id: number) => {
  const index = findInedxById(items.value, id)
  items.value.splice(index, 1)

  user.cart[findInedxById(user.cart, id)].amount = 0
  user.removeFromCart(id)
})
</script>

<style scoped></style>
