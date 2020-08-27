const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');
module.exports = {
  entry: {
    bannerMobile: './src/bannerMobile/index.js',
    youtubeWidget: './src/youtubeWidget/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/builds'),
    filename: '[name]-build/main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ttf', 'otf', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new WebpackAutoInject({
      PACKAGE_JSON_PATH: './package.json',
      componentsOptions: {
        InjectAsComment: {
          tag: 'Build version: {version} - {date}', // default
          dateFormat: 'dddd, mmmm dS, yyyy, h:MM:ss TT', // default
          multiLineCommentType: false, // default
        }
      }
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'builds'),
    compress: true,
    port: 5000,
  },
};
