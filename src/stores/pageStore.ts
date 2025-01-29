import type { Book } from '@/components/scripts/catalogue'
import { updateCatalogue } from '@/components/scripts/page'
import { initUser } from '@/components/scripts/user'
import { findInedxById, handleError } from '@/components/scripts/utils'
import router from '@/router'
import axios from 'axios'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => {
    return {
      userRegistered: false,
      logInformOpen: false,
      cartOpen: false,
      catalogue: [] as {
        genre: string
        books: Book[]
      }[],

      cart: [] as Book[],
    }
  },

  actions: {
    async init(registered: boolean = false) {
      this.userRegistered = registered
      this.cart = []
      this.catalogue = []

      try {
        const { data }: { data: { cart: Book[] } } = await axios.get('/cart')

        if (data.cart) {
          this.cart = data.cart
        }
      } catch (err: unknown) {
        handleError(err)
      }

      await this.getHomeCatalogues()
    },

    togleFavorites() {
      if (!this.userRegistered) {
        this.togleLoginForm()
      } else {
        router.push({ name: 'favorites' })
      }
    },

    togleProfile() {
      if (!this.userRegistered) {
        this.togleLoginForm()
      } else {
        router.push({ name: 'orderHistory' })
      }
    },

    togleLoginForm() {
      this.logInformOpen = !this.logInformOpen
      document.body.style.overflow = this.logInformOpen ? 'hidden' : ''
    },

    togleCart() {
      this.cartOpen = !this.cartOpen
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
        this.catalogue = []
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

    async getFavoritesCatalogue() {
      try {
        const {
          data,
        }: {
          data: {
            books: Book[]
          }
        } = await axios.get('/favorite')

        this.catalogue = []
        this.catalogue.push({ genre: 'favorites', books: data.books })
      } catch (err: unknown) {
        handleError(err)
      }
    },

    async addToCart(book: Book) {
      const index = findInedxById(this.cart, book.id)

      book.cart++
      if (index == -1) {
        this.cart.push(book)
      } else {
        this.cart[index].cart = book.cart
      }

      updateCatalogue(book)
      try {
        await axios.post('/cart', {
          bookId: book.id,
        })
      } catch (err: unknown) {
        handleError(err)
      }
    },

    async removeFromCart(id: number) {
      const index = findInedxById(this.cart, id)
      this.cart[index].cart--

      let book = this.cart[index]
      if (this.cart[index].cart < 1) {
        const books = this.cart.splice(index, 1)
        book = books[0]
      }

      updateCatalogue(book)

      try {
        await axios.put('/cart', {
          bookId: book.id,
        })
      } catch (err: unknown) {
        handleError(err)
      }
    },

    async deleteFromCart(id: number) {
      const book = this.cart.splice(findInedxById(this.cart, id), 1)
      book[0].cart = 0
      updateCatalogue(book[0])

      try {
        await axios.delete('/cart', {
          params: {
            bookId: book[0].id,
          },
        })
      } catch (err: unknown) {
        handleError(err)
      }
    },

    async togleFavorite(book: Book) {
      book.favorite = !book.favorite
      updateCatalogue(book)

      try {
        if (book.favorite) {
          await axios.post('/favorite', { bookId: book.id })
        } else {
          if (this.catalogue[0].genre == 'favorites') {
            const index = findInedxById(this.catalogue[0].books, book.id)

            if (index != -1) {
              this.catalogue[0].books.splice(index, 1)
            }
          }
          await axios.delete('/favorite', {
            params: {
              bookId: book.id,
            },
          })
        }
      } catch (err: unknown) {
        handleError(err)
      }
    },

    async getBooksSection(ids: number[]): Promise<Book[]> {
      try {
        const {
          data,
        }: {
          data: {
            books: Book[]
          }
        } = await axios.get('/catalogue', {
          params: {
            ids: ids,
          },
        })

        return data.books
      } catch (err: unknown) {
        handleError(err)
        return []
      }
    },

    async logout() {
      localStorage.removeItem('token')
      await initUser()

      router.push({ name: 'home' })
    },
  },
})
