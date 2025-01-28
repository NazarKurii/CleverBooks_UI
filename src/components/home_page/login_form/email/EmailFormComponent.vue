<template>
  <div
    class="flex gap-[20px] flex-col w-[480px] pt-[40px] px-[25px] h-[380px] justify-center items-center rounded-2xl relative bg-white"
  >
    <CloseFormButton />
    <EmailTitle />
    <EmailInput />
    <ContinueButton
      :active-condition="login.emailValid"
      :action="
        async () => {
          login.loader = true

          const status = await login.verifyEmail()
          login.loader = false
          if (status == Register) {
            login.currentComponent = VerificationForm
          } else if (status == Login) {
            login.currentComponent = PasswordForm
          }
        }
      "
      name="Log in via email"
    />
    <FormLoader v-if="login.loader" />
  </div>
</template>

<script setup lang="ts">
import CloseFormButton from '../CloseFormButton.vue'
import ContinueButton from '../ContinueButton.vue'
import EmailTitle from './EmailTitle.vue'
import EmailInput from './EmailInput.vue'

import PasswordForm from '../password/PasswordForm.vue'
import VerificationForm from '../verification/VerificationForm.vue'
import FormLoader from '../FormLoader.vue'
import { Login, Register, useLoginStore } from '@/stores/LoginStore'

const login = useLoginStore()
</script>

<style scoped></style>
