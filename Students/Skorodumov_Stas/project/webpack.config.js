const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    /* object the module  */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            }
        ]
    },

    /* array the plugins */
    plugins: [
  new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
  new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new VueLoaderPlugin()      
 ],
    devServer: {
        open: true,
        hot: true,
        port: 9080,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: { '^/api': '' },
                secure: false,
                changeOrigin: true
            }
        }
    } 
}