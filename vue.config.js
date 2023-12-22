const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
function proxy(alias, url) {
  let key = `^/${alias}`;
  return {
    [key]: {
      target: url,
      changeOrigin: true,
      pathRewrite: {
        [key]: "",
      },
    },
  };
}
module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 全局less变量
        additionalData: `@import "~@/style/variables.less";`,
      },
    },
  },
  devServer: {
    port: 8080,
    host: "127.0.0.1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      ...proxy("api", `http://127.0.0.1:3000/api`),
    },
  },
  configureWebpack: () => {
    return {
      optimization: {
         splitChunks: {
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            modules: {
              name: "chunk-modules",
              // 将node_modules中的第三方模块打包成一个单独的文件
              test: /[\\/]node_modules[\\/]/,
              chunks: "all",
              priority: -10,
              reuseExistingChunk: true,
              enforce: true
            },
            components: {
              name: "chunk-cpms",
              // 将src/components中的公共组件打包成一个单独的文件
              test: /[\\/]src\/components[\\/]/,
              chunks: "all",
              priority: 6,
              reuseExistingChunk: true,
              enforce: true
            }
            // runtimeChunk: {
            //   name: "manifest"
            // }
          }
        }
      }
    }
  },
  chainWebpack: (config) => {
    if (process.env.npm_config_report) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin, [
          {
            analyzerMode: "static"
          }
        ]);
    }
    config.module
      .rule("svg")
      .exclude.add(resolve("src/components/icons/assets"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/components/icons/assets"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "[name]"
      })
      .end();
      config.output.filename("[name].[hash].js").end();
  }
};
