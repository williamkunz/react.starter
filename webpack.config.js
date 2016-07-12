'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: '#eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './app/index'
    ],
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'fetch': 'exports?self.fetch!whatwg-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: !process.env.SERVER_ENDPOINT,
            __API__: (process.env.SERVER_ENDPOINT) ?
            JSON.stringify(process.env.SERVER_ENDPOINT) :
            JSON.stringify('http://localhost:1988')
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
                include: __dirname,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
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
