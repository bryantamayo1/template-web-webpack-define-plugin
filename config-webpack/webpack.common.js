const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== "production";

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./dev/js/main.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.m?js$/,
                include: path.resolve(__dirname, '../dev/js'),
                exclude: /node_modules/,
                use: "babel-loader"
            },
            // {
            //     test: /\.css$/i,
            //     use: [devMode? 'style-loader': MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            // },
            {
                type: "asset/resource",
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/i
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './dev/index.html'
        }),

    ]
    // .concat(devMode? [] : [
    //     new MiniCssExtractPlugin({
    //         filename: '[name].[contenthash].css'
    //     })
    // ])
}