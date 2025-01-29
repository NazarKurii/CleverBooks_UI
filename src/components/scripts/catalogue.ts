export interface Book {
  id: number
  title: string
  author: string
  genre: string
  year: number
  language: string
  price: number
  booksLeft: number
  eBook: boolean
  audioBook: boolean
  book: boolean
  favorite: boolean
  cart: number
  imageURL: string
  isNew: boolean
}

export class BookSection {
  genre: string
  books: Book[]

  constructor(books: Book[], genre: string) {
    this.books = books
    this.genre = genre
  }
}
