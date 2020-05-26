const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const pages = [
    'about',
    'contact',
    'features',
    'get-started',
    'index',
    'media',
    'privacy',
    'resources',
    'scilifelab-dsw-story',
    'terms',
]

module.exports = {
    entry: [
        './src/main.js',
        './src/sass/main.sass'
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
                test: /\.(sass|scss|css)$/,
                use: [{ loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },

    plugins: pages.map(page => new HtmlWebpackPlugin({
        template: `src/pages/${page}.pug`,
        filename: `${page}.html`,
        chunks: ['global', 'index'],
    })).concat([
        new ExtractTextPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }]
            }
        }),
        new CopyWebpackPlugin([{
            from: 'src/static',
            to: 'static'
        }, {
            'from': 'src/favicon.ico',
            'to': 'favicon.ico'
        }])
    ]),

    devServer: {
        inline: true,
        stats: { colors: true },
        historyApiFallback: { disableDotRule: true },
    }
}
