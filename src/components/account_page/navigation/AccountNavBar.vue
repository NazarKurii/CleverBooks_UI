<template>
  <div class="nav-bar-container">
    <div
      :class="{
        'fixed-container': !isFixed,
        'unfixed-container': isFixed,
      }"
      class="flex flex-col gap-[15px] user-container"
    >
      <div class="menue-container">
        <AccountNavBarButton
          name="Orders history"
          route-name="orderHistory"
          icon-u-r-l="/public/ordersHistoryIcon.png"
        />
        <AccountNavBarButton
          name="Delivery Adress"
          route-name="adress"
          icon-u-r-l="/public/adressIcon.png"
        />
        <AccountNavBarButton
          name="Favorites"
          route-name="favorites"
          icon-u-r-l="/public/favoritesAccountIcon.png"
        />
      </div>

      <AccountInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountInfo from './AccountInfo.vue'
import AccountNavBarButton from './AccountNavBarButton.vue'

import { isFixed } from '@/components/header/navBar'
</script>

<style scoped>
.user-container {
  position: fixed;
  display: flex;
  width: 250px;
}

.nav-bar-container {
  width: 350px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.menue-container {
  display: flex;
  gap: 15px;
  flex-direction: column;
}

@media (max-width: 1260px) {
  .user-container {
    position: relative;
    width: 100%;
  }

  .nav-bar-container {
    width: 100%;
  }

  .menue-container {
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(233, 230, 230, 0.671);
    padding: 10px;
    border-radius: 12px;
  }
}

@media (min-width: 1260px) {
  .fixed-container {
    animation: goUp 0.4s ease forwards;
  }

  .unfixed-container {
    animation: goDown 0.4s ease forwards;
  }
}

@keyframes goUp {
  from {
    top: 170px;
  }
  to {
    top: 80px;
  }
}

@keyframes goDown {
  from {
    top: 80px;
  }
  to {
    top: 170px;
  }
}
</style>
