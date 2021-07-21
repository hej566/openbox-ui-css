const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development',
  entry: './index.tsx',
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
    chunkFilename: '[name].[fullhash].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       // config: {
          //       //   path: path.join(__dirname, '../postcss.config.js')
          //       // }
          //     }
          //   }
          // },
          // {
          //   loader: 'sass-loader'
          // }
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
          runtimeCompat: true,
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: [path.resolve(__dirname, `../node_modules`)],
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
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
    new FaviconsWebpackPlugin('public/favicon.ico')
  ]
};
