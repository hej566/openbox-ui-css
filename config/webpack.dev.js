const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = {
  mode: 'development',
  entry: {
    app: './index.tsx'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    },
    clientLogLevel: 'none',
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8081
  },
  output: {
    filename: '[name].[chunkhash:8].bundle.js',
    publicPath: '/'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`,  { nodir: true }),
    }),
    new webpack.DefinePlugin({
      ns: JSON.stringify('c4it')
    }),
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    }),
    new FaviconsWebpackPlugin('public/favicon.ico'),
    new ForkTSCheckerWebpackPlugin()
  ],

  ...baseConfig
};
