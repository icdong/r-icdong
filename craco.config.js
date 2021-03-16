/*
 * @Description: 自定义ant design 主题
 * @Author: Daito Chai
 * @Date: 2021-03-12 14:23:26
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-03-15 11:16:34
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#ff0036' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};