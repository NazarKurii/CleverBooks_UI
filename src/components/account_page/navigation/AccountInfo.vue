<template>
  <div
    class="bg-white relative flex flex-col py-[10px] px-[15px] gap-[12px] w-full h-[180px] rounded-xl"
  >
    <div class="flex gap-[7px]">
      <UserAvatar />

      <UserInfo />
    </div>
    <LogoutButton />
  </div>
</template>

<script setup lang="ts">
import LogoutButton from './LogoutButton.vue'
import UserAvatar from './UserAvatar.vue'
import UserInfo from './UserInfo.vue'
</script>

<style scoped></style>
