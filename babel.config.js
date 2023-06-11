module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/typings': './src/typings',
          '@/screens': './src/screens',
        },
      },
    ],
  ],
};
