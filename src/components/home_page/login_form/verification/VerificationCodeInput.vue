<template>
  <div class="flex space-x-4">
    <input
      :onmousedown="forbidFocus"
      v-for="(value, index) in inputs"
      :key="index"
      :id="'input' + String(index)"
      v-model="inputs[index]"
      class="w-[60px] h-[60px] bg-gray-100 rounded-lg text-center shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      type="text"
      maxlength="1"
      @input="handleInput(index)"
      @keydown="handleKeyDown(index, $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

onMounted(() => {
  const input = document.getElementById('input0')
  input?.focus()
})

const inputs = ref<string[]>(['', '', '', '', ''])

function forbidFocus(): boolean {
  for (let index = 0; index < inputs.value.length; index++) {
    const inputElement = document.getElementById('input' + String(index))
    if (inputs.value[index] == '') {
      inputElement?.focus()
      return false
    }
  }
  const inputElement = document.getElementById('input4')
  inputElement?.focus()
  return false
}

function handleInput(index: number): void {
  const nextInput = document.querySelectorAll('input')[index + 1] as HTMLInputElement | null

  if (isNaN(Number(inputs.value[index]))) {
    inputs.value[index] = ''
    return
  }
  if (inputs.value[index].length === 1 && nextInput) {
    nextInput.focus()
  }
}

function handleKeyDown(index: number, event: KeyboardEvent): void {
  const prevInput = document.querySelectorAll('input')[index - 1] as HTMLInputElement | null

  if (event.key === 'Backspace' && inputs.value[index] === '' && prevInput) {
    prevInput.focus()
  }
}

watch(inputs.value, () => {
  emit('updateCode', inputs.value.join(''))
})

const emit = defineEmits(['updateCode'])
</script>
