<template>
  <button v-if="!cart" class="flex size-[50px] active:scale-90 transition-all duration-200">
    <img
      @click="
        () => {
          if (favoriteSwitcher && id != undefined) {
            favoriteSwitcher(id)
          }
        }
      "
      v-if="!favorite"
      src="/public/like-1.svg"
      alt=""
    />
    <img
      @click="
        () => {
          if (favoriteSwitcher && id != undefined) {
            favoriteSwitcher(id)
          }
        }
      "
      v-if="favorite"
      src="/public/like-2.svg"
      alt=""
    />
  </button>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import { computed, inject } from 'vue'

defineProps<{
  cart: number
}>()
const page = usePageStore()

const favoriteSwitcher = inject<(id: number) => void>('favoriteSwitcher')
const id = inject<number>('id')

const favorite = computed(() => page.favorites.findIndex((favoriteID) => favoriteID == id) != -1)
</script>

<style scoped></style>
