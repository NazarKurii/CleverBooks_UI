import { ref } from 'vue'

export const isFixed = ref(false)
export const transtion = ref(true)

const ActivateTransition = () => {
  setTimeout(() => {
    transtion.value = true
  }, 500)
}

let currentScroll = window.scrollY

window.addEventListener('scroll', () => {
  transtion.value = false
  if (window.scrollY > currentScroll) {
    isFixed.value = true
  } else {
    isFixed.value = false
  }

  currentScroll = window.scrollY
  ActivateTransition()
})

export interface CartItem {
  id: number
  amount: number
  price: number
  title: string
  author: string
  currency: string
  imageUrl: string
}
