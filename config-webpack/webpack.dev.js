const { merge } = require("webpack-merge")
const common = require('./webpack.common');
const webpack  = require('webpack');

/** @type {import('webpack').Configuration} */
const dev = {
    mode: 'development',
    devServer: {
        compress: true,
        port: 3010
      },
    // target: "web", // Ignora browserslist de package.json
    devtool: "eval-source-map",
    plugins:[
      new webpack.DefinePlugin({
        'URL': JSON.stringify('http://my-web-dev')
      })
    ]
}

module.exports = merge(common, dev);