import { Zippopotam } from './index';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { GET_ZIPPO_INFO } from 'src/gql/queries/zippoInfo';


test('Renders Zippopotam', () => {
  const mocks = [
    {
      request: {
        query: GET_ZIPPO_INFO,
        variables: { countryCode: 'US', postalCode: '91405' }
      },
      result: {
        data: {
          postCode: "91405",
          country: "United States",
          countryAbbreviation: "US",
          places: [
            {
              placeName: "Van Nuys",
              longitude: "-118.4456",
              state: "California",
              stateAbbreviation: "CA",
              latitude: "34.2001"
            }
          ]
        }
      },
    },
  ];
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Zippopotam />
    </MockedProvider>
  )

  const tree = component.toJSON() as any;
  expect(tree.children[0].children[0].children[0]).toBe('Pang Zippopotam')
  expect(tree).toBeDefined()
});
