<template>
  <div
    class="flex gap-[20px] flex-col w-[480px] pt-[40px] px-[25px] h-[420px] justify-center items-center rounded-2xl relative bg-white"
  >
    <CloseFormButton />
    <PasswordDescription :email="login.email" />
    <LoginError :error="unseccessfulLogin" />
    <PasswordInput />
    <ContinueButton
      :active-condition="login.password.length > 0"
      :action="
        async () => {
          await logIn()
        }
      "
      name="Log in"
    />
    <FormLoader v-if="login.loader" />
  </div>
</template>

<script setup lang="ts">
import CloseFormButton from '../CloseFormButton.vue'
import ContinueButton from '../ContinueButton.vue'

import FormLoader from '../FormLoader.vue'
import { useLoginStore } from '@/stores/LoginStore'

import RegistrationSuccessful from '../RegistrationSuccessful.vue'
import { initUser } from '@/components/scripts/user'
import PasswordDescription from './PasswordDescription.vue'
import PasswordInput from '../PasswordInput.vue'
import { ref } from 'vue'
import LoginError from './LoginError.vue'

const login = useLoginStore()
const unseccessfulLogin = ref(false)

async function logIn() {
  login.loader = true

  let token = ''

  token = await login.logIn()

  if (!token) {
    unseccessfulLogin.value = true
    login.loader = false
    return
  }

  await initUser(token)

  setTimeout(() => {
    login.currentComponent = RegistrationSuccessful
    login.loader = false
  }, 300)
}
</script>

<style scoped></style>
