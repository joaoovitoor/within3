import { gql } from "@apollo/client";

export const GET_ZIPPO_INFO = gql`
  query ZippoInfo($countryCode: String!, $postalCode: String!) {
    zippoInfo(countryCode: $countryCode, postalCode: $postalCode) {
      country
      countryAbbreviation
      places {
        latitude
        longitude
        placeName
        state
        stateAbbreviation
      }
      postCode
    }
  }
`
