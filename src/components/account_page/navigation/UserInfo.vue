<template>
  <!-- <EditAccountButton @click="togleEdit" /> -->
  <div class="flex flex-col w-[107px] overflow-hidden">
    <span class="text-xl font-semibold">{{ user.name }} {{ user.surname }}</span>
    <span class="text-sm">{{ user.email }}</span>
    <span class="text-lg">{{ user.number ? user.number : 'number' }}</span>
    <EditAccountInfo v-if="editAccountOpen" :close="togleEdit" />
  </div>
</template>

<script setup lang="ts">
import { getUsersInfo, nullUser, type User } from '@/components/scripts/user'
import { onBeforeMount, ref } from 'vue'
import EditAccountInfo from './EditAccountInfo.vue'
// import EditAccountButton from './EditAccountButton.vue'

const user = ref<User>(nullUser)

onBeforeMount(async () => {
  user.value = await getUsersInfo()
})

const editAccountOpen = ref(false)

function togleEdit() {
  editAccountOpen.value = !editAccountOpen.value
  document.body.style.overflow = editAccountOpen.value ? 'hidden' : ''
}
</script>

<style scoped></style>
