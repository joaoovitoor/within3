import { Book } from '@apolloGql/generated.types'
import { BooksModel } from '@models/BooksModel'

export const getBooks = (): Book[] => {
  const allBooks = BooksModel.getAllBooks()
  return allBooks
}
