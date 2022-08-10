import { gql } from 'apollo-server'

export const GET_ALL_BOOKS = gql`
  query GetAllBooks {
    books {
      title
      author
    }
  }
`
