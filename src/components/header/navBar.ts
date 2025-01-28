import { ref } from 'vue'

export const isFixed = ref(true)

let currentScroll: number = window.scrollY
window.addEventListener('scroll', () => {
  if (window.scrollY > currentScroll) {
    isFixed.value = false
  } else {
    isFixed.value = true
  }

  currentScroll = window.scrollY
})
