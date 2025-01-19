<template>
  <button
    v-if="!isCartEmpty"
    @click="
      () => {
        removeFromCart && id ? removeFromCart(id) : false
        if (id != undefined) {
          user.removeFromCart(id)
        }
      }
    "
    class="flex bg-green-200 text-4xl text-green-500 w-[50px] hover:bg-green-500 hover:text-white active:scale-90 transition-all duration-200 h-[50px] items-center pb-[8px] rounded-xl justify-center"
  >
    -
  </button>
</template>

<script setup lang="ts">
import { useUserStorage } from '@/stores/userStore'
import { inject } from 'vue'

defineProps<{
  isCartEmpty: boolean
}>()

const removeFromCart = inject<(id: number) => void>('removeFromCart')
const id = inject<number>('id')

const user = useUserStorage()
</script>

<style scoped></style>
