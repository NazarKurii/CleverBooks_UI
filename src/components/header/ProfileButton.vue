<template>
  <img
    v-if="!isActive"
    @click="page.togleProfile"
    src="/public/blackUser.png"
    class="flex cursor-pointer z-20 active:scale-90 opacity-50 hover:bg-gray-200 border transition-all duration-[250ms] size-[60px] rounded-[13px] p-[9px]"
    alt=""
  />

  <img
    v-else
    @click="page.togleProfile"
    src="/public/whiteUser.png"
    class="flex cursor-pointer z-20 active:scale-90 bg-orange-500 hover:bg-orange-600 transition-all duration-[250ms] size-[60px] rounded-[13px] p-[9px]"
    alt=""
  />
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/pageStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const page = usePageStore()

const route = useRoute()

const isActive = computed(() => route.path.includes('account'))
</script>

<style scoped></style>
