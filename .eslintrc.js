/* eslint-env node */
// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    env: {
        node: true,
    },
    extends: ['expo', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
