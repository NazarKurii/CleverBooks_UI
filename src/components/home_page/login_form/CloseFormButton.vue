<template>
  <button
    @click="
      () => {
        page.togleLoginForm()
        login.close()
      }
    "
    class="absolute right-[20px] top-[20px] hover:bg-gray-300 bg-gray-200 rounded-xl pl-[11px] pb-[1px] pr-[8px]"
  >
    <span class="flex text-3xl rotate-45">+</span>
  </button>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
const login = useLoginStore()
</script>

<style scoped></style>
