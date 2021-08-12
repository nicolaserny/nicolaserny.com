module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'testing-library', 'jest-dom'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:@next/next/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
        'plugin:react-hooks/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'prettier',
    ],
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
        'no-extra-boolean-cast': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'security/detect-object-injection': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-prototype-methods': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                // The default grouping, but with no blank lines.
                groups: [['^\\u0000', '^@?\\w', '^', '^\\.']],
            },
        ],
        'testing-library/render-result-naming-convention': 'off',
        '@next/next/google-font-display': 'off',
        'sonarjs/no-identical-expressions': 'off',
    },
    overrides: [
        {
            files: ['**/*.e2e.ts', '**/*.spec.ts', '**/*.e2e.tsx', '**/*.spec.tsx'],
            rules: {
                'sonarjs/no-duplicate-string': 'off',
                'sonarjs/no-identical-functions': 'off',
                'unicorn/no-useless-undefined': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                'testing-library/render-result-naming-convention': 'error',
            },
        },
    ],
};
