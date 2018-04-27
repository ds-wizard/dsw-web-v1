const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        port: 8080,
        inline: true,
        hot: true,
        contentBase: './dist',
        stats: { colors: true }
    }
})
