module.exports = {
    publicPath: './',
    productionSourceMap: false,

    devServer: {
        // 环境配置
        host: "localhost",
        port: 8080,
        host: '0.0.0.0',
        https: false,
        hotOnly: false,
        disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
        open: true, //配置自动启动浏览器
        proxy: {
            // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            "/api": {
                target: "http://10.1.192.120:9191/rest-boot",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "" //请求的时候使用这个api就可以
                }
            }
        }
    }
}