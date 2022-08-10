import { Book } from '@apolloGql/generated.types'
import { getBooks } from '@controllers/books'

export const BooksResolver = {
  Query: {
    books: (): Book[] => {
      const books = getBooks()
      return books
    }
  }
}
