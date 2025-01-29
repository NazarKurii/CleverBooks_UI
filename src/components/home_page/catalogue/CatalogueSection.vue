<template>
  <div class="flex flex-col gap-5">
    <span class="text-5xl font-bold">{{ bookSection.genre }}</span>
    <div class="book-section">
      <CatalogueCard v-for="book in bookSection.books" :key="book.id" :book="book" />
    </div>
    <SeeAllButton class="m-auto" v-if="seeAllButtonOn" />
  </div>
</template>

<script setup lang="ts">
import CatalogueCard from './catalogue_card/CatalogueCard.vue'
import SeeAllButton from './SeeAllButton.vue'
import { BookSection } from '@/components/scripts/catalogue'

defineProps({
  bookSection: {
    type: BookSection,
    required: true,
  },

  seeAllButtonOn: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.book-section {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 20px;
}

@media (max-width: 1660px) {
  .book-section {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    gap: 20px;
  }
}

@media (max-width: 1260px) {
  .book-section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 20px;
  }
}

@media (max-width: 860px) {
  .book-section {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    gap: 20px;
  }
}
</style>
