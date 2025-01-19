<template>
  <HomeCatalogueSection
    v-for="(section, i) in page.catalogue"
    :key="i"
    :book-section="new BookSection(section.books, section.genre)"
  />
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import HomeCatalogueSection from './HomeCatalogueSection.vue'
import { BookSection } from '@/components/scripts/testCatalogue'
import { onBeforeMount } from 'vue'

const page = usePageStore()

onBeforeMount(page.getHomeCatalogues)
</script>

<style scoped></style>
