import { ZippoInfo, ZippoUsPlace } from '@apolloGql/generated.types'
import { iZippoUsPlace } from '@interfaces/iZippoInfo'
import axios from 'axios'

export const getZippoInfo = async (countryCode: string, postalCode: string): Promise<ZippoInfo> => {
  const zippoInfo = (await axios.get(`http://api.zippopotam.us/${countryCode}/${postalCode}`)
    .then((response): ZippoInfo => {
      const { data } = response

      const newPlaces = data.places.map((place: iZippoUsPlace) => {
        const { latitude, longitude, state } = place
        return {
          latitude,
          longitude,
          state,
          placeName: place['place name'],
          stateAbbreviation: place['state abbreviation']
        } as ZippoUsPlace
      })

      return {
        country: data.country,
        countryAbbreviation: data['country abbreviation'],
        postCode: data['post code'],
        places: newPlaces
      } as ZippoInfo
    })
    .catch((error) => {
      console.error(error)
    })) as ZippoInfo
  return zippoInfo
}
