<template>
  <div class="app">
    <HeaderVue />
    <router-view></router-view>
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import FooterView from './views/FooterView.vue'
import HeaderVue from './views/HeaderVue.vue'
</script>

<style scoped></style>
