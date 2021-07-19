import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import os from 'os';

function networkIP() {
  const ifaces = os.networkInterfaces();
  let ip = '';
  for (let dev in ifaces) {
    ifaces[dev].forEach(details => {
      if (ip === '' && details.family === 'IPv4' && !details.internal) {
        ip = details.address;
        return;
      }
    });
  }

  return ip || '127.0.0.1';
}

const HOST = process.env.HOST;
const IP = networkIP();

module.exports = {
  mode: 'development',
  entry: './index.ts',
  devtool: 'source-map',
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    },
    clientLogLevel: 'none',
    historyApiFallback: true,
    host: HOST || IP,
    port: 8081
  },
  output: {
    chunkFilename: '[name].[fullhash].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': path.join(__dirname, '../src')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
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
          }
        ]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
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
          runtimeCompat: true,
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: 'url-loader'
      },
      {
        test: /\.(csv|tsv)$/,
        exclude: [path.resolve(__dirname, '../node_modules')],
        loader: 'csv-loader'
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
    new FaviconsWebpackPlugin('public/favicon.ico'),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./build/library/library.json')
    })
  ]
};
