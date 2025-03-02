module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "prettier",
        "plugin:react/recommended",
        'prettier/react'
    ],
    parser: 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx'] }
        ],
        'import/prefer-default-export': 'off',
        'jsx-quotes': ['error', 'prefer-single']
    }
};
