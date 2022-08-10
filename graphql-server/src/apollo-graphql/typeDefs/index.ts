import { mergeTypeDefs } from '@graphql-tools/merge'
import { Book } from './BookType'
import { ZippoInfo } from './ZippoInfoType'

export const typeDefs = mergeTypeDefs([ZippoInfo, Book])

export default typeDefs
