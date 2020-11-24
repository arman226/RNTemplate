module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.js', '.ios.js', '.android.js', '.native.js'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          constants: './src/constants',
          modules: './src/modules',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ],
};
