<template>
  <div
    @click="login.userAgreementAccepted = !login.userAgreementAccepted"
    class="flex gap-[15px] items-center cursor-pointer"
  >
    <div class="flex cursor-pointer">
      <span v-if="!login.userAgreementAccepted" class="flex size-[30px] rounded-lg border"></span>
      <span
        v-if="login.userAgreementAccepted"
        class="flex size-[30px] overflow-clip relative text-white text-xl bg-orange-500 rounded-lg justify-center items-center"
      >
        <span
          class="flex border-4 border-white h-[18px] w-[13px] rotate-[40deg] absolute z-10 top-[2px] left-[8px]"
        ></span>
        <span
          class="flex absolute bg-orange-500 w-[40px] h-[15px] z-20 top-[-4px] rotate-[-23deg]"
        ></span>
      </span>
    </div>
    <span class="text-[18px]">I accept User Agreement and Privacy policy</span>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/LoginStore'

const login = useLoginStore()
</script>

<style scoped></style>
