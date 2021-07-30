const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: [path.resolve(__dirname, '../node_modules')],
            use: ['babel-loader'],
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: [path.resolve(__dirname, '../node_modules')],
            use: [
              'babel-loader',
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: false
                }
              }
            ]
          },
          {
            test: /\.(css|scss)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
          },
          {
            test: /\.svg$/,
            include: [path.resolve(__dirname, '../src/assets/icons')],
            loader: 'svg-sprite-loader',
            options: {
              runtimeCompat: true,
              symbolId: 'icon-[name]'
            }
          }
        ]
      },
    
      resolve: {
          alias: {
              '@': path.resolve(__dirname, '../src')
          },
          extensions: ['.tsx', '.ts', '.js', '.jsx'],
          modules: [path.resolve(__dirname, '../node_modules')],
      },
    
      optimization: {
        usedExports: true,
        splitChunks: {
          name: 'vendor',
          chunks: 'all'
        }
      },
}