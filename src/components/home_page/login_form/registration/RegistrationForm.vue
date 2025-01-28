<template>
  <div
    class="flex gap-[20px] flex-col w-[480px] pt-[40px] px-[25px] h-[430px] justify-center items-center rounded-2xl relative bg-white"
  >
    <CloseFormButton />
    <RegistrationDescription :email="login.email" />
    <div class="flex w-full gap-[10px]">
      <NameInput />
      <SurnameInput />
    </div>
    <PasswordInput />
    <ContinueButton :active-condition="login.usersInfoValid" :action="singup" name="Sing up" />
    <FormLoader v-if="login.loader" />
  </div>
</template>

<script setup lang="ts">
import CloseFormButton from '../CloseFormButton.vue'
import ContinueButton from '../ContinueButton.vue'

import FormLoader from '../FormLoader.vue'
import { useLoginStore } from '@/stores/LoginStore'
import NameInput from './NameInput.vue'
import SurnameInput from './SurnameInput.vue'
import PasswordInput from '../PasswordInput.vue'
import RegistrationDescription from './RegistrationDescription.vue'
import RegistrationSuccessful from '../RegistrationSuccessful.vue'
import { initUser } from '@/components/scripts/user'

const login = useLoginStore()

async function singup() {
  login.loader = true
  const token = await login.SingUp()
  await initUser(token)

  setTimeout(() => {
    login.currentComponent = RegistrationSuccessful
    login.loader = false
  }, 300)
}
</script>

<style scoped></style>
