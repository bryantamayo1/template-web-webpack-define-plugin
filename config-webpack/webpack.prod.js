const { merge } = require("webpack-merge")
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const prod = {
    mode: 'production',
    // devtool: 'source-map' // It's recommended
}

module.exports = merge(common, prod);