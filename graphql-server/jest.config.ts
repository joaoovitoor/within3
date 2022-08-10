module.exports = {
  globalSetup: '<rootDir>/jest.setup.ts',
  globalTeardown: '<rootDir>/jest.teardown.ts',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@apolloGql/(.*)': '<rootDir>/src/apollo-graphql/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@resolvers/(.*)': '<rootDir>/src/apollo-graphql/resolvers/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
    '@typeDefs/(.*)': '<rootDir>/src/apollo-graphql/typeDefs/$1',
    '@controllers/(.*)': '<rootDir>/src/controllers/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1'
  }
}
