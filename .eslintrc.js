module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: "airbnb-base",
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        indent: ["error", 4],
    },
};