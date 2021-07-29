const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
          {
            test: /\.(ts|tsx|js)$/,
            include: [path.resolve(__dirname, '../src')],
            use: [ 
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ['@babel/preset-env', { modules: false }]
                  ]
                }
              },
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
          extensions: ['.tsx', '.ts', '.js'],
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