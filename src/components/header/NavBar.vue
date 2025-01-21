<template>
  <BackGround :action="page.togleCart" :condition="page.cartOpen" :z-index="100" />
  <div
    :class="{
      'fixed-header': isFixed,
    }"
    :style="{
      width: `${resolution.width < 1600 ? resolution.width - 20 : 1580}px`,
    }"
    class="header"
  >
    <NavBarLogo />

    <div class="menue-container">
      <FavoritesButton />
      <ProfileButton />
      <div class="cart-button-container">
        <CartButton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import CartButton from './CartButton.vue'
import FavoritesButton from './FavoritesButton.vue'
import NavBarLogo from './NavBarLogo.vue'
import ProfileButton from './ProfileButton.vue'

import { isFixed } from './navBar'
import BackGround from '../home_page/BackGround.vue'
import { useResolutionStore } from '@/stores/resolutionStore'

const page = usePageStore()
const resolution = useResolutionStore()
</script>

<style scoped>
.fixed-header {
  position: fixed;
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  .shadow-gray-600 {
    --tw-shadow-color: #4b5563;
    --tw-shadow: var(--tw-shadow-colored);
  }
}

.header {
  display: flex;
  z-index: 50;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  height: 80px;
  border-radius: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 20px;
  background-color: white;
  z-index: 110;
}

.menue-container {
  display: flex;
  gap: 10px;
}

.cart-button-container {
  width: 170px;
}

@media (max-width: 850px) {
  .cart-button-container {
    width: 50px;
  }
}
</style>
