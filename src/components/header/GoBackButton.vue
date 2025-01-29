<template>
  <div
    v-if="history.goBackAvailable"
    @click="router.push({ name: history.previousRouteName() })"
    class="flex top-[95px] shadow-2xl z-10 shadow-gray-800 left-[5px] absolute"
  >
    <button
      class="flex w-[100px] hover:text-green-600 font-bold text-green-500 justify-between pl-[15px] pr-[20px] items-center h-[40px] bg-white rounded-lg fixed"
    >
      <span>
        {{ '<' }}
      </span>
      <span
        class="mt-[1px] hover:translate-x-[-15px] transition-all duration-200 inset-0 absolute pl-[25px] pt-[8px]"
        >Back</span
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { useAppHistoryStore } from '@/stores/AppHistoryStore'
import { watch } from 'vue'

const history = useAppHistoryStore()

watch(
  () => router.currentRoute.value,
  (newRoute) => {
    const name = newRoute.name?.toString()
    if (name) {
      history.addRouteToHistory(name)
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.enter-animation {
  animation: enter 0.3s ease-out;
}

@keyframes enter {
  from {
    transform: translateY(-90px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
