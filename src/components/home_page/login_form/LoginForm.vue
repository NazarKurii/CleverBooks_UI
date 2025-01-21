<template>
  <div
    @click="page.togleLoginForm"
    v-if="page.logInformOpen"
    class="flex top-0 z-[130] bg-opacity-30 h-screen w-screen justify-center items-center fixed bg-black"
  >
    <FormComponent @click.stop />
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import FormComponent from './FormComponent.vue'

const page = usePageStore()
</script>

<style scoped></style>
