const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'UI',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  externalsPresets: { node: true },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
    }),
  ],

  ...baseConfig,
};
