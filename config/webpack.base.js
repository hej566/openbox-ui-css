const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [path.resolve(__dirname, '../src/icons'), path.resolve(__dirname, '../node_modules')],
        loader: 'url-loader',
        options: {
          esModule: false,
          name: '[name].[ext]?[fullhash]',
          limit: 8192
        }
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, '../src/icons')],
        loader: 'svg-sprite-loader',
        options: {
          runtimeCompat: true,
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, '../node_modules')]
  },

  optimization: {
    usedExports: true,
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  }

}