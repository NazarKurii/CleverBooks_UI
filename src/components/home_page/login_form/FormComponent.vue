<template>
  <div
    class="flex w-[500px] p-[20px] h-[400px] justify-center items-center rounded-2xl relative bg-white"
  >
    <CloseFormButton />
    <LoginTitle />
  </div>
</template>

<script setup lang="ts">
import CloseFormButton from './CloseFormButton.vue'
import LoginTitle from './LoginTitle.vue'
</script>

<style scoped></style>
