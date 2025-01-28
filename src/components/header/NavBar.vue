<template>
  <BackGround :action="page.togleCart" :condition="page.cartOpen" :z-index="100" />

  <div class="flex relative w-full h-full justify-end">
    <div
      :class="{
        'fixed-header': isFixed,
        'relative-header': !isFixed,
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
          <!-- <CartButton /> -->
        </div>
        <MenueButton />
      </div>
    </div>
    <CartButton />
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
import MenueButton from './MenueButton.vue'

const page = usePageStore()
const resolution = useResolutionStore()
</script>

<style scoped>
.fixed-header {
  animation: header 0.25s ease-out forwards;
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
  .shadow-gray-600 {
    --tw-shadow-color: #4b5563;
    --tw-shadow: var(--tw-shadow-colored);
  }
}

.relative-header {
  animation: headerRelative 0.25s ease-in forwards;
}

.header {
  position: fixed;

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
  transition: all 0.3s ease;
}

.menue-container {
  display: flex;
  gap: 10px;
}

.cart-button-container {
  width: 173px;
}

@media (max-width: 850px) {
  .cart-button-container {
    width: 50px;
  }
}

@keyframes header {
  from {
    transform: translateY(-200px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes headerRelative {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-200px);
  }
}
</style>
