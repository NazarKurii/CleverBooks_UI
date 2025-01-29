<template>
  <div class="flex flex-col gap-[40px] w-full mx-auto mt-[10px]">
    <span class="text-5xl font-bold">Favorites</span>
    <div class="book-section mx-auto">
      <CatalogueCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogueCard from '@/components/home_page/catalogue/catalogue_card/CatalogueCard.vue'
import type { Book } from '@/components/scripts/catalogue'

defineProps<{
  books: Book[]
}>()
</script>

<style scoped>
.book-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 20px;
}

@media (max-width: 1600px) {
  .book-section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

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

@media (max-width: 850px) {
  .book-section {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    gap: 20px;
  }
}
</style>
