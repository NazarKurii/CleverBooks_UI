<template>
  <button
    @click="router.push({ name: routeName })"
    :class="{
      'bg-orange-500 hover:bg-orange-600': isActive,
    }"
    class="button-container py-[10px] transition-all duration-200 active:scale-90 rounded-xl w-full gap-[10px] px-[10px] items-center"
  >
    <div class="flex rounded-xl p-[10px] bg-white size-[50px]">
      <img :src="iconURL" alt="" />
    </div>
    <span
      :class="{
        'text-white': isActive,
      }"
      :style="{
        fontWeight: '500',
      }"
      class="text-settings"
      >{{ name }}</span
    >
  </button>
</template>

<script setup lang="ts">
import router from '@/router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  name: string
  iconURL: string
  routeName: string
}>()

const route = useRoute()

const isActive = computed(() => route.name?.toString() == props.routeName)
</script>

<style scoped>
.button-container {
  display: flex;
}
@media (max-width: 780px) {
  .button-container {
    flex-direction: column;
  }
}
@media (max-width: 1260px) {
  .button-container {
    justify-content: center;
  }
}

.text-settings {
  font-size: 20px;
  line-height: 28px;
  margin-top: auto;
  margin-bottom: auto;
}

@media (max-width: 560px) {
  .text-settings {
    font-size: 4vw;
  }
}
</style>
