<template>
  <div class="flex flex-col gap-5">
    <span class="text-5xl font-bold">{{ bookSection.genre }}</span>
    <div class="grid grid-cols-4 gap-5">
      <CatalogueCard v-for="book in bookSection.books" :key="book.id" :book="book" />
    </div>
    <SeeAllButton class="m-auto" />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'

import CatalogueCard from './catalogue_card/CatalogueCard.vue'
import SeeAllButton from './SeeAllButton.vue'
import type { BookSection } from '@/components/scripts/testCatalogue'
import { useUserStorage } from '@/stores/userStore'
import { usePageStore } from '@/stores/pageStore'

const props = defineProps<{
  bookSection: BookSection
}>()

const user = useUserStorage()
const page = usePageStore()

provide('favoriteSwitcher', (id: number) => {
  props.bookSection.favoriteSwitcher(id, page.togleFavorite, user.changeFavoriteStatus)
})
provide('addToCart', (id: number) => {
  props.bookSection.addToCart(id, page.addToCart, user.addToCart)
})
provide('removeFromCart', (id: number) => {
  props.bookSection.removeFromCart(id, page.removeFromCart, user.removeFromCart)
})
</script>

<style scoped></style>
