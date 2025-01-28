<template>
  <button
    @click="sendCodeAgain"
    class="flex bg-gray-100 w-full h-[60px] rounded-xl transition-all duration-200 justify-center items-center text-green-500 hover:text-green-600 text-xl font-bold"
  >
    Send code again
  </button>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'

const login = useLoginStore()

const sendCodeAgain = async () => {
  login.loader = true
  await login.verifyEmail()
  setTimeout(() => {
    login.loader = false
  }, 1000)
}
</script>

<style scoped></style>
