/** @type {import('jest').Config} */
const config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '\\.ts$': 'ts-jest',
    '\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@core/(.*)': '<rootDir>/src/core/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@locales/(.*)': '<rootDir>/src/locales/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
  },
}

module.exports = config
