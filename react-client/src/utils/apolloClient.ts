import { ApolloClient, InMemoryCache } from "@apollo/client"

const GRAPHQL_SERVER = 'http://localhost:4000/'

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_SERVER,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
