const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api': {
        target: 'https://m.maizuo.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      },
    }
  }
})
