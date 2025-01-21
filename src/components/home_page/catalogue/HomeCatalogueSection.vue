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
import CatalogueCard from './catalogue_card/CatalogueCard.vue'
import SeeAllButton from './SeeAllButton.vue'
import type { BookSection } from '@/components/scripts/catalogue'

defineProps<{
  bookSection: BookSection
}>()
</script>

<style scoped></style>
