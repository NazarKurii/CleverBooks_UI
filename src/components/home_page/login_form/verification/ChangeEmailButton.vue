<template>
  <button
    @click="
      () => {
        login.close()
        login.currentComponent = EmailFormComponent
      }
    "
    class="text-xl font-bold text-green-500 hover:text-green-600 transition-all duration-200"
  >
    Change email
  </button>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'
import EmailFormComponent from '../email/EmailFormComponent.vue'

const login = useLoginStore()
</script>

<style scoped></style>
