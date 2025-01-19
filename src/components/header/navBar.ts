import { ref } from 'vue'

export const isFixed = ref(false)

let currentScroll: number = window.scrollY
window.addEventListener('scroll', () => {
  if (window.scrollY > currentScroll || window.scrollY < 10) {
    isFixed.value = false
  } else {
    isFixed.value = true
  }

  currentScroll = window.scrollY
})
