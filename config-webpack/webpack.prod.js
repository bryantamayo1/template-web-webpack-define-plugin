const { merge } = require("webpack-merge")
const common = require('./webpack.common');
const webpack  = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

/** @type {import('webpack').Configuration} */
const prod = {
    mode: 'production',
    // devtool: 'source-map' // It's recommended
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: {removeAll: true}
                        }
                    ]
                }
            }),
            new TerserPlugin({
                terserOptions: {
                  format: {
                    comments: false,
                  },
                },
                extractComments: false,
              }),
        ],
        runtimeChunk: {
            name: 'runtime',
        },
        // splitChunks: {
        //     chunks: "all"       // Se genera los .map correspondientes, se aconseja no subirlos a pord
        // }
    },
    plugins:[
        new webpack.DefinePlugin({
            'URL': JSON.stringify('http://my-web-prod')
        })
    ]
}

module.exports = merge(common, prod);