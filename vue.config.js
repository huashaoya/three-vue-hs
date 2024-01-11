const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  // chainWebpack: config => {
  //   config.resolve.alias.set('ar.js', 'ar.js/three.js/build/ar.js')
  // },
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false, // 或者 require.resolve("path-browserify")
        path: false, // 或者 require.resolve("crypto-browserify")
        crypto: false
      }
    }
  }
})
module.exports = {
  lintOnSave: true, // 暂时关闭代码格式检测
  publicPath: './'
}
