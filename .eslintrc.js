// https://docs.expo.dev/guides/using-eslint/
export default {
    env: {
        node: true,
    },
    extends: ['expo', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
