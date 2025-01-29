<template>
  <div class="flex account-container min-h-[500px] max-w-[1600px] p-[10px]">
    <KeepAlive>
      <AccountNavBar />
    </KeepAlive>

    <div class="flex ml-auto w-full max-w-[1210px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountNavBar from '@/components/account_page/navigation/AccountNavBar.vue'
</script>

<style scoped>
.account-container {
  flex-direction: row;
  width: 100%;
}

@media (max-width: 1260px) {
  .account-container {
    flex-direction: column;
  }
}
</style>
