module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json', '**/tsconfig.json'],
    },
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/newline-after-import': 'error',
        'import/order': ['error', { alphabetize: { order: 'asc' }, 'newlines-between': 'always' }],
    },
};
