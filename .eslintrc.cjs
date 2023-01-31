module.exports = {
    extends: [
        'eslint:recommended',
        // 'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
        // Make sure it's always the last config, so it gets the chance to override other configs.
        'eslint-config-prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
    plugins: ['check-file', '@typescript-eslint', 'vitest'],
    root: true,
    settings: {},
    rules: {
        semi: ['error', 'always'],
        quotes: ['warn', 'single', { allowTemplateLiterals: true }],
        eqeqeq: ['error', 'always'],
        'default-case-last': ['error'],
        'no-lonely-if': ['error'],
        '@typescript-eslint/no-magic-numbers': [
            'off',
            {
                ignoreArrayIndexes: true,
                ignoreDefaultValues: true,
                ignoreReadonlyClassProperties: true,
                ignore: [-1, 0, 1],
            },
        ],
        'no-return-assign': ['error', 'always'],
        'no-return-await': ['error'],
        'no-var': ['error'],
        'no-cond-assign': ['error', 'always'],
    },
};
