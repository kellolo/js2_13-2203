const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    /* object the module  */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
     MiniCssExtractPlugin.loader, 'css-loader'
    ]
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
            template: './src/index.html'
        })
 ]

}