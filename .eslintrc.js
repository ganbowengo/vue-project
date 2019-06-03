module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    'plugins': [
        'html',
        'vue'
    ],
    'extends': [
        'standard'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-extend-native': 0, //禁止扩展native对象
        // allow async-await
        "generator-star-spacing": ["warn", "before"],
        'indent': ['error', 4, {'SwitchCase': 1}],
        'object-curly-spacing': 0
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6
    },
    "globals": {
        "MOCK": false
    }
}