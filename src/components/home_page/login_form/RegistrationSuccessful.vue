<template>
  <div
    class="flex success absolute items-center gap-[20px] bg-white p-[20px] rounded-xl shadow-2xl shadow-gray-700"
  >
    <img class="size-[100px] rounded-full" src="/public/TickOrange.png" alt="" />
    <span class="text-2xl font-bold text-green-500">Login successful</span>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'
import { usePageStore } from '@/stores/pageStore'
import { onMounted } from 'vue'

const login = useLoginStore()
const page = usePageStore()

onMounted(() => {
  setTimeout(() => {
    page.togleLoginForm()
    login.close()
  }, 1500)
})
</script>

<style scoped>
@keyframes success {
  0% {
    opacity: 0;
    top: -300px;
  }
  40% {
    opacity: 1;
    top: 20px;
  }

  100% {
    opacity: 0;
    top: 20px;
  }
}

.success {
  animation: success 3s ease forwards;
}
</style>
