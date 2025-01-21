<template>
  <BackGround :condition="page.cartOpen" :action="page.togleCart" :z-index="20" />
  <div class="flex justify-center mb-[20px]">
    <NavBar />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/header/NavBar.vue'
import BackGround from '@/components/home_page/BackGround.vue'
import { usePageStore } from '@/stores/pageStore'

const page = usePageStore()
</script>

<style scoped></style>
