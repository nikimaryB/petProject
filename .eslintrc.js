module.exports = {
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'env': {
        'browser': true,
        'es2021': true,
        jest: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react',
        'i18next'
    ],
    'rules': {
        'indent': ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'linebreak-style': ['error','unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/button-has-type': 'warn',
        'i18next/no-literal-string': ['warn', {'markupOnly': true}],
        // 'max-len': ['error', {'ignoreComments': true}],
    }
};
