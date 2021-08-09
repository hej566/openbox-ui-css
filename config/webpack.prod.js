const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/build.tsx',
  output: {
    filename: 'index.tsx',
    path: path.resolve(__dirname, '../dist'),
    library: '@c4it/UI',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
    new webpack.DefinePlugin({
      ns: JSON.stringify('c4it'),
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],

  ...baseConfig,
};
