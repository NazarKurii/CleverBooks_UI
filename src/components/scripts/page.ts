import axios from 'axios'
import { findInedxById, handleError } from './utils'
import { usePageStore } from '@/stores/pageStore'
import type { Book } from './catalogue'

export async function initUser() {
  let token = localStorage.getItem('token')

  if (!token) {
    try {
      const { data }: { data: { message: string; token: string } } = await axios.post('/guest')
      token = data.token
    } catch (err: unknown) {
      handleError(err)
    }
  }

  const page = usePageStore()
  if (token) {
    page.token = token
  }
  localStorage.setItem('token', token ? token : '')
}

export async function updateCatalogue(book: Book) {
  const page = usePageStore()
  page.catalogue.forEach((section, sectionIndex) => {
    const index = findInedxById(section.books, book.id)
    if (index != -1) {
      page.catalogue[sectionIndex].books[index].cart = book.cart
    }
  })
}
