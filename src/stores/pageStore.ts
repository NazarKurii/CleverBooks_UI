import type { Book } from '@/components/scripts/testCatalogue'
import { findInedxById, handleError } from '@/components/scripts/utils'
import axios from 'axios'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => {
    return {
      cartOpen: false,
      catalogue: [] as {
        genre: string
        books: Book[]
      }[],
      cart: [] as {
        id: number
        amount: number
      }[],
      favorites: [] as number[],
    }
  },

  actions: {
    togleCart() {
      this.cartOpen = !this.cartOpen
      console.log(this.cartOpen)
    },

    async getHomeCatalogues() {
      try {
        const {
          data,
        }: {
          data: {
            sections: Record<string, Book[]>
          }
        } = await axios.get('/homeCatalogues')

        for (const key in data.sections) {
          this.catalogue.push({
            genre: key,
            books: data.sections[key],
          })
        }
      } catch (err: unknown) {
        handleError(err)
      }
    },

    addToCart(id: number) {
      const index = findInedxById(this.cart, id)

      if (index == -1) {
        this.cart.push({ id: id, amount: 1 })
      } else {
        this.cart[index].amount++
      }
    },
    removeFromCart(id: number) {
      const index = findInedxById(this.cart, id)
      this.cart[index].amount--

      if (this.cart[index].amount < 1) {
        this.cart.splice(index, 1)
      }
    },

    togleFavorite(id: number) {
      const index = this.favorites.findIndex((favoriteID) => favoriteID == id)

      if (index == -1) {
        this.favorites.push(id)
      } else {
        this.favorites.splice(index, 1)
      }
    },
  },
})
