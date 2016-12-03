'use strict';

var webpack = require('webpack');
var path = require('path');

var config = {
    devtool: 'eval',
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
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                loaders: ['babel'], exclude: /node_modules/, include: __dirname
            },
            { 
                test: /\.css|\.sass$/,
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}

module.exports = config;
