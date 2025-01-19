<template>
  <div class="flex bg-gray-100 flex-col relative">
    <div class="h-[140px] w-full">
      <HeaderVue />
    </div>

    <router-view></router-view>

    <FooterView />
  </div>
</template>

<script setup lang="ts">
import FooterView from './views/FooterView.vue'
import HeaderVue from './views/HeaderVue.vue'
</script>

<style scoped></style>
