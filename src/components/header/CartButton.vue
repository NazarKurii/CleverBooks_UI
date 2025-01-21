<template>
  <div
    @click="page.togleCart"
    :class="{
      'shadow-lg shadow-gray-400': isFixed,
      border: !isFixed,
      'transition-all duration-[250ms]': transtion,
    }"
    class="flex top-[26px] fixed bg-white rounded-[16px] w-[170px] p-[13px] justify-center gap-[10px] cursor-pointer active:scale-90 hover:bg-gray-200"
  >
    <span class="text-gray-500 text-nowrap mt-[2px] font-semibold text-[17px]">Shopping cart</span>
    <img src="/public/cart.svg" class="size-[30px]" alt="" />
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import { isFixed } from '../scripts/cart'
import { transtion } from '../scripts/cart'

const page = usePageStore()
</script>

<style scoped></style>
