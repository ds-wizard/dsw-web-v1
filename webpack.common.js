const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './src/main.js', './src/sass/main.sass'
    ],

    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'main.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.sass$/,
                loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract(
                    ['css-loader?{discardComments:{removeAll:true},minimize:true,url:false}', 'sass-loader']
                ))
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            filename: 'index.html',
            chunks: ['global', 'index'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/privacy.pug',
            filename: 'privacy.html',
            chunks: ['global', 'index'],
        }),
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([{
            from: 'src/static',
            to: 'static'
        }])
    ]
}
