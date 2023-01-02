module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
      "\\.svg$": "<rootDir>/svgTransformer.js"
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.(css|sass|scss)$',
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss|.svg)$": 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
  };