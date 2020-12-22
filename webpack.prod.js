const common = require("./webpack.common.js");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin()]   
});