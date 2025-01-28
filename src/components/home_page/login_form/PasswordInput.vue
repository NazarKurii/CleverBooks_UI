<template>
  <input
    placeholder="Password             (1 digit, 1 uppercase, min 6)"
    v-model="login.password"
    :type="isChecked ? 'text' : 'password'"
    class="flex w-full h-[50px] focus:outline-none px-[20px] text-[20px] bg-gray-200 bg-opacity-60 rounded-xl"
  />
  <div class="flex gap-[10px] px-[10px] w-full">
    <input v-model="isChecked" type="checkbox" />
    <span class="text-lg font-bold text-gray-500">Show password</span>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'
import { ref } from 'vue'

const login = useLoginStore()

const isChecked = ref(false)
</script>

<style scoped></style>
