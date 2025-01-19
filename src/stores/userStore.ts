import type { CartItem } from '@/components/header/cart'

import { defineStore } from 'pinia'

export const useUserStorage = defineStore('userStore', {
  state: () => {
    return <
      {
        token: string
      }
    >{
      cart: [],
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YXBsZUBleGFtcGxlLmNvbSIsImV4cCI6MTczNzg0ODc0MiwidXNlcklkIjowfQ.eds8lLFVV1U7G86RWikp7pLDb-NZR7yuyA968wr3RFk',
    }
  },

  actions: {
    getUserCartItems(): CartItem[] {
      return []
    },

    changeFavoriteStatus(id: number) {
      if (id < 0) {
        console.log('')
      }
    },

    addToCart(id: number) {
      if (id < 0) {
        console.log('')
      }
    },
    removeFromCart(id: number) {
      if (id < 0) {
        console.log('')
      }
    },
  },
})
