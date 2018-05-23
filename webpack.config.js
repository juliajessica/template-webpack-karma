const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
<<<<<<< HEAD
const CopyWebpackPlugin = require('copy-webpack-plugin');
=======
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

>>>>>>> 44661aa26657251881184df501f7a5b8b445fdfe

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CopyWebpackPlugin([
     { from: 'src/img', to: 'img'}
    ]),
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Title Words',
      template: './src/index.html',
      inject: 'body'
    }),
<<<<<<< HEAD
    new CopyWebpackPlugin([ {from: 'src/img/', to: 'img'} ])
=======
    new Dotenv(),
    new CopyWebpackPlugin([ {from: 'src/img/', to: 'img'} ]),
>>>>>>> 44661aa26657251881184df501f7a5b8b445fdfe
  ],
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
        presets: ['es2015']
        }
      }
   ]
 }
};
