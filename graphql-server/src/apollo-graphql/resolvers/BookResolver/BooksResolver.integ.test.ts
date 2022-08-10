import { ApolloServer } from 'apollo-server'
import resolvers from '@apolloGql/resolvers'
import typeDefs from '@apolloGql/typeDefs'
import { GET_ALL_BOOKS } from './testQueries'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLSchema } from 'graphql'

describe('Resolver: BooksResolver', () => {
  describe('books()', () => {
    let schema: GraphQLSchema
    beforeEach(() => {
      schema = makeExecutableSchema({
        typeDefs,
        resolvers
      })
    })
  
    it('Should get all books', async () => {
      const apolloServer = new ApolloServer({ schema })
      const { data, errors } = await apolloServer.executeOperation({
        query: GET_ALL_BOOKS
      })

      const books = data?.books
      expect(errors).toBeUndefined()
      expect(books.length).toBe(2)
      for (const book of books) {
        expect(book.title).toBeDefined()
        expect(book.author).toBeDefined()
      }
    })
  })
})
