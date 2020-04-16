const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    module : {
        rules : [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node modules/
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node modules/
            } 
        ]
    },
    plugins : [
        new MiniCssExtractPlugin ({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin ({
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ]
}