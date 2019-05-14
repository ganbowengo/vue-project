/**
 * 
 * author ganbowen
 * description css 自动添加前缀  压缩
 * created 2019/05/03 14:56:18
 * 
 */
module.exports = ({
    env
}) => ({
    plugins: {
        'autoprefixer': env === 'production',
        'cssnano': env === 'production'
    }
})