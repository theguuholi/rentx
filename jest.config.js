module.exports = {
    preset: 'jest-expo',
    testPathIgnorePatterns: [
        '/node_modules',
        '/android',
        '/ios',
        '/src/__mocks__',
        '/src/assets',
        '/src/styles'
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components',
    ],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/__mocks__/svgMock.tsx',
        'react-native-responsive-fontsize': '<rootDir>/src/__mocks__/react-native-responsive-fontsize.ts'
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.tsx',
        '!src/**/*.spec.tsx',
    ],
    coverageReporters: ['lcov']
};