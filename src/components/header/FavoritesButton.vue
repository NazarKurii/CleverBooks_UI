<template>
  <img
    v-if="isActive"
    @click="page.togleFavorites"
    src="/public/FavoritesIconWhite.png"
    class="flex cursor-pointer z-20 hover:bg-orange-600 bg-orange-500 transition-all duration-[250ms] rounded-[13px] active:scale-90 p-[14px] size-[60px]"
    alt=""
  />
  <img
    v-else
    @click="page.togleFavorites"
    src="/public/favoritesIconBlack.png"
    class="flex cursor-pointer z-20 hover:bg-gray-200 transition-all duration-[250ms] rounded-[13px] active:scale-90 border p-[14px] opacity-50 size-[60px]"
    alt=""
  />
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const page = usePageStore()

const route = useRoute()

const isActive = computed(() => route.path.includes('favorites'))
</script>

<style scoped></style>
