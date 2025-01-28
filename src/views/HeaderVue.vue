<template>
  <div class="header-container">
    <NavBar />
    <ShoppingCart />
  </div>
  <LoginForm />
</template>

<script setup lang="ts">
import ShoppingCart from '@/components/header/cart/ShoppingCart.vue'
import NavBar from '@/components/header/NavBar.vue'
import LoginForm from '@/components/home_page/login_form/LoginForm.vue'
</script>

<style scoped>
.header-container {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  height: 140px;
  max-width: 1600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  z-index: 20;
}
</style>
