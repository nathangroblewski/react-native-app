module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            screens: './screens',
            components: './components',
            hooks: './hooks',
            types: './types'
          }
        }
      ]
    ]
  };
};
