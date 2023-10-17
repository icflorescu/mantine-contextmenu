module.exports = {
  plugins: {
    'postcss-import': {}, // 👈 this plugin must come first
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      // ...
    },
  },
};
