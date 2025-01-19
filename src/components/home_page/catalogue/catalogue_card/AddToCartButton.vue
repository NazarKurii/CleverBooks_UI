<template>
  <button
    @click="
      () => {
        if (id && addToCart) {
          addToCart(id)
          user.addToCart(id)
        }
      }
    "
    :class="{
      'w-[70px]': !small,
      'w-[50px]': small,
      'active:scale-90': small,
    }"
    class="flex bg-green-200 text-4xl text-green-500 transition-all hover:bg-green-500 hover:text-white duration-200 h-[50px] items-center pb-[2px] rounded-xl justify-center"
  >
    +
  </button>
</template>

<script setup lang="ts">
import { useUserStorage } from '@/stores/userStore'
import { inject } from 'vue'

defineProps<{
  small: boolean
}>()

const addToCart = inject<(id: number) => void>('addToCart')
const id = inject<number>('id')

const user = useUserStorage()
</script>

<style scoped></style>
