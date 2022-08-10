import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const server = new ApolloServer({ schema })

server.listen().then(({ url }) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`🚀  Server ready at ${url}`)
  }
})

// TODO: Set up dotenv
