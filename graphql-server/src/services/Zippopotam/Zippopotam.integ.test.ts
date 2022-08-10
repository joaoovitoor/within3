import { getZippoInfo } from "."

describe('Services: Zippopotam', () => {
  describe('getZippoInfo()', () => {
    it('Should get US country info', async () => {
      const {
        country,
        countryAbbreviation,
        places,
        postCode,
      } = await getZippoInfo('us', '91405')

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
