const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './build.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    library: '@c4it/UI',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
    new webpack.DefinePlugin({
      ns: JSON.stringify('c4it')
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`,  { nodir: true }),
    }),
  ],

  ...baseConfig
}
