const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    library: ['vue'],
  },

  output: {
    filename: '[name]_[fullhash].dll.js',
    path: path.resolve(__dirname, './build/library'),
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]_[fullhash]',
      path: path.resolve(__dirname, './build/library/[name].json'),
    }),
  ],
};
