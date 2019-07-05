module.exports = {
    //一旦配置了root，ESlint停止在父级目录中查找配置文件
    root: true,
    //想要支持的JS语言选项
    parserOptions: {
        parser: "babel-eslint",
        //启用ES6语法支持(如果支持es6的全局变量{env: {es6: true}}，则默认启用ES6语法支持)
        sourceType: "module",
    },
    //代码运行的环境，每个环境都会有一套预定义的全局对象，不同环境可以组合使用
    env: {
        es6: true,
        browser: true
    },
    //访问当前源文件中未定义的变量时，no-undef会报警告。
    //如果这些全局变量是合规的，可以在globals中配置，避免这些全局变量发出警告
    //支持第三方插件的规则，插件以eslint-plugin-作为前缀，配置时该前缀可省略
    //检查vue文件需要eslint-plugin-vue插件
    plugins: ["vue"],
    //集成推荐的规则
    extends: ["eslint:recommended", "plugin:vue/essential"],
    //启用额外的规则或者覆盖默认的规则
    //规则级别分别：为"off"(0)关闭、"warn"(1)警告、"error"(2)错误--error触发时，程序退出
    rules: {
        //关闭“禁用console”规则
        "no-console": "off",
        //缩进不规范警告，要求缩进为2个空格，默认值为4个空格
        indent: ["warn", 4, {
            //设置为1时强制switch语句中case的缩进为2个空格
            "SwitchCase": 1
        }],
        //定义字符串不规范错误，要求字符串使用双引号
        quotes: ["error", "single"],
        // 设置vue将标签渲染为原生html标签时，标签是自闭合的，所以有end标签会报错 关闭
        'vue/no-parsing-error': [2, {
            "x-invalid-end-tag": false
        }]
    },
    globals: {
        "MOCK": false,
        "__dirname": false
    }
}