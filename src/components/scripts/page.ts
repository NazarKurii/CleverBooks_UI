import { findInedxById } from './utils'
import { usePageStore } from '@/stores/pageStore'
import type { Book } from './catalogue'

export async function updateCatalogue(book: Book) {
  const page = usePageStore()
  page.catalogue.forEach((section, sectionIndex) => {
    const index = findInedxById(section.books, book.id)
    if (index != -1) {
      page.catalogue[sectionIndex].books[index].cart = book.cart
    }
  })
}
