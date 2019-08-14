const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'js/bundle.js'
    },

    devtool: "source-map",

    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                        publicPath: function(url) {
                            return url.replace('img/', '../img/')
                        }
                    }
                }]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('css/styles.css')
    ]
};