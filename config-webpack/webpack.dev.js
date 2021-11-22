const { merge } = require("webpack-merge")
const common = require('./webpack.common');
const path = require('path');

/** @type {import('webpack').Configuration} */
const dev = {
    mode: 'development',
    devServer: {
        compress: true,
        port: 3010
      },
    target: "web",
    devtool: "eval-source-map"
}

module.exports = merge(common, dev);