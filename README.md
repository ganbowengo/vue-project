1.mkdir vue-project
cd vue-project
2.yarn init || npm init
生成package.json
3.安装 webpack  webpack-cli  webpack-dev-server  vue  vue-loader 依赖包
4.新建项目文件结构--多页面
--vue-project
    --build
        --webpack.config.js
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
        "dev": "NODE_ENV=development webpack-dev-server --progress  --mode development --config build/webpack.config",
        "build": "NODE_ENV=production webpack --progress --mode production --config build/webpack.config"
    }
6.配置webpack.config.js
