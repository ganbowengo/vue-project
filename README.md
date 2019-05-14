# open

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

npm run dev

npm run build


#create project steps
1.mkdir vue-project
cd vue-project

2.yarn init || npm init
生成package.json

3.安装 webpack  webpack-cli  webpack-dev-server  vue  vue-loader 依赖包

4.新建项目文件结构--多页面

# Project architecture
--vue-project
    --build
        --webpack.config.base.js
        --webpack.config.dev.js
        --webpack.config.pro.js
    --src
        --pages
            --login
                --App.vue
                --login.js
            --system
                --components
                    --...vue
                --router
                    --index.js
                --APP.vue
                --system.js
    --assets
        --styles
        --img
    --static
    --index.html
    --package.json

5.配置package.json文件 运行命令 及 打包命令
    "scripts": {
        "dev": "webpack-dev-server --progress --config build/webpack.config.dev",
        "build": "webpack --progress --config build/webpack.config.pro"
    }

6.配置webpack.config.base.js
    配置打包entry、output
    配置文件映射、文件名后缀补全 resolve
    配置module中的rules babel-loader vue-loader style-loader css-loader url-loader
    配置HTML文件模板生成插件 HtmlWebpackPlugin 
    配置 VueLoaderPlugin 

7.配置webpack.config.dev.js
    配置devServer
    配置mock webpack-api-mocker
    配置全局变量 webpack.DefinePlugin 设置mock的开关

8.配置webpack.config.pro.js
    配置CleanWebpackPlugin 清空每次打包完的dist中的旧文件
    配置MiniCssExtractPlugin 提取js 中的css文件
    配置BundleAnalyzerPlugin 分析打包的文件数据  127.0.0.1：8888查看
    配置optimization 开启公共代码分离

```