'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('src/style/main.scss')
    ],
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                loaders: ['babel'], exclude: /node_modules/, include: __dirname
            },
            { 
                test: /\.css|\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}

module.exports = config;
