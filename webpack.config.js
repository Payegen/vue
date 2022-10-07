module.exports = {
    rule:[
        {
            test: /\.less$/,
            use: [
               "style-loader",
               "css-loader",
                // 引入postcss
                // 类似于babel，把css语法转换兼容旧版浏览器的语法
                {
                   loader: "postcss-loader",
                   options:{
                        postcssOptions: {
                            plugins: [
                                // 浏览器兼容插件
                                "postcss-preset-env",
                            ]
                       }
                   }
                 },
                 "less-loader"
              ],
             exclude:/node_modules/
        },
        {
            test: /\.scss$/,
            use: [
               "style-loader",
               "css-loader",
                // 引入postcss
                // 类似于babel，把css语法转换兼容旧版浏览器的语法
                {
                   loader: "postcss-loader",
                   options:{
                        postcssOptions: {
                            plugins: [
                                // 浏览器兼容插件
                                "postcss-preset-env",
                            ]
                       }
                   }
                 },
                 "sass-loader"
              ],
             exclude:/node_modules/
        }
    ]
}