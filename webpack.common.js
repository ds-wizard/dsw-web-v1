const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = [
    'contact',
    'features',
    'get-started',
    'index',
    'media',
    'privacy'
]

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

    plugins: pages.map(page => new HtmlWebpackPlugin({
        template: `src/${page}.pug`,
        filename: `${page}.html`,
        chunks: ['global', 'index'],
    })).concat([
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([{
            from: 'src/static',
            to: 'static'
        }, {
            'from': 'src/favicon.ico',
            'to': 'favicon.ico'
        }])
    ])
}
