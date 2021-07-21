const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './build.tsx',
  output: {
    filename: 'index.tsx',
    path: path.resolve(__dirname, '../dist'),
    library: '@c4it/UI',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, '../postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader'
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: [path.resolve(__dirname, '../src/icons')],
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
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: 'url-loader'
      }
    ]
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
    })
  ]
}
