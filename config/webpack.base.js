const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', { targets: { node: '8' } }],
                ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [path.resolve(__dirname, '../node_modules')],
  },

  optimization: {
    usedExports: true,
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
};
