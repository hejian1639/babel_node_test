module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "off",
            "unix"
        ],
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": ["off"],
        'experimentalDecorators': ["off"]
    }
};