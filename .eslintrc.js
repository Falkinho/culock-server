module.exports = {
    env: {
        browser: false,
        es2021: true
    },
    extends: ['prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        indent: 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/explicit-module-boundary-types': [0],
        'no-tabs': [0],
        'no-mixed-spaces-and-tabs': [0]
    }
}