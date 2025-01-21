<template>
  <div
    :style="{
      position: `${isFixed ? 'fixed' : 'absolute'}`,
    }"
    :class="{
      'shadow-2xl shadow-gray-600': isFixed,
    }"
    class="flex z-50 items-center justify-between mt-[15px] w-[1580px] h-[80px] rounded-xl py-[6px] px-[20px] bg-white"
  >
    <NavBarLogo />
    <div class="flex gap-2">
      <!-- <CountryLanguageButton /> To do -->
      <!-- <AboutButton /> -->
      <!-- <NewsButton /> -->
      <!-- <SupportButton /> -->
    </div>
    <div class="flex top-0 right-0 gap-2 w-[600px] justify-end">
      <FavoritesButton />
      <ProfileButton />

      <div class="flex w-[170px]">
        <CartButton class="fixed top-[26px]" />
      </div>
      <ShoppingCart />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartButton from './CartButton.vue'
import FavoritesButton from './FavoritesButton.vue'
import NavBarLogo from './NavBarLogo.vue'
import ProfileButton from './ProfileButton.vue'
import ShoppingCart from './cart/ShoppingCart.vue'
// import CountryLanguageButton from './CountryLanguageButton.vue'
// import AboutButton from './AboutButton.vue'
// import NewsButton from './NewsButton.vue'
// import SupportButton from './SupportButton.vue'

import { isFixed } from './navBar'
</script>

<style scoped></style>
