import { gql } from 'apollo-server'

export const ZippoInfo = gql`
  type Query {
    zippoInfo(countryCode: String!, postalCode: String!): ZippoInfo
  }

  type ZippoUsPlace {
    placeName: String
    longitude: String
    state: String
    stateAbbreviation: String
    latitude: String
  }

  type ZippoInfo {
    postCode: String
    country: String
    countryAbbreviation: String
    places: [ZippoUsPlace]
  }
`
