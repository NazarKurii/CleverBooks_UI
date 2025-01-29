<template>
  <EmptyFavoritesList v-if="!page.catalogue[0].books?.length" />
  <FavoritesBooksSection :books="page.catalogue[0].books" v-else />
</template>

<script setup lang="ts">
import EmptyFavoritesList from '@/components/account_page/favorites/EmptyFavoritesList.vue'
import FavoritesBooksSection from '@/components/account_page/favorites/FavoritesBooksSection.vue'

import { usePageStore } from '@/stores/pageStore'
import { onBeforeMount } from 'vue'

const page = usePageStore()

onBeforeMount(page.getFavoritesCatalogue)
</script>

<style scoped></style>
