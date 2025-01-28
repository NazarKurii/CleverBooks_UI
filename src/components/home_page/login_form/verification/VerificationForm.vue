<template>
  <div
    class="flex gap-[20px] flex-col w-[480px] pt-[40px] px-[25px] h-[580px] justify-center items-center rounded-2xl relative bg-white"
  >
    <CloseFormButton />
    <VerificationDescription :email="login.email" />
    <ChangeEmailButton />
    <VerificationCodeInput
      v-on:update-code="
        (newValue: string) => {
          login.verification.input = newValue
        }
      "
    />
    <AgreementComponent />
    <ContinueButton
      :active-condition="login.codeValid"
      :action="
        () => {
          login.currentComponent = RegistrationForm
        }
      "
      name="Confirm"
    />
    <SendCodeAgainButton />
    <FormLoader v-if="login.loader" />
  </div>
</template>

<script setup lang="ts">
import FormLoader from '../FormLoader.vue'

import ContinueButton from '../ContinueButton.vue'
import CloseFormButton from '../CloseFormButton.vue'
import VerificationDescription from './VerificationDescription.vue'
import VerificationCodeInput from './VerificationCodeInput.vue'
import { useLoginStore } from '@/stores/LoginStore'
import ChangeEmailButton from './ChangeEmailButton.vue'

import AgreementComponent from './AgreementComponent.vue'
import SendCodeAgainButton from './SendCodeAgainButton.vue'
import RegistrationForm from '../registration/RegistrationForm.vue'

const login = useLoginStore()
</script>

<style scoped></style>
