import { Book } from '@apolloGql/generated.types'

export class BooksModel implements Book {
  title: string
  author: string

  static getAllBooks (): Book[] {
    return [
      {
        title: 'The Awakening',
        author: 'Kate Chopin'
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster'
      }
    ]
  }
}
