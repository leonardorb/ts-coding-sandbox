/* eslint-disable no-undef */

module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/', '/migrations/'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.test.ts'],
}
