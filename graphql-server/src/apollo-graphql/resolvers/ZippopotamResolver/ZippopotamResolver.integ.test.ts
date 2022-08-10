import { ApolloServer } from "apollo-server-express"
import { GET_ZIPPO_INFO } from "./testQueries"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { GraphQLSchema } from "graphql"
import resolvers from '@apolloGql/resolvers'
import typeDefs from '@apolloGql/typeDefs'

describe('Resolver ZippopotamResolver', () => {
  let schema: GraphQLSchema
  beforeEach(() => {
    schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })
  })

  describe('zippoInfo()', () => {
    it('Should get the US country code', async () => {
      const apolloServer = new ApolloServer({ schema })
      const { data, errors } = await apolloServer.executeOperation({
        query: GET_ZIPPO_INFO,
        variables: { countryCode: 'us', postalCode: '91405' },
      })

      const {
        country,
        countryAbbreviation,
        places,
        postCode,
      } = data.zippoInfo

      expect(country).toBe('United States')
      expect(countryAbbreviation).toBe('US')
      expect(postCode).toBe('91405')
      for (const place of places) {
        expect(place.latitude).toBeDefined()
        expect(place.longitude).toBeDefined()
      }
    })
  })
})
