// const { defineConfig } = require("@vue/cli-service");defineConfig
module.exports = {
  productionSourceMap: false,
  // transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        // pathRewrite: { "^/api": "" },
        ws: true, //用于支持websocked
        changeOrigin: true, //用于控制请求头中的host值
      },
    },
  },
};
