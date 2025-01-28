<template>
  <input
    placeholder="Name"
    v-model="login.name"
    type="text"
    class="flex w-full h-[50px] focus:outline-none px-[20px] text-[20px] bg-gray-200 bg-opacity-60 rounded-xl"
  />
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'

const login = useLoginStore()
</script>

<style scoped></style>
