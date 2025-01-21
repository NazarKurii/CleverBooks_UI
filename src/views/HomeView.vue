<template>
  <div class="flex gap-10 items-center flex-col flex-1 p-[10px]">
    <HomeBanner />
    <HomeDescription />
    <HomeCatalogue />
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import HomeCatalogue from '@/components/home_page/catalogue/HomeCatalogue.vue'
import HomeBanner from '@/components/home_page/home_banner/HomeBanner.vue'
import HomeDescription from '@/components/home_page/home_description/HomeDescription.vue'
import LoginForm from '@/components/home_page/login_form/LoginForm.vue'
</script>

<style scoped></style>
