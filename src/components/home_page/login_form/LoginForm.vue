<template>
  <div
    @click="
      () => {
        if (!login.loader) {
          page.togleLoginForm()
          login.close()
        }
      }
    "
    :class="{
      'bg-opacity-30': login.currentComponent != RegistrationSuccessful,
      'bg-opacity-0': login.currentComponent == RegistrationSuccessful,
    }"
    v-if="page.logInformOpen"
    class="flex top-0 z-[130] h-screen w-screen justify-center items-center fixed bg-black"
  >
    <component :is="login.currentComponent" @click.stop />
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'

import { useLoginStore } from '@/stores/LoginStore'
import RegistrationSuccessful from './RegistrationSuccessful.vue'

const page = usePageStore()
const login = useLoginStore()
</script>

<style scoped></style>
