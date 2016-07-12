'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'app', 'index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist', 'prod'),
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html',
        inject: 'body',
        filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            screw_ie8: true,
            warnings: false
        }
    }),
    new webpack.ProvidePlugin({
        'fetch': 'exports?self.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'), // flag to compress into prod bundle.js
      __DEV__: false,
      __API__: JSON.stringify('YOUR PRODUCTION API URL')
    })
  ],
  resolve: {
      root: path.resolve(__dirname, 'app'),
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        include: __dirname
      }
    ]
  },
  postcss: () => {
    return {
      defaults: [autoprefixer, precss]
    }
  }
};
