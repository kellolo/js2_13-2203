const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module : {
        rules : [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
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
        })
    ]
}