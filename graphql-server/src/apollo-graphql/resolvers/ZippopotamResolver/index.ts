import { QueryZippoInfoArgs, ZippoInfo } from '@apolloGql/generated.types'
import { getZippoInfo } from '@services/Zippopotam'
import { GraphQLCompositeType } from 'graphql'

export const ZippopotamResolver = {
  Query: {
    zippoInfo: async (
      parent: GraphQLCompositeType,
      { countryCode, postalCode }: QueryZippoInfoArgs
    ): Promise<ZippoInfo> => {
      const zippoInfo = await getZippoInfo(countryCode, postalCode)
      return zippoInfo
    }
  }
}
