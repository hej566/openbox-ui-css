const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './build.js',
  output: {
    filename: 'index.js',
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
        test: /\.vue$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [{ loader: 'vue-loader' }, { loader: 'vue-svg-inline-loader' }]
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [
          {
            loader: 'thread-loader'
          },
          'babel-loader'
        ]
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
        test: /\.(js|vue)$/,
        exclude: [path.resolve(__dirname, './node_modules')],
        use: ['eslint-loader'],
        enforce: 'pre'
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
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      ns: JSON.stringify('c4it')
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./build/library/library.json')
    })
  ]
}
