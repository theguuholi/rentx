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
    transformIgnorePatterns: [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|react-native-responsive-fontsize|native-base|react-native-svg)"
    ],
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components',
    ],
    moduleNameMapper: {
        '\\.svg': '<rootDir>/src/__mocks__/svgMock.tsx',
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.tsx',
        '!src/**/*.spec.tsx',
    ],
    coverageReporters: ['lcov']
};