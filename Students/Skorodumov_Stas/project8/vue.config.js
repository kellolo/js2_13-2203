module.exports = {
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